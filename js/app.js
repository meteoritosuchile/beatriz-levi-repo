// ---------- Supabase ----------
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

// ---------- State ----------
let currentSample = null;
let observationsCache = {};
let filesCache = {};

// ---------- Navigation ----------
function navigate(page, data) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');
  const navLink = document.querySelector(`nav a[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');
  if (page === 'home') renderHome();
  if (page === 'samples') renderSamples();
  if (page === 'paper') renderPaperCharts();
  if (page === 'sample') showSample(data);
  window.scrollTo(0, 0);
}

// ---------- Toast ----------
function toast(msg, type = 'success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast toast-' + type + ' show';
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ---------- Home ----------
function renderHome() {
  const total = SAMPLES.length;
  const withKly = SAMPLES.filter(s => s.lc != null).length;
  const types = {};
  SAMPLES.forEach(s => { types[s.t] = (types[s.t] || 0) + 1; });
  const locs = {};
  SAMPLES.forEach(s => { locs[s.loc] = (locs[s.loc] || 0) + 1; });
  document.getElementById('home-content').innerHTML = `
    <h1>Beatriz Levi Repository</h1>
    <p style="text-align:center;color:#666;margin-bottom:20px">
      Atacama Desert Meteorite Classification &amp; Fragmentation Analysis
    </p>
    <div class="stats-row">
      <div class="stat-card"><div class="num">${total}</div><div class="label">Total Specimens</div></div>
      <div class="stat-card"><div class="num">${withKly}</div><div class="label">KLY5 Measured</div></div>
      <div class="stat-card"><div class="num">${Object.keys(locs).length}</div><div class="label">Localities</div></div>
    </div>
    <div class="stats-row">
      ${Object.entries(types).filter(([k]) => k !== '??').map(([k,v]) =>
        `<div class="stat-card"><div class="num" style="color:${TYPE_COLORS[k]}">${v}</div><div class="label">Type ${k}</div></div>`
      ).join('')}
      ${types['??'] ? `<div class="stat-card"><div class="num" style="color:#999">${types['??']}</div><div class="label">Unclassified</div></div>` : ''}
    </div>
    <div style="margin-top:24px;text-align:center">
      <button class="btn" onclick="navigate('samples')">Browse Samples</button>
      <button class="btn" onclick="navigate('paper')" style="margin-left:10px">Read Paper</button>
    </div>
  `;
}

// ---------- Samples ----------
function renderSamples(filter = '') {
  const f = filter.toLowerCase();
  const list = SAMPLES.filter(s =>
    !f || s.c.toLowerCase().includes(f) || s.n.toLowerCase().includes(f) || s.loc.toLowerCase().includes(f)
  );
  document.getElementById('samples-content').innerHTML = `
    <h1>Samples</h1>
    <input class="search-bar" id="sample-search" placeholder="Search by code, name, locality..." value="${filter}"
      oninput="renderSamples(this.value)">
    <div class="sample-grid">
      ${list.map(s => {
        const kt = s.lc != null ? (s.lc >= 5.08 ? 'H' : s.lc >= 4.68 ? 'L' : s.lc >= 4.37 ? 'LL' : '??') : '—';
        return `<div class="sample-card" onclick="navigate('sample','${s.c}')">
          <div class="code">${s.c}</div>
          <div class="name">${s.n}</div>
          <div style="font-size:11px;color:#888">${s.loc}</div>
          <div class="type">${typeBadge(s.t)} ${kt !== '—' ? typeBadge(kt) : ''}</div>
        </div>`;
      }).join('')}
    </div>
    <p style="font-size:12px;color:#888;text-align:center">${list.length} sample(s) found</p>
  `;
  document.getElementById('sample-search')?.focus();
}

// ---------- Sample Detail ----------
async function showSample(code) {
  const s = SAMPLES.find(x => x.c === code);
  if (!s) { navigate('samples'); return; }
  currentSample = s;

  const kt = s.lc != null ? (s.lc >= 5.08 ? 'H' : s.lc >= 4.68 ? 'L' : s.lc >= 4.37 ? 'LL' : '??') : '—';
  const wStr = s.pW != null ? 'W' + s.pW : (s.eW != null ? 'W' + s.eW + ' (est.)' : '—');
  const irStr = s.ir === 'sí' ? '<span class="badge badge-ok">Done</span>' : s.ir === 'disp' ? '<span class="badge badge-pending">Pending</span>' : '<span class="badge badge-none">No</span>';

  // Get field data
  const fieldVals = FIELD_DATA[s.n] || FIELD_DATA[s.n.replace(/(\w+)(\d+)/,'$1 $2')] || [];
  const fieldMean = fieldVals.length ? (fieldVals.reduce((a,b)=>a+b,0)/fieldVals.length).toFixed(2) : '—';

  document.getElementById('sample-content').innerHTML = `
    <p><a href="#" onclick="navigate('samples');return false" style="font-size:13px">&larr; Back to samples</a></p>
    <h1>${s.n} <span style="font-size:14px;font-weight:400;color:#888">${s.c}</span></h1>

    <div class="tabs">
      <div class="tab active" data-tab="info" onclick="switchSampleTab('info')">Info</div>
      <div class="tab" data-tab="files" onclick="switchSampleTab('files')">Files</div>
      <div class="tab" data-tab="obs" onclick="switchSampleTab('obs')">Observations</div>
    </div>

    <div id="sample-tab-info">
      <div class="meta" style="display:grid;grid-template-columns:140px 1fr;gap:4px 12px;font-size:13px">
        <dt>Locality</dt><dd>${s.loc}</dd>
        <dt>Code</dt><dd>${s.c}</dd>
        <dt>Unified Type</dt><dd>${typeTag(s.t)}</dd>
        <dt>KLY5 Index</dt><dd>${s.lc != null ? s.lc.toFixed(3) : '—'}</dd>
        <dt>KLY5 Group</dt><dd>${typeTag(kt)}</dd>
        <dt>Weathering</dt><dd>${wStr}</dd>
        <dt>IR Status</dt><dd>${irStr}</dd>
        <dt>Field χ (10⁻³ SI)</dt><dd>${fieldMean}</dd>
        <dt>Notes</dt><dd style="text-align:left">${s.nota || '—'}</dd>
      </div>
    </div>

    <div id="sample-tab-files" style="display:none">
      <div class="upload-zone" id="upload-zone" onclick="document.getElementById('file-input').click()">
        <div class="icon">&#x1F4C1;</div>
        <p><strong>Click to upload</strong> or drag &amp; drop<br>Photos (.jpg, .png) or spectra (.dpt, .txt)</p>
        <input type="file" id="file-input" multiple accept=".jpg,.jpeg,.png,.gif,.dpt,.txt,.csv" style="display:none"
          onchange="handleFileUpload(event)">
      </div>
      <div id="file-preview"></div>
      <div id="sample-files-list"><div class="loading">Loading files...</div></div>
    </div>

    <div id="sample-tab-obs" style="display:none">
      <div class="obs-form">
        <input type="text" id="obs-author" placeholder="Your name (optional)">
        <textarea id="obs-text" placeholder="Write your observations here..."></textarea>
        <button class="btn" onclick="addObservation('${s.c}')">Save Observation</button>
      </div>
      <div id="sample-obs-list"><div class="loading">Loading observations...</div></div>
    </div>
  `;

  // Load files and observations from Supabase
  loadFiles(s.c);
  loadObservations(s.c);

  // Drag & drop
  const zone = document.getElementById('upload-zone');
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('dragover'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('dragover');
    if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files, s.c);
  });
}

function switchSampleTab(tab) {
  document.querySelectorAll('#sample-content .tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  ['info','files','obs'].forEach(t => {
    const el = document.getElementById('sample-tab-' + t);
    if (el) el.style.display = t === tab ? 'block' : 'none';
  });
}

// ---------- Files ----------
async function handleFileUpload(e) {
  const s = currentSample;
  if (!s) return;
  handleFiles(e.target.files, s.c);
  e.target.value = '';
}

async function handleFiles(files, sampleCode) {
  const preview = document.getElementById('file-preview');
  preview.innerHTML = '<div class="loading">Uploading...</div>';
  let ok = 0, err = 0;
  for (const file of files) {
    const ext = file.name.split('.').pop().toLowerCase();
    const isImage = ['jpg','jpeg','png','gif'].includes(ext);
    const folder = isImage ? 'photos' : 'spectra';
    const filePath = `${sampleCode}/${Date.now()}_${file.name}`;
    try {
      const { error } = await _supabase.storage.from('sample-files').upload(filePath, file);
      if (error) { err++; console.error(error); continue; }
      // Save metadata to files table
      const { error: dbErr } = await _supabase.from('files').insert({
        sample_code: sampleCode,
        filename: file.name,
        file_type: isImage ? 'photo' : 'dpt',
        storage_path: filePath,
        uploaded_by: 'web'
      });
      if (dbErr) console.error(dbErr);
      ok++;
    } catch(e) { err++; console.error(e); }
  }
  preview.innerHTML = '';
  toast(`${ok} file(s) uploaded, ${err} error(s)`);
  loadFiles(sampleCode);
}

async function loadFiles(sampleCode) {
  const el = document.getElementById('sample-files-list');
  let { data, error } = await _supabase
    .from('files')
    .select('*')
    .eq('sample_code', sampleCode)
    .order('created_at', { ascending: false });
  if (error) { el.innerHTML = '<p style="color:#c0392b">Error loading files</p>'; return; }
  if (!data || !data.length) {
    el.innerHTML = '<p style="color:#888;font-size:13px;text-align:center;padding:20px">No files uploaded yet</p>';
    return;
  }
  el.innerHTML = '<div class="file-list">' + data.map(f => {
    const url = _supabase.storage.from('sample-files').getPublicUrl(f.storage_path).data.publicUrl;
    const isImg = f.file_type === 'photo';
    const icon = isImg ? '📷' : '📊';
    return `<div class="file-item" ondblclick="window.open('${url}','_blank')">
      <span class="file-icon">${icon}</span>
      <div class="file-info">
        <div class="fname">${f.filename}</div>
        <div class="fmeta">${new Date(f.created_at).toLocaleDateString()} ${f.uploaded_by ? 'by ' + f.uploaded_by : ''}</div>
      </div>
      <a href="${url}" target="_blank" class="btn btn-sm">View</a>
      <button class="btn btn-sm btn-danger" onclick="deleteFile('${f.id}','${f.storage_path}','${sampleCode}')">×</button>
    </div>`;
  }).join('') + '</div>';
}

async function deleteFile(id, path, sampleCode) {
  if (!confirm('Delete this file?')) return;
  await _supabase.storage.from('sample-files').remove([path]);
  await _supabase.from('files').delete().eq('id', id);
  toast('File deleted');
  loadFiles(sampleCode);
}

// ---------- Observations ----------
async function addObservation(sampleCode) {
  const author = document.getElementById('obs-author').value.trim() || 'Anonymous';
  const content = document.getElementById('obs-text').value.trim();
  if (!content) { toast('Please write something', 'error'); return; }
  const { error } = await _supabase.from('observations').insert({
    sample_code: sampleCode,
    author,
    content
  });
  if (error) { toast('Error saving: ' + error.message, 'error'); return; }
  document.getElementById('obs-text').value = '';
  toast('Observation saved');
  loadObservations(sampleCode);
}

async function loadObservations(sampleCode) {
  const el = document.getElementById('sample-obs-list');
  let { data, error } = await _supabase
    .from('observations')
    .select('*')
    .eq('sample_code', sampleCode)
    .order('created_at', { ascending: false });
  if (error) { el.innerHTML = '<p style="color:#c0392b">Error loading observations</p>'; return; }
  if (!data || !data.length) {
    el.innerHTML = '<p style="color:#888;font-size:13px;text-align:center;padding:20px">No observations yet</p>';
    return;
  }
  el.innerHTML = '<div class="obs-list">' + data.map(o =>
    `<div class="obs-item">
      <span class="obs-author">${o.author}</span>
      <span class="obs-date">${new Date(o.created_at).toLocaleString()}</span>
      <div class="obs-text">${o.content}</div>
    </div>`
  ).join('') + '</div>';
}

// ---------- Paper Charts (from original paper.html) ----------
function renderPaperCharts() {
  // Give a moment for the canvas elements to be in DOM
  setTimeout(() => {
    drawRochetteChart();
    drawDoughnutChart();
  }, 50);
}

function drawRochetteChart() {
  const cv = document.getElementById('rochetteCanvas');
  if (!cv) return;
  const dpr = window.devicePixelRatio || 1;
  const W = 760, H = 420;
  cv.width = W * dpr; cv.height = H * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const MARGIN = { top: 35, right: 25, bottom: 38, left: 48 };
  const W_MIN = -0.5, W_MAX = 5.5, CHI_MIN = 3.7, CHI_MAX = 5.9;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
  const x0 = MARGIN.left, y0 = MARGIN.top, x1 = W - MARGIN.right, y1 = H - MARGIN.bottom;
  const toCanvas = (w, chi) => ({ x: x0 + (w - W_MIN) / (W_MAX - W_MIN) * (x1 - x0), y: y1 - (chi - CHI_MIN) / (CHI_MAX - CHI_MIN) * (y1 - y0) });

  // Bands
  const bands = [
    { l: 'H', min: 5.08, max: 5.9, c: 'rgba(39,174,96,0.12)' },
    { l: 'L', min: 4.68, max: 5.08, c: 'rgba(230,126,34,0.12)' },
    { l: 'LL', min: 4.37, max: 4.68, c: 'rgba(184,134,11,0.12)' },
  ];
  bands.forEach(b => {
    const p1 = toCanvas(W_MIN, b.max), p2 = toCanvas(W_MAX, b.min);
    ctx.fillStyle = b.c;
    ctx.fillRect(p1.x, p1.y, x1 - x0, p2.y - p1.y);
    ctx.strokeStyle = '#ccc'; ctx.lineWidth = 0.5;
    ctx.strokeRect(p1.x, p1.y, x1 - x0, p2.y - p1.y);
    ctx.fillStyle = '#aaa'; ctx.font = '10px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
    ctx.fillText(b.l, p1.x + 4, p1.y + 12);
  });

  // Axes
  ctx.fillStyle = '#444'; ctx.font = '11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  for (let w = 0; w <= 5; w++) { const p = toCanvas(w, 0); ctx.fillText('W' + w, p.x, y1 + 6); }
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (let c = 3.8; c <= 5.8; c += 0.2) { const p = toCanvas(0, c); ctx.fillText(c.toFixed(1), p.x - 6, p.y); }
  ctx.fillStyle = '#333'; ctx.font = '13px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.fillText('Weathering Grade (W)', (x0 + x1) / 2, y1 + 24);
  ctx.save(); ctx.translate(15, (y0 + y1) / 2); ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
  ctx.fillText('log χ (10⁻⁹ m³/kg)', 0, 0); ctx.restore();
  ctx.strokeStyle = '#999'; ctx.lineWidth = 1; ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);

  // Points
  const hasPetro = s => ['Exp19-11','Exp19-14','Exp19-21','Exp19-30','Exp19-41','Exp19-42','Exp19-53','Exp19-49'].includes(s.c);
  const colors = { H: '#27ae60', L: '#e67e22', LL: '#b8860b', '??': '#999', C: '#8e44ad' };
  SAMPLES.filter(s => s.lc != null).forEach(s => {
    const w = s.pW != null ? s.pW : (s.eW != null ? s.eW : 0);
    const p = toCanvas(w, s.lc);
    ctx.beginPath();
    if (hasPetro(s)) { ctx.moveTo(p.x - 4, p.y - 4); ctx.lineTo(p.x + 4, p.y + 4); ctx.moveTo(p.x + 4, p.y - 4); ctx.lineTo(p.x - 4, p.y + 4); }
    else { ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI); }
    ctx.strokeStyle = colors[s.t] || '#999';
    ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = colors[s.t] || '#999';
    if (!hasPetro(s)) { ctx.globalAlpha = 0.4; ctx.fill(); ctx.globalAlpha = 1; }
  });
}

function drawDoughnutChart() {
  const cv = document.getElementById('doughnutCanvas');
  if (!cv) return;
  const dpr = window.devicePixelRatio || 1;
  cv.width = 300 * dpr; cv.height = 300 * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const cx = 150, cy = 150, R = 110, segs = [];
  const types = {};
  SAMPLES.filter(s => s.lc != null).forEach(s => {
    const t = s.lc >= 5.08 ? 'H' : s.lc >= 4.68 ? 'L' : s.lc >= 4.37 ? 'LL' : '??';
    types[t] = (types[t] || 0) + 1;
  });
  const total = Object.values(types).reduce((a, b) => a + b, 0);
  const colors = { H: '#27ae60', L: '#e67e22', LL: '#b8860b', '??': '#999' };
  let start = -Math.PI / 2;
  ctx.clearRect(0, 0, 300, 300);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, 300, 300);
  Object.entries(types).forEach(([t, n]) => {
    const a = (n / total) * Math.PI * 2;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, R, start, start + a); ctx.closePath();
    ctx.fillStyle = colors[t] || '#999'; ctx.fill();
    const mid = start + a / 2;
    const lx = cx + Math.cos(mid) * (R + 18), ly = cy + Math.sin(mid) * (R + 18);
    ctx.fillStyle = '#333'; ctx.font = '11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(`${t} (${n})`, lx, ly);
    start += a;
  });
  ctx.beginPath(); ctx.arc(cx, cy, R * 0.35, 0, Math.PI * 2);
  ctx.fillStyle = '#fff'; ctx.fill();
  ctx.fillStyle = '#333'; ctx.font = 'bold 22px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(total, cx, cy - 6);
  ctx.font = '10px Arial'; ctx.fillText('samples', cx, cy + 12);
}
