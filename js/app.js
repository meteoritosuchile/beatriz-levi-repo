// IR consistency scores for existing clusters (from full-range cosine analysis)
const _IR_CLUSTER_STATUS = {
  'Cluster 2':        { ok: true,  d:0.039, note:'IR consistent' },
  'Cluster 4':        { ok: null, d:null,  note:'1 sample with IR — pending' },
  'Cluster 5':        { ok: null, d:null,  note:'1 sample with IR — pending' },
  'Cluster 7: H5':    { ok: null, d:null,  note:'1 sample with IR — pending' },
  'Cluster 8: H(4-5)':{ ok: true, d:0.034, note:'IR consistent' },
  'Cluster 11: H4':   { ok: true, d:0.024, note:'IR consistent' },
};

// ---------- Supabase ----------
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

// ---------- Auth ----------
let currentUser = null;

_supabase.auth.onAuthStateChange((event, session) => {
  currentUser = session?.user ?? null;
  updateAuthUI();
});

function updateAuthUI() {
  const display = document.getElementById('auth-display');
  const btn = document.getElementById('auth-btn');
  if (!display || !btn) return;
  if (currentUser) {
    display.textContent = currentUser.email;
    btn.textContent = 'Logout';
    btn.onclick = doLogout;
  } else {
    display.textContent = '';
    btn.textContent = 'Login';
    btn.onclick = toggleAuth;
  }
}

function toggleAuth() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.style.display = 'flex';
}

function closeAuth() {
  document.getElementById('auth-modal').style.display = 'none';
  document.getElementById('auth-msg').textContent = '';
}

async function doLogin() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const msg = document.getElementById('auth-msg');
  if (!email || !password) { msg.textContent = 'Enter email and password'; return; }
  const { error } = await _supabase.auth.signInWithPassword({ email, password });
  if (error) { msg.textContent = error.message; return; }
  closeAuth();
  toast('Logged in as ' + email);
}

async function doSignup() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const msg = document.getElementById('auth-msg');
  if (!email || !password) { msg.textContent = 'Enter email and password'; return; }
  if (password.length < 6) { msg.textContent = 'Password must be at least 6 characters'; return; }
  const { error } = await _supabase.auth.signUp({ email, password });
  if (error) { msg.textContent = error.message; return; }
  msg.style.color = '#27ae60';
  msg.textContent = 'Check your email to confirm signup!';
}

async function doLogout() {
  await _supabase.auth.signOut();
  toast('Logged out');
}

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
  if (page === 'pairing') renderPairing();
  if (page === 'contact') renderContact();
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
  document.getElementById('home-content').innerHTML = `
    <div style="position:relative;text-align:center;margin:0 -24px 32px;overflow:hidden">
      <img src="Depto_geo.jpg" alt="Beatriz Levi Repository" style="width:100%;height:auto;display:block;min-height:250px;object-fit:cover">
      <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.7));padding:40px 20px 20px">
        <h1 style="color:#fff;margin:0;font-size:26px;text-shadow:0 1px 4px rgba(0,0,0,.5)">Beatriz Levi Repository</h1>
        <p style="color:#ddd;font-size:14px;margin:4px 0 0;text-align:center">Atacama Desert Meteorite Collection · Universidad de Chile</p>
      </div>
    </div>

    <div style="max-width:700px;margin:0 auto 32px;background:#fff8e1;border:1px solid #ffe082;border-radius:6px;padding:14px 18px;font-size:13px;color:#6d4c00">
      <strong>⚠ Work in progress.</strong> This repository is being systematically organized and documented. Some samples have incomplete data (pending IR analysis, petrography, or KLY5 measurement). All entries will be progressively completed over time.
    </div>

    <div style="max-width:700px;margin:0 auto 32px">
      <h2 style="text-align:center;margin-bottom:12px">About the Repository</h2>
      <p>The Beatriz Levi Repository houses 49 meteorite specimens from the Atacama Desert (Catalina, El Médano, San Juan, and Los Vientos areas), all recovered during the 2019 expedition. The collection was classified using magnetic susceptibility (KLY5-A Kappabridge), infrared spectroscopy (FT-IR), Raman spectroscopy, and petrography.</p>
      <p>This project was funded by a Community Grant from the Meteoritical Society (August 2025) and is housed at the Departamento de Geología, Facultad de Ciencias Físicas y Matemáticas, Universidad de Chile.</p>
    </div>

    <div class="stats-row" style="max-width:600px;margin:0 auto 32px">
<div class="stat-card"><div class="num">49</div><div class="label">Total Specimens</div></div>
      <div class="stat-card"><div class="num">43</div><div class="label">KLY5 Measured</div></div>
      <div class="stat-card"><div class="num">4</div><div class="label">Localities</div></div>
    </div>

    <div style="text-align:center;margin-top:16px">
      <button class="btn" onclick="navigate('samples')">Browse Samples</button>
      <button class="btn" onclick="navigate('paper')" style="margin-left:10px">Read Pre-print</button>
      <button class="btn" onclick="navigate('pairing')" style="margin-left:10px">View Pairing Groups</button>
    </div>

    <div class="logos" style="margin-top:32px">
      <img src="Logos/Logo_Geologia.png" alt="Departamento de Geología UChile" title="Departamento de Geología, Universidad de Chile" style="height:90px">
      <img src="Logos/Logo_MyCP.png" alt="Grupo Meteoritos y Ciencias Planetarias" title="Grupo Meteoritos y Ciencias Planetarias" style="height:70px">
      <img src="Logos/Logo_Metsoc.png" alt="Meteoritical Society" title="Meteoritical Society" style="height:48px">
      <img src="Logos/Logo_UDP.png" alt="Cosmic Dust Lab UDP" title="Cosmic Dust Laboratory, Universidad Diego Portales" style="height:60px">
      <img src="Logos/Logo_Planetary_Fluids.png" alt="Planetary Fluids Group" title="Planetary Fluids Research Group, Universidad de Chile" style="height:70px">
      <img src="Logos/U de Chile.jpg" alt="Universidad de Chile" title="Facultad de Ciencias Físicas y Matemáticas, Universidad de Chile" style="height:70px">
    </div>
  `;
}

// ---------- Contact ----------
function renderContact() {
  document.getElementById('contact-content').innerHTML = `
    <h1 style="margin-bottom:16px">Contact & Loan System</h1>

    <div style="max-width:700px;margin:0 auto 32px;background:#f8f8f8;border-left:3px solid #1a2a3a;padding:20px 24px;border-radius:0 6px 6px 0">
      <h2 style="margin:0 0 8px;font-size:16px">Sample Loan Request</h2>
      <p style="font-size:13px;margin:0 0 10px">The Beatriz Levi Repository is a physical meteorite collection available to the scientific community.</p>
      <p style="font-size:13px;font-weight:600;margin:0 0 6px">How to request a sample?</p>
      <p style="font-size:13px;margin:0 0 4px">Samples are available for research upon formal request to the Depto. de Geología, FCFM, U. de Chile:</p>
      <ol style="font-size:13px;margin:6px 0 0 18px;padding:0;color:#444">
        <li style="margin-bottom:4px">Browse the catalog and select the samples of interest</li>
        <li style="margin-bottom:4px">Send a brief research proposal to the repository team</li>
        <li style="margin-bottom:4px">Sign a temporary loan agreement with return commitment</li>
        <li style="margin-bottom:4px">Shipping costs are borne by the requester</li>
      </ol>
      <p style="font-size:13px;margin:8px 0 0">Contact: Departamento de Geología, FCFM, Universidad de Chile — <a href="Repository_The_Meteoritical_Society_Community_Grant_-_Application_Form_DM (2).pdf" target="_blank" style="color:#1a2a3a;font-weight:600">Project Document</a></p>
    </div>

    <div style="max-width:700px;margin:0 auto 32px;text-align:center">
      <h2 style="margin-bottom:12px">Contact Information</h2>
      <p style="text-align:center;font-size:13px;color:#555">
        <strong>Departamento de Geología</strong><br>
        Facultad de Ciencias Físicas y Matemáticas<br>
        Universidad de Chile<br>
        Plaza Ercilla 803, Santiago, Chile<br><br>
        <strong>Academic responsible:</strong> Daniel Moncada<br>
        <strong>Repository curator:</strong> Samanta Aravena<br>
        <strong>Email:</strong> <a href="mailto:meteoritosuchile@gmail.com" style="color:#1a2a3a;font-weight:600">meteoritosuchile@gmail.com</a>
      </p>
      <p style="margin-top:12px">
        <a href="mailto:meteoritosuchile@gmail.com" class="btn" style="font-size:14px">✉ Send us an email</a>
      </p>
    </div>

    <div class="logos" style="margin-top:24px">
      <img src="Logos/Logo_Geologia.png" alt="Departamento de Geología UChile" title="Departamento de Geología, Universidad de Chile" style="height:90px">
      <img src="Logos/Logo_MyCP.png" alt="Grupo Meteoritos y Ciencias Planetarias" title="Grupo Meteoritos y Ciencias Planetarias" style="height:70px">
      <img src="Logos/Logo_Metsoc.png" alt="Meteoritical Society" title="Meteoritical Society" style="height:48px">
      <img src="Logos/Logo_UDP.png" alt="Cosmic Dust Lab UDP" title="Cosmic Dust Laboratory, Universidad Diego Portales" style="height:60px">
      <img src="Logos/Logo_Planetary_Fluids.png" alt="Planetary Fluids Group" title="Planetary Fluids Research Group, Universidad de Chile" style="height:70px">
      <img src="Logos/U de Chile.jpg" alt="Universidad de Chile" title="Facultad de Ciencias Físicas y Matemáticas, Universidad de Chile" style="height:70px">
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
    <div class="table-wrap">
    <table>
      <thead><tr>
        <th>Code</th>
        <th>Locality</th>
        <th>Class</th>
        <th>Type</th>
        <th style="text-align:right">Shock</th>
        <th style="text-align:right">Weathering</th>
        <th style="text-align:right">Mass (g)</th>
        <th style="text-align:right">Density (g/cm³)</th>
        <th style="text-align:right">log χ</th>
        <th style="text-align:right">IR</th>
      </tr></thead>
      <tbody>
        ${list.map(s => {
          const mass = MASS_MAP[s.c];
          const dens = DENSITY_MAP[s.c];
          const d = SAMPLE_DETAILS[s.c];
          const typeClass = d?.classification?.class;
          const typeLetter = typeClass ? typeClass.match(/^(H|LL|L)/)?.[1] : (s.t !== '??' ? s.t : null);
          const typeLabel = typeClass || typeLetter || '—';
          const typeColor = typeLetter ? {H:'h',L:'l',LL:'ll'}[typeLetter] : 'q';
          const wStr = s.pW != null ? 'W' + s.pW : '—';
          const irStr = s.ir === 'sí' ? '✓' : s.ir === 'disp' ? '…' : '—';
          return `<tr onclick="navigate('sample','${s.c}')" class="clickable">
            <td><strong>${s.c}</strong></td>
            <td>${s.loc}</td>
            <td>OC</td>
            <td><span class="tag-${typeColor}">${typeLabel}</span></td>
            <td style="text-align:right">${s.shk || d?.classification?.shock || '—'}</td>
            <td style="text-align:right">${wStr}</td>
            <td style="text-align:right">${mass != null ? mass.toFixed(1) : '—'}</td>
            <td style="text-align:right">${dens != null ? dens.toFixed(3) : '—'}</td>
            <td style="text-align:right">${s.lc != null ? s.lc.toFixed(3) : '—'}</td>
            <td style="text-align:right">${irStr}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
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
  const wStr = s.pW != null ? 'W' + s.pW : '—';
  const irStr = s.ir === 'sí' ? '<span class="badge badge-ok">Done</span>' : s.ir === 'disp' ? '<span class="badge badge-pending">Pending</span>' : '<span class="badge badge-none">No</span>';

  // Get field data
  const fieldVals = FIELD_DATA[s.n] || FIELD_DATA[s.n.replace(/(\w+)(\d+)/,'$1 $2')] || [];
  const fieldMean = fieldVals.length ? (fieldVals.reduce((a,b)=>a+b,0)/fieldVals.length).toFixed(2) : '—';

  document.getElementById('sample-content').innerHTML = `
    <p><a href="#" onclick="navigate('samples');return false" style="font-size:13px">&larr; Back to samples</a></p>
    <h1>${s.c} <span style="font-size:14px;font-weight:400;color:#888">${s.n}</span></h1>

    <div class="tabs">
      <div class="tab active" data-tab="info" onclick="switchSampleTab('info')">Info</div>
      <div class="tab" data-tab="gallery" onclick="switchSampleTab('gallery');renderGallery('${s.c}')">Gallery</div>
      <div class="tab" data-tab="files" onclick="switchSampleTab('files')">Spectra</div>
    </div>

    <div id="sample-tab-info">
      <div class="meta" style="display:grid;grid-template-columns:140px 1fr;gap:4px 12px;font-size:13px">
        <dt>Locality</dt><dd>${s.loc}</dd>
        <dt>Code</dt><dd>${s.c}</dd>
        <dt>Class</dt><dd>Ordinary Chondrite (OC)</dd>
        <dt>Type</dt><dd>${(()=>{const d=SAMPLE_DETAILS[s.c]; let h=''; if(d?.classification?.class){const c=d.classification.class;const m=c.match(/^(H|LL|L)/);h+=`<span class="tag-${(m?{H:'h',L:'l',LL:'ll'}[m[1]]:'q')}">${c}</span>`}else{h+=typeTag(s.t)}const inc=isInconsistent(s);if(inc)h+=` <span title="${inc}" style="cursor:help;font-size:14px">⚠️</span>`;return h})()}</dd>
        <dt>Shock</dt><dd>${s.shk || SAMPLE_DETAILS[s.c]?.classification?.shock || '—'}</dd>
        <dt>Classifier</dt><dd>${SAMPLE_DETAILS[s.c]?.classification?.classifier || 'C. S. Aravena (2026)'}</dd>
        <dt>log χ (KLY5)</dt><dd>${s.lc != null ? s.lc.toFixed(3) : '—'}</dd>
        <dt>Weathering</dt><dd>${wStr}</dd>
        <dt>IR Status</dt><dd>${irStr} ${s.ir === 'sí' ? '<span style="color:#888;font-size:11px">(pending analysis)</span>' : ''}</dd>
        <dt>Field χ (10⁻³ SI)</dt><dd>${fieldMean}</dd>
        <dt>Density (g/cm³)</dt><dd>${DENSITY_MAP[s.c] ? DENSITY_MAP[s.c].toFixed(3) : '—'}</dd>
        <dt>Fragments</dt><dd>${FRAGMENTS_MAP[s.c] != null ? FRAGMENTS_MAP[s.c] === 'Briquette' ? 'Briquette (1 pellet)' : `${FRAGMENTS_MAP[s.c]} fragment${FRAGMENTS_MAP[s.c] > 1 ? 's' : ''}` : s.pieces ? `${s.pieces} fragment${s.pieces > 1 ? 's' : ''}` : '—'}</dd>
      </div>

      ${renderSampleDetails(s.c)}
      ${!SAMPLE_DETAILS[s.c] ? `
      <div class="sample-details" style="margin-top:20px;border-top:1px solid #ddd;padding-top:16px">
        <h3 style="font-size:15px;margin-bottom:12px">Location</h3>
        <table style="width:100%;font-size:12px;border-collapse:collapse;margin-bottom:8px">
          <tr><td style="padding:3px 8px;color:#888;width:130px;vertical-align:top">Coordinates</td><td style="padding:3px 8px">${COORDS_MAP[s.c] || '—'}</td></tr>
          <tr><td style="padding:3px 8px;color:#888;width:130px;vertical-align:top">Main Mass</td><td style="padding:3px 8px">Universidad de Chile</td></tr>
          <tr><td style="padding:3px 8px;color:#888;width:130px;vertical-align:top">Finder</td><td style="padding:3px 8px">${DISCOVERER_MAP[s.c] || '—'}</td></tr>
        </table>
      </div>` : ''}
    </div>

    <div id="sample-tab-gallery" style="display:none">
      <div id="gallery-content"><div class="loading">Loading gallery...</div></div>
    </div>

    <div id="sample-tab-files" style="display:none">
      ${IR_FILES[s.c] ? `
      <div class="ir-spectrum-section">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <h3 style="font-size:15px;margin:0">IR Spectrum (FTIR)</h3>
          <a href="${encodeURI(IR_DIR + IR_FILES[s.c])}" download class="btn btn-sm" style="font-size:12px">&#x2B07; Download</a>
        </div>
        <canvas id="ir-spectrum-canvas" style="width:100%;max-width:700px;height:280px;display:block;margin:0 auto"></canvas>
        <p style="font-size:11px;color:#888;text-align:center;margin-top:6px">Wavenumber (cm⁻¹) vs Absorbance</p>
      </div>` : '<p style="color:#888;font-size:13px;text-align:center;padding:40px 0">No IR spectrum available for this sample</p>'}
    </div>
  `;

  // Load IR spectrum from local file
  if (IR_FILES[s.c]) loadIRSpectrum(s.c);
}

function switchSampleTab(tab) {
  document.querySelectorAll('#sample-content .tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  ['info','gallery','files'].forEach(t => {
    const el = document.getElementById('sample-tab-' + t);
    if (el) el.style.display = t === tab ? 'block' : 'none';
  });
  if (tab === 'files' && currentSample) {
    const canvas = document.getElementById('ir-spectrum-canvas');
    if (IR_DATA[currentSample.c]) {
      if (canvas) drawIRSpectrum(canvas, IR_DATA[currentSample.c], currentSample.c);
    } else if (IR_FILES[currentSample.c]) {
      loadIRSpectrum(currentSample.c);
    }
  }
}

// ---------- Sample Details ----------
function renderSampleDetails(code) {
  const d = SAMPLE_DETAILS[code];
  if (!d) return '';
  let html = '<div class="sample-details" style="margin-top:20px;border-top:1px solid #ddd;padding-top:16px">';
  html += '<h3 style="font-size:15px;margin-bottom:12px">Petrography &amp; Classification</h3>';

  // Basic info
  if (d.basic) {
    html += '<table style="width:100%;font-size:12px;border-collapse:collapse;margin-bottom:14px">';
    Object.entries(d.basic).forEach(([k,v]) => {
      const label = k.replace(/([A-Z])/g,' $1').replace(/^./, s => s.toUpperCase());
      html += `<tr><td style="padding:3px 8px;color:#888;width:130px;vertical-align:top">${label}</td><td style="padding:3px 8px">${v}</td></tr>`;
    });
    html += '</table>';
  }

  // Classification
  if (d.classification) {
    html += `<div style="margin-bottom:14px;background:#f8f8f8;padding:10px 14px;border-radius:4px;font-size:12px">
      <strong style="color:#1a2a3a">Classification:</strong> ${d.classification.class}<br>
      <strong style="color:#1a2a3a">Classifier:</strong> ${d.classification.classifier}<br>
      <p style="margin:6px 0 0;font-size:12px;text-align:justify">${d.classification.description}</p>
    </div>`;
  }

  // Weathering
  if (d.weathering) {
    html += `<div style="margin-bottom:14px;background:#f8f8f8;padding:10px 14px;border-radius:4px;font-size:12px">
      <strong style="color:#1a2a3a">Weathering Grade:</strong> ${d.weathering.grade}<br>
      <p style="margin:6px 0 0;font-size:12px;text-align:justify">${d.weathering.description}</p>
    </div>`;
  }

  // Petrology
  if (d.petrology) {
    html += '<div style="margin-bottom:14px">';
    if (d.petrology.mineralogy) {
      html += `<div style="background:#f8f8f8;padding:10px 14px;border-radius:4px;margin-bottom:8px;font-size:12px">
        <strong style="color:#1a2a3a">Mineralogy:</strong>
        <p style="margin:6px 0 0;font-size:12px;text-align:justify">${d.petrology.mineralogy}</p>
      </div>`;
    }
    if (d.petrology.matrix) {
      html += `<div style="background:#f8f8f8;padding:10px 14px;border-radius:4px;margin-bottom:8px;font-size:12px">
        <strong style="color:#1a2a3a">Matrix:</strong>
        <p style="margin:6px 0 0;font-size:12px;text-align:justify">${d.petrology.matrix}</p>
      </div>`;
    }
    if (d.petrology.chondrules) {
      html += `<div style="background:#f8f8f8;padding:10px 14px;border-radius:4px;margin-bottom:8px;font-size:12px">
        <strong style="color:#1a2a3a">Chondrules:</strong>
        <p style="margin:6px 0 0;font-size:12px;text-align:justify">${d.petrology.chondrules}</p>
      </div>`;
    }
    if (d.petrology.chemicalGroup) {
      html += `<div style="background:#f8f8f8;padding:10px 14px;border-radius:4px;margin-bottom:8px;font-size:12px">
        <strong style="color:#1a2a3a">Chemical Group:</strong>
        <p style="margin:6px 0 0;font-size:12px;text-align:justify">${d.petrology.chemicalGroup}</p>
      </div>`;
    }
    html += '</div>';
  }

  // Location
  if (d.location) {
    html += '<table style="width:100%;font-size:12px;border-collapse:collapse;margin-bottom:8px">';
    Object.entries(d.location).forEach(([k,v]) => {
      const label = k.replace(/([A-Z])/g,' $1').replace(/^./, s => s.toUpperCase());
      html += `<tr><td style="padding:3px 8px;color:#888;width:130px;vertical-align:top">${label}</td><td style="padding:3px 8px">${v}</td></tr>`;
    });
    html += '</table>';
  }

  html += '</div>';
  return html;
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
  let ok = 0, err = 0, errMsg = '';
  for (const file of files) {
    const ext = file.name.split('.').pop().toLowerCase();
    const isImage = ['jpg','jpeg','png','gif'].includes(ext);
    const sc = sampleCode.toUpperCase();
    const filePath = `${sc}/${Date.now()}_${file.name}`;
    try {
      const { error: storageErr, data } = await _supabase.storage.from('sample-files').upload(filePath, file);
      if (storageErr) { err++; errMsg += ` Storage: ${storageErr.message}`; continue; }
    const { error: dbErr } = await _supabase.from('files').insert({
        sample_code: sc,
        filename: file.name,
        file_type: isImage ? 'photo' : 'dpt',
        storage_path: filePath,
        uploaded_by: currentUser?.email || 'web'
      });
      if (dbErr) { err++; errMsg += ` DB: ${dbErr.message}`; continue; }
      ok++;
    } catch(e) { err++; errMsg += ` ${e.message}`; }
  }
  preview.innerHTML = '';
  const msg = `${ok} file(s) uploaded, ${err} error(s)`;
  toast(errMsg ? msg + ' — ' + errMsg : msg, errMsg ? 'error' : 'success');
  loadFiles(sampleCode);
}

const _spectrumCache = {};

async function loadFiles(sampleCode) {
  const el = document.getElementById('sample-files-list');
  const sc = sampleCode.toUpperCase();
  let { data, error } = await _supabase
    .from('files')
    .select('*')
    .eq('sample_code', sc)
    .neq('file_type', 'photo')
    .order('created_at', { ascending: false });
  if (error) { el.innerHTML = '<p style="color:#c0392b">Error loading files</p>'; return; }
  if (!data || !data.length) {
    el.innerHTML = '<p style="color:#888;font-size:13px;text-align:center;padding:20px">No files uploaded yet</p>';
    return;
  }

  // Build HTML
  const defaultLabels = {
    ir: { x: 'Wavenumber (cm⁻¹)', y: 'Transmittance (%)' },
    raman: { x: 'Raman Shift (cm⁻¹)', y: 'Intensity (counts)' }
  };
  let html = '<div class="file-list">';
  for (const f of data) {
    const url = _supabase.storage.from('sample-files').getPublicUrl(f.storage_path).data.publicUrl;
    const ext = f.filename.split('.').pop().toLowerCase();
    const isImg = ['jpg','jpeg','png','gif','tif','tiff'].includes(ext);
    const isDpt = ext === 'dpt';
    const isTxt = ['txt','csv'].includes(ext);
    const specId = 'spec_' + f.id;
    const meta = `${new Date(f.created_at).toLocaleDateString()} ${f.uploaded_by ? 'by ' + f.uploaded_by : ''}`;

    // File row
    let icon;
    if (isImg) icon = '📷';
    else if (isDpt) icon = '🔵';
    else if (isTxt) icon = '🔴';
    else icon = '📊';

    html += `<div class="file-item">
      <span class="file-icon">${icon}</span>
      <div class="file-info">
        <div class="fname">${f.filename}</div>
        <div class="fmeta">${meta}</div>
      </div>`;

    if (isImg) {
      const isTif = ext === 'tif' || ext === 'tiff';
      html += `<span class="type-badge type-photo">Photo</span>`;
      if (isTif) {
        html += `<div class="tif-thumb" id="tif_${f.id}"><canvas class="file-thumb" style="height:48px;width:auto"></canvas></div>`;
      } else {
        html += `<img src="${url}" class="file-thumb" onclick="window.open('${url}','_blank')" title="Click to enlarge">`;
      }
    } else if (isDpt) {
      html += `<span class="type-badge type-ir">IR</span>`;
    } else if (isTxt) {
      html += `<span class="type-badge type-unknown">?</span>`;
    }
    html += `<a href="${url}" download="${f.filename}" class="btn btn-sm" title="Download ${f.filename}" style="margin-right:4px">⬇</a>`;
    if (!isImg && !isDpt && !isTxt) {
      html += `<a href="${url}" target="_blank" class="btn btn-sm">View</a>`;
    }

    html += `<button class="btn btn-sm btn-danger" onclick="deleteFile('${f.id}','${f.storage_path}','${sampleCode}')">×</button>
    </div>`;

    // Spectrum container for text/csv/dpt
    if (isDpt) {
      const defaultTitle = f.filename.replace(/\.dpt$/i, '');
      html += `<div class="spectrum-container" id="${specId}">
        <div class="spec-controls">
          <span class="type-badge type-ir">IR</span>
          <input class="spec-title" placeholder="Title" value="${defaultTitle}">
          <input class="spec-xlabel" placeholder="X axis" value="${defaultLabels.ir.x}">
          <input class="spec-ylabel" placeholder="Y axis" value="${defaultLabels.ir.y}">
        </div>
        <div class="spectrum-wrap"><canvas></canvas><div class="spec-loading">Loading spectrum...</div></div>
      </div>`;
    } else if (isTxt) {
      const defaultTitle = f.filename.replace(/\.(txt|csv)$/i, '');
      html += `<div class="spectrum-container" id="${specId}" data-type="raman">
        <div class="spec-controls">
          <select class="spec-type-select">
            <option value="raman">Raman</option>
            <option value="ir">IR</option>
          </select>
          <input class="spec-title" placeholder="Title" value="${defaultTitle}">
          <input class="spec-xlabel" placeholder="X axis" value="${defaultLabels.raman.x}">
          <input class="spec-ylabel" placeholder="Y axis" value="${defaultLabels.raman.y}">
        </div>
        <div class="spectrum-wrap"><canvas></canvas><div class="spec-loading">Loading spectrum...</div></div>
      </div>`;
    }
  }
  html += '</div>';
  el.innerHTML = html;

  // Second pass: load spectrum data, attach type-switch handlers, render .tif
  for (const f of data) {
    const ext = f.filename.split('.').pop().toLowerCase();
    const url = _supabase.storage.from('sample-files').getPublicUrl(f.storage_path).data.publicUrl;
    const cid = 'spec_' + f.id;

    if (['txt','csv','dpt'].includes(ext)) {
      const container = document.getElementById(cid);
      if (!container) continue;
      const sel = container.querySelector('.spec-type-select');
      if (sel) {
        const badge = container.previousElementSibling.querySelector('.type-badge');
        sel.addEventListener('change', () => {
          const type = sel.value;
          const labels = defaultLabels[type];
          const xl = container.querySelector('.spec-xlabel');
          const yl = container.querySelector('.spec-ylabel');
          xl.value = labels.x;
          yl.value = labels.y;
          container.dataset.type = type;
          if (badge) {
            badge.className = 'type-badge type-' + type;
            badge.textContent = type.toUpperCase();
          }
          const ev = new Event('input', { bubbles: true });
          xl.dispatchEvent(ev);
        });
      }
      loadSpectrumData(url, cid);
    }

    // Render .tif thumbnails
    if (['tif','tiff'].includes(ext)) {
      const tifDiv = document.getElementById('tif_' + f.id);
      if (!tifDiv) continue;
      const cvs = tifDiv.querySelector('canvas');
      if (!cvs) continue;
      fetch(url).then(r => r.arrayBuffer()).then(buf => {
        const ifds = UTIF.decode(buf);
        UTIF.decodeImage(buf, ifds[0]);
        const rgba = UTIF.toRGBA8(ifds[0]);
        const imgData = new ImageData(new Uint8ClampedArray(rgba), ifds[0].width, ifds[0].height);
        cvs.width = ifds[0].width; cvs.height = ifds[0].height;
        const aspect = ifds[0].width / ifds[0].height;
        if (aspect > 1) { cvs.style.width = 'auto'; cvs.style.height = '48px' }
        else { cvs.style.width = '48px'; cvs.style.height = 'auto' }
        const ctx = cvs.getContext('2d');
        ctx.putImageData(imgData, 0, 0);
        cvs.style.cursor = 'pointer';
        cvs.onclick = () => window.open(url, '_blank');
      }).catch(() => { tifDiv.innerHTML = '<span style="font-size:10px;color:#c0392b">TIF error</span>' });
    }
  }
}

async function loadSpectrumData(url, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const wrap = container.querySelector('.spectrum-wrap');
  const canvas = wrap.querySelector('canvas');
  const loading = wrap.querySelector('.spec-loading');
  const inputs = {
    title: container.querySelector('.spec-title'),
    xlabel: container.querySelector('.spec-xlabel'),
    ylabel: container.querySelector('.spec-ylabel')
  };

  try {
    const resp = await fetch(url);
    const text = await resp.text();
    const data = parseSpectrum(text);
    if (!data || data.length < 2) {
      loading.innerHTML = '<span style="color:#c0392b;font-size:11px">Could not parse spectral data. Expected two numeric columns.</span>';
      return;
    }
    _spectrumCache[containerId] = data;
    loading.innerHTML = '';

    const redraw = () => drawSpectrum(canvas, data, inputs.title.value, inputs.xlabel.value, inputs.ylabel.value);
    inputs.title.addEventListener('input', redraw);
    inputs.xlabel.addEventListener('input', redraw);
    inputs.ylabel.addEventListener('input', redraw);
    redraw();
  } catch (e) {
    loading.innerHTML = '<span style="color:#c0392b;font-size:11px">Error: ' + e.message + '</span>';
  }
}

async function deleteFile(id, path, sampleCode) {
  if (!confirm('Delete this file?')) return;
  await _supabase.storage.from('sample-files').remove([path]);
  await _supabase.from('files').delete().eq('id', id);
  toast('File deleted');
  loadFiles(sampleCode);
}

// ---------- Photo Gallery ----------
let _galleryPhotos = [];
let _galleryIdx = -1;

async function renderGallery(sampleCode) {
  const el = document.getElementById('gallery-content');
  const sc = sampleCode.toUpperCase();
  let { data, error } = await _supabase
    .from('files')
    .select('*')
    .eq('sample_code', sc)
    .eq('file_type', 'photo')
    .order('created_at', { ascending: false });
  if (error) { el.innerHTML = '<p style="color:#c0392b">Error loading gallery</p>'; return; }
  if (!data || !data.length) {
    el.innerHTML = '<p style="color:#888;font-size:13px;text-align:center;padding:20px">No photos yet</p>';
    return;
  }
  _galleryPhotos = data;
  let html = '<div class="gallery-grid">';
  for (let i = 0; i < data.length; i++) {
    const f = data[i];
    const url = _supabase.storage.from('sample-files').getPublicUrl(f.storage_path).data.publicUrl;
    const ext = f.filename.split('.').pop().toLowerCase();
    const isTif = ext === 'tif' || ext === 'tiff';
    html += `<div class="gallery-item" data-idx="${i}" onclick="openLightbox(${i})">`;
    if (isTif) {
      html += `<canvas class="gallery-tif" data-url="${url}" style="max-width:100%;max-height:100%"></canvas>`;
    } else {
      html += `<img src="${url}" alt="${f.filename}" loading="lazy">`;
    }
    html += `<div class="gallery-fname">${f.filename}</div></div>`;
  }
  html += '</div>';
  el.innerHTML = html;

  // Render .tif thumbnails
  el.querySelectorAll('.gallery-tif').forEach(async (cv) => {
    try {
      const resp = await fetch(cv.dataset.url);
      const buf = await resp.arrayBuffer();
      const ifds = UTIF.decode(buf);
      UTIF.decodeImage(buf, ifds[0]);
      const rgba = UTIF.toRGBA8(ifds[0]);
      const img = new ImageData(new Uint8ClampedArray(rgba), ifds[0].width, ifds[0].height);
      const c = document.createElement('canvas');
      c.width = img.width; c.height = img.height;
      c.getContext('2d').putImageData(img, 0, 0);
      cv.parentNode.replaceChild(c, cv);
      c.style.maxWidth = '100%'; c.style.maxHeight = '100%';
    } catch(e) { cv.outerHTML = '<span style="font-size:11px;color:#999">Error</span>'; }
  });
}

function openLightbox(idx) {
  _galleryIdx = idx;
  showLightboxImage(idx);
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
  _galleryIdx = -1;
}

function openFigOverlay(canvasId) {
  const src = document.getElementById(canvasId);
  if (!src) return;
  const wrap = document.getElementById('fig-overlay-wrap');
  wrap.innerHTML = '';
  const cv = document.createElement('canvas');
  cv.width = src.width;
  cv.height = src.height;
  const ctx = cv.getContext('2d');
  ctx.drawImage(src, 0, 0);
  wrap.appendChild(cv);
  document.getElementById('fig-overlay').classList.add('active');
  const label = canvasId === 'massLogChiCanvas' ? 'Figure 1' :
    canvasId === 'doughnutCanvas' ? 'Figure 2' :
    canvasId === 'petroGradeCanvas' ? 'Figure 3' :
    canvasId === 'densityChiCanvas' ? 'Figure 4' :
    canvasId === 'irClusterSpectraPaper' ? 'Figure 5' : '';
  document.getElementById('fig-overlay-label').textContent = label;
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', _figEscKey);
}
function closeFigOverlay() {
  document.getElementById('fig-overlay').classList.remove('active');
  document.getElementById('fig-overlay-wrap').innerHTML = '';
  document.body.style.overflow = '';
  document.removeEventListener('keydown', _figEscKey);
}
function _figEscKey(e) { if (e.key === 'Escape') closeFigOverlay(); }

function showLightboxImage(idx) {
  const f = _galleryPhotos[idx];
  const url = _supabase.storage.from('sample-files').getPublicUrl(f.storage_path).data.publicUrl;
  const wrap = document.getElementById('lb-img-wrap');
  const ext = f.filename.split('.').pop().toLowerCase();
  const isTif = ext === 'tif' || ext === 'tiff';
  wrap.innerHTML = '';
  if (isTif) {
    const cv = document.createElement('canvas');
    cv.style.maxWidth = '92vw'; cv.style.maxHeight = '92vh';
    wrap.appendChild(cv);
    fetch(url).then(r => r.arrayBuffer()).then(buf => {
      const ifds = UTIF.decode(buf);
      UTIF.decodeImage(buf, ifds[0]);
      const rgba = UTIF.toRGBA8(ifds[0]);
      const img = new ImageData(new Uint8ClampedArray(rgba), ifds[0].width, ifds[0].height);
      cv.width = img.width; cv.height = img.height;
      cv.getContext('2d').putImageData(img, 0, 0);
    }).catch(() => { wrap.innerHTML = '<span style="color:#fff">Error loading image</span>'; });
  } else {
    const img = document.createElement('img');
    img.src = url;
    wrap.appendChild(img);
  }
  document.getElementById('lb-counter').textContent = (idx + 1) + ' / ' + _galleryPhotos.length;
}

function lbPrev() { if (_galleryIdx > 0) { _galleryIdx--; showLightboxImage(_galleryIdx); } }
function lbNext() { if (_galleryIdx < _galleryPhotos.length - 1) { _galleryIdx++; showLightboxImage(_galleryIdx); } }

document.addEventListener('keydown', function(e) {
  if (_galleryIdx < 0) return;
  if (e.key === 'Escape') { closeLightbox(); }
  else if (e.key === 'ArrowLeft') { lbPrev(); }
  else if (e.key === 'ArrowRight') { lbNext(); }
});

// ---------- Spectrum Parsing & Drawing ----------
function parseSpectrum(text) {
  const lines = text.split(/\r?\n/);
  const points = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^[#;%]/.test(trimmed)) continue;
    const parts = trimmed.split(/[\t,; ]+/).filter(s => s !== '');
    if (parts.length < 2) continue;
    const x = parseFloat(parts[0]);
    const y = parseFloat(parts[1]);
    if (isNaN(x) || isNaN(y)) continue;
    points.push({ x, y });
  }
  return points.length > 1 ? points : null;
}

function drawSpectrum(canvas, data, title, xLabel, yLabel) {
  const wrap = canvas.parentElement;
  const W = wrap.clientWidth || 600;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = W * dpr;
  canvas.height = 300 * dpr;
  canvas.style.width = W + 'px';
  canvas.style.height = '300px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const pad = { top: 24, right: 20, bottom: 44, left: 54 };
  const pw = W - pad.left - pad.right;
  const ph = 300 - pad.top - pad.bottom;

  const xMin = data[0].x, xMax = data[data.length - 1].x;
  let yMin = Infinity, yMax = -Infinity;
  for (const p of data) {
    if (p.y < yMin) yMin = p.y;
    if (p.y > yMax) yMax = p.y;
  }
  const yPad = (yMax - yMin) * 0.05 || 1;
  yMin -= yPad; yMax += yPad;

  const sx = (x) => pad.left + (x - xMin) / (xMax - xMin) * pw;
  const sy = (y) => pad.top + ph - (y - yMin) / (yMax - yMin) * ph;

  // Background
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, W, 300);

  // Axes
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top); ctx.lineTo(pad.left, pad.top + ph);
  ctx.lineTo(pad.left + pw, pad.top + ph);
  ctx.stroke();

  // Y axis ticks
  ctx.fillStyle = '#666';
  ctx.font = '10px Arial';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  const nYTicks = 5;
  for (let i = 0; i <= nYTicks; i++) {
    const yVal = yMin + (yMax - yMin) * i / nYTicks;
    const yPos = pad.top + ph - ph * i / nYTicks;
    ctx.fillText(yVal.toFixed(1), pad.left - 5, yPos);
    ctx.strokeStyle = '#eee';
    ctx.lineWidth = 0.5;
    ctx.beginPath(); ctx.moveTo(pad.left, yPos); ctx.lineTo(pad.left + pw, yPos); ctx.stroke();
  }

  // X axis ticks
  ctx.fillStyle = '#666';
  ctx.font = '10px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  const nXTicks = 6;
  for (let i = 0; i <= nXTicks; i++) {
    const xVal = xMin + (xMax - xMin) * i / nXTicks;
    const xPos = pad.left + pw * i / nXTicks;
    ctx.fillText(xVal.toFixed(0), xPos, pad.top + ph + 5);
  }

  // Axis labels
  ctx.fillStyle = '#333';
  ctx.font = '11px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(xLabel, pad.left + pw / 2, 300 - 16);
  ctx.save();
  ctx.translate(16, pad.top + ph / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();

  // Title
  ctx.fillStyle = '#222';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(title, pad.left + pw / 2, 3);

  // Spectrum line
  ctx.strokeStyle = '#2980b9';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  for (let i = 0; i < data.length; i++) {
    const px = sx(data[i].x);
    const py = sy(data[i].y);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.stroke();

  // Fill under curve
  ctx.lineTo(sx(data[data.length - 1].x), sy(yMin));
  ctx.lineTo(sx(data[0].x), sy(yMin));
  ctx.closePath();
  ctx.fillStyle = 'rgba(41,128,185,0.08)';
  ctx.fill();
}

// ---------- Paper Charts (from original paper.html) ----------
function renderPaperCharts() {
  setTimeout(() => {
    drawMassLogChiChart();
    drawDoughnutChart();
    drawPetroGradeChart();
    drawDensityChart();
    try { drawIRClusterSpectraPaper(); } catch(e) { console.warn('Fig 5 error:', e); }
  }, 50);
}

const massPoints = [];
let massHover = -1;
const densityPoints = [];
let densityHover = -1;
const petroPoints = [];
let petroHover = -1;
const CHART_DPR = window.devicePixelRatio || 1;

// KLY5 group classification based on simple logχ ranges (no W adjustment)
const kly5Group = chi => {
  if (chi >= 4.82) return 'H';
  if (chi >= 4.265) return 'L';
  return 'LL';
};

function isInconsistent(s) {
  if (!s.lc || s.t === '??') return false;
  const kg = kly5Group(s.lc);
  if (s.nota && (s.nota.includes('KLY5→') || s.nota.includes('⚡'))) return 'KLY5: ' + kg + (kg === s.t ? '' : ', petrography: ' + s.t) + ' — review';
  if ((kg === 'H' && s.t === 'LL') || (kg === 'LL' && s.t === 'H')) return 'KLY5: ' + kg + ', petrography: ' + s.t + ' — review';
  return false;
}

function drawMassLogChiChart() {
  massPoints.length = 0;
  const cv = document.getElementById('massLogChiCanvas');
  if (!cv) return;
  const W = 760, H = 420;
  cv.width = W * CHART_DPR; cv.height = H * CHART_DPR;
  const ctx = cv.getContext('2d');
  ctx.scale(CHART_DPR, CHART_DPR);
  const MARGIN = { top: 30, right: 20, bottom: 42, left: 62 };
  const CHI_MIN = 3.4, CHI_MAX = 5.6, MASS_LOG_MIN = -0.35, MASS_LOG_MAX = 2.55;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
  const x0 = MARGIN.left, y0 = MARGIN.top, x1 = W - MARGIN.right, y1 = H - MARGIN.bottom;
  const toX = c => x0 + (c - CHI_MIN) / (CHI_MAX - CHI_MIN) * (x1 - x0);
  const toY = m => y1 - (Math.log10(m) - MASS_LOG_MIN) / (MASS_LOG_MAX - MASS_LOG_MIN) * (y1 - y0);

  // Vertical classification bands (kly5Group thresholds)
  const thrHL = 4.82, thrLL = 4.265;
  const bands = [
    { lo: thrHL, hi: CHI_MAX, fill: 'rgba(39,174,96,0.10)', stroke: 'rgba(39,174,96,0.35)' },
    { lo: thrLL, hi: thrHL, fill: 'rgba(230,126,34,0.10)', stroke: 'rgba(230,126,34,0.35)' },
    { lo: CHI_MIN, hi: thrLL, fill: 'rgba(184,134,11,0.10)', stroke: 'rgba(184,134,11,0.35)' },
  ];
  bands.forEach(b => {
    const xLo = toX(b.lo), xHi = toX(b.hi);
    ctx.fillStyle = b.fill;
    ctx.fillRect(xLo, y0, xHi - xLo, y1 - y0);
    ctx.strokeStyle = b.stroke; ctx.lineWidth = 1; ctx.setLineDash([4, 3]);
    ctx.beginPath(); ctx.moveTo(xHi, y0); ctx.lineTo(xHi, y1); ctx.stroke();
    ctx.setLineDash([]);
  });
  ctx.fillStyle = 'rgba(39,174,96,0.6)'; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
  ctx.fillText('H/L ' + thrHL.toFixed(2), toX(thrHL) + 2, y0 - 2);
  ctx.fillStyle = 'rgba(230,126,34,0.6)';
  ctx.fillText('L/LL ' + thrLL.toFixed(2), toX(thrLL) + 2, y0 - 2);

  // Axes
  ctx.fillStyle = '#444'; ctx.font = '11px Arial';
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  for (let c = 3.6; c <= 5.6; c += 0.2) { ctx.fillText(c.toFixed(1), toX(c), y1 + 6); }
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  const massTicks = [0.5, 1, 2, 5, 10, 20, 50, 100, 200, 300];
  massTicks.forEach(m => { ctx.fillText(m, x0 - 6, toY(m)); });
  ctx.fillStyle = '#333'; ctx.font = '13px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.fillText('log \u03c7 (10\u207b\u2079 m\u00b3/kg)', (x0 + x1) / 2, y1 + 26);
  ctx.save(); ctx.translate(18, (y0 + y1) / 2); ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
  ctx.fillText('Mass (g)', 0, 0); ctx.restore();

  // Grid
  ctx.strokeStyle = 'rgba(0,0,0,0.06)'; ctx.lineWidth = 0.5;
  for (let c = 3.6; c <= 5.6; c += 0.2) { const px = toX(c); ctx.beginPath(); ctx.moveTo(px, y0); ctx.lineTo(px, y1); ctx.stroke(); }
  massTicks.forEach(m => { const py = toY(m); ctx.beginPath(); ctx.moveTo(x0, py); ctx.lineTo(x1, py); ctx.stroke(); });

  ctx.strokeStyle = '#999'; ctx.lineWidth = 1; ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);
  ctx.save(); ctx.beginPath(); ctx.rect(x0, y0, x1 - x0, y1 - y0); ctx.clip();

  // Data points — X=chi, Y=mass
  const colors = { H: '#27ae60', L: '#e67e22', LL: '#b8860b', '??': '#999', C: '#8e44ad' };
  const R = 5;
  SAMPLES.filter(s => s.lc != null && MASS_MAP[s.c] != null).forEach(s => {
    const m = MASS_MAP[s.c];
    const px = toX(s.lc), py = toY(m);
    const grp = kly5Group(s.lc);
    const hasPetro = s.pW != null;
    ctx.beginPath(); ctx.arc(px, py, R, 0, 2 * Math.PI);
    ctx.fillStyle = hasPetro ? (colors[grp] || '#999') : '#fff';
    ctx.globalAlpha = hasPetro ? 0.5 : 1; ctx.fill(); ctx.globalAlpha = 1;
    ctx.strokeStyle = colors[grp] || '#999';
    ctx.lineWidth = hasPetro ? 2 : 2.5; ctx.stroke();
    massPoints.push({ x: px, y: py, r: R, c: s.c, n: s.n, m, lc: s.lc, grp, hasPetro });
  });

  // Highlight hovered point
  if (massHover >= 0 && massHover < massPoints.length) {
    const hp = massPoints[massHover];
    ctx.beginPath(); ctx.arc(hp.x, hp.y, R + 3, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e74c3c'; ctx.lineWidth = 3; ctx.stroke();
  }

  ctx.restore();

  // Legend
  const lr = 4, lgap = 17, lpad = 8;
  const legItems = [
    { type: 'label', text: 'KLY5 group', h: 1 },
    { type: 'color', label: 'H (\u03c7 \u2265 4.82)', color: '#27ae60', h: 1 },
    { type: 'color', label: 'L (4.265 \u2264 \u03c7 < 4.82)', color: '#e67e22', h: 1 },
    { type: 'color', label: 'LL (\u03c7 < 4.265)', color: '#b8860b', h: 1 },
    { type: 'label', text: '\u25cf petrography   \u25cb estimated', h: 1 },
  ];
  const lh = legItems.reduce((s, i) => s + i.h * lgap, 0) + lpad * 2;
  const lw = 150;
  const lx = x1 - lw - 8, ly = y0 + 8;
  ctx.fillStyle = 'rgba(255,255,255,0.92)'; ctx.strokeStyle = 'rgba(0,0,0,0.12)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.roundRect(lx, ly, lw, lh, 4); ctx.fill(); ctx.stroke();
  let yy = ly + lpad;
  ctx.font = '10px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  legItems.forEach(item => {
    const sy = yy + lgap / 2;
    if (item.type === 'label') { ctx.fillStyle = '#999'; ctx.font = '9px Arial'; ctx.fillText(item.text, lx + lpad, sy); yy += lgap; return; }
    if (item.type === 'color') {
      ctx.fillStyle = item.color; ctx.beginPath(); ctx.arc(lx + lpad + lr, sy, lr, 0, 2 * Math.PI); ctx.fill();
      ctx.fillStyle = '#444'; ctx.font = '10px Arial'; ctx.fillText(item.label, lx + lpad + 12, sy);
      yy += lgap;
    }
  });

  // Event listeners
  if (!cv._massListeners) {
    cv._massListeners = true;
    cv.addEventListener('mousemove', function (e) {
      const rect = cv.getBoundingClientRect();
      const scaleX = (cv.width / CHART_DPR) / rect.width;
      const scaleY = (cv.height / CHART_DPR) / rect.height;
      const cx = (e.clientX - rect.left) * scaleX;
      const cy = (e.clientY - rect.top) * scaleY;
      let hit = -1;
      for (let i = 0; i < massPoints.length; i++) {
        const p = massPoints[i], dx = cx - p.x, dy = cy - p.y;
        if (dx * dx + dy * dy <= (p.r + 4) * (p.r + 4)) { hit = i; break; }
      }
      if (hit !== massHover) {
        massHover = hit;
        drawMassLogChiChart();
      }
      const tip = document.getElementById('chart-tooltip');
      if (hit >= 0) {
        const p = massPoints[hit];
        const pos = cv.getBoundingClientRect();
        tip.style.display = 'block';
        tip.style.left = (e.clientX - pos.left + 12) + 'px';
        tip.style.top = (e.clientY - pos.top - 10) + 'px';
        tip.textContent = p.c + ' ' + p.n + ' | mass=' + p.m + ' g, \u03c7=' + p.lc.toFixed(3) + ' | ' + p.grp + (p.hasPetro ? '' : ' (no petro)');
        cv.style.cursor = 'pointer';
      } else {
        tip.style.display = 'none';
        cv.style.cursor = 'crosshair';
      }
    });
    cv.addEventListener('mouseleave', function () {
      document.getElementById('chart-tooltip').style.display = 'none';
      cv.style.cursor = 'default';
      massHover = -1;
      drawMassLogChiChart();
    });
  }
}

function renderPairing() {
  const el = document.getElementById('pairing-content');
  if (!el) return;
  let html = '<h1 style="margin-bottom:8px">Pairing Groups</h1>';
  html += '<p style="text-align:center;color:#666;font-size:13px;margin-bottom:24px">Groups of samples identified as fragments of the same meteorite fall based on magnetic susceptibility (Δχ ≤ 0.08 within same KLY5 class) and validated by bulk density consistency. Magnetic pairs with density variation exceeding 20% were rejected.</p>';
  html += '<h2 style="text-align:center;margin:20px 0 8px;font-size:15px;color:#444">IR Spectra Overview</h2>';
  html += '<div style="text-align:center"><canvas id="ir-overview-chart" class="ir-pair-canvas" style="max-width:800px"></canvas></div>';

  // IR match ranking table
  const grid = Array.from({length:200},(_,i)=>400+i*18);
  function interpToGrid(code) {
    const pts = IR_DATA[code].slice().sort((a,b)=>a[0]-b[0]);
    return grid.map(t => {
      let lo=0, hi=pts.length-1;
      while (lo<hi-1) { const m=(lo+hi)>>1; if (pts[m][0]<t) lo=m; else hi=m; }
      const [x0,y0]=pts[lo],[x1,y1]=pts[hi];
      return x1===x0 ? y0 : y0+(t-x0)*(y1-y0)/(x1-x0);
    });
  }
  function cosSim(a,b) {
    let dot=0,na=0,nb=0;
    for (let i=0;i<a.length;i++) { dot+=a[i]*b[i]; na+=a[i]*a[i]; nb+=b[i]*b[i]; }
    return dot/(Math.sqrt(na)*Math.sqrt(nb)||1);
  }
  const interpCache = {};
  function getInterp(code) { return interpCache[code] || (interpCache[code]=interpToGrid(code)); }

  const irClusterRank = [];
  PAIR_GROUPS.forEach(g => {
    g.falls.forEach(f => {
      const irCodes = f.samples.filter(c => IR_DATA[c]);
      if (irCodes.length < 2) return;
      let totalSim = 0, pairs = 0;
      for (let i=0;i<irCodes.length;i++) {
        const a = getInterp(irCodes[i]);
        for (let j=i+1;j<irCodes.length;j++) {
          totalSim += cosSim(a, getInterp(irCodes[j]));
          pairs++;
        }
      }
      irClusterRank.push({ name: f.name, sim: totalSim/pairs, codes: irCodes, allSamples: f.samples });
    });
  });
  irClusterRank.sort((a,b)=>b.sim-a.sim);

  if (irClusterRank.length) {
    html += '<h2 style="text-align:center;margin:28px 0 12px;font-size:15px;color:#444">IR Match Ranking (best match first)</h2>';
    html += '<div style="overflow-x:auto;margin-bottom:20px"><table style="width:100%;border-collapse:collapse;font-size:12px">';
    html += '<thead><tr style="background:#f7f7f7">';
    ['#','Cluster','IR Match','Samples','KLY5','Density','Type'].forEach(h => {
      html += `<th style="padding:6px 8px;text-align:left;border-bottom:2px solid #ddd;font-weight:600">${h}</th>`;
    });
    html += '</tr></thead><tbody>';
    irClusterRank.forEach((r,i) => {
      const sCodes = r.allSamples;
      const groups = [...new Set(sCodes.map(c => SAMPLES.find(x=>x.c===c)?.t||'?'))].join('/');
      const dens = sCodes.map(c => DENSITY_MAP[c]).filter(d=>d!=null);
      const densStr = dens.length>=2
        ? `${Math.min(...dens).toFixed(3)}–${Math.max(...dens).toFixed(3)}`
        : dens.length===1 ? dens[0].toFixed(3) : '—';
      const types = [...new Set(sCodes.map(c => {
        const d = SAMPLE_DETAILS[c];
        return d?.classification?.class || '';
      }).filter(Boolean))].join('/') || '—';
      html += `<tr${i%2===1?' style="background:#fafafa"':''}>`;
      html += `<td style="padding:5px 8px;color:#888;font-weight:600">${i+1}</td>`;
      html += `<td style="padding:5px 8px;font-weight:600">${r.name}</td>`;
      const pct = (r.sim*100).toFixed(1);
      const color = r.sim >= 0.99 ? '#27ae60' : r.sim >= 0.97 ? '#e67e22' : '#e74c3c';
      html += `<td style="padding:5px 8px;color:${color};font-weight:600">${pct}%</td>`;
      html += `<td style="padding:5px 8px">${r.codes.join(', ')}</td>`;
      html += `<td style="padding:5px 8px">${groups}</td>`;
      html += `<td style="padding:5px 8px">${densStr}</td>`;
      html += `<td style="padding:5px 8px">${types}</td>`;
      html += '</tr>';
    });
    html += '</tbody></table></div>';
  }

  html += '<div class="pair-section">';
  PAIR_GROUPS.forEach(g => {
    html += `<div class="pair-locality"><h3 style="color:${g.color}">${g.locality}</h3><div class="pair-grid">`;
    g.falls.forEach(f => {
      const densVals = f.samples.map(c => DENSITY_MAP[c]).filter(d => d != null);
      let densInfo = '';
      if (densVals.length >= 2) {
        const dMin = Math.min(...densVals), dMax = Math.max(...densVals);
        const dPct = ((dMax - dMin) / ((dMin + dMax) / 2) * 100).toFixed(1);
        densInfo = ` · Δρ ${dPct}%`;
      } else if (densVals.length === 1) {
        densInfo = ` · ρ ${densVals[0].toFixed(3)}`;
      }
      html += `<div class="pair-card">
        <div class="pair-card-header" style="background:${f.tc}">
          <span>${f.name}</span>
          <span>${f.count} fragments · Δχ ${f.delta}${densInfo}</span>
        </div>
        <div class="pair-card-body">
          <div class="pair-info">
            <span>Type ${f.type}</span>
            ${f.range ? `<span>χ ${f.range}</span>` : ''}
          </div>`;
      const irSamples = f.samples.filter(c => IR_DATA[c]);
      const irStat = _IR_CLUSTER_STATUS[f.name];
      if (irStat && irStat.ok === true) {
        html += `<div class="pair-ir-badge" style="color:#27ae60;font-size:11px;padding:4px 0 2px;border-bottom:1px solid #eee">✓ IR: ${irStat.note} (d=${irStat.d.toFixed(3)})</div>`;
      } else if (irStat && irStat.ok === false) {
        html += `<div class="pair-ir-badge" style="color:#e74c3c;font-size:11px;padding:4px 0 2px;border-bottom:1px solid #eee">⚠ IR: ${irStat.note} (d=${irStat.d.toFixed(3)})</div>`;
      } else if (irSamples.length === 1) {
        html += `<div class="pair-ir-badge" style="color:#888;font-size:11px;padding:4px 0 2px;border-bottom:1px solid #eee">○ IR: 1 sample with data, ${f.samples.length - 1} pending</div>`;
      } else if (irSamples.length === 0) {
        html += `<div class="pair-ir-badge" style="color:#bbb;font-size:11px;padding:4px 0 2px;border-bottom:1px solid #eee">— No IR data available</div>`;
      }
      f.samples.forEach(c => {
        const s = sampleLookup(c);
        if (!s) return;
        const chi = s.lc != null ? s.lc.toFixed(3) : '—';
        const w = s.pW != null ? 'W'+s.pW : '—';
        const dens = DENSITY_MAP[c] != null ? DENSITY_MAP[c].toFixed(3) : null;
        const irTag = IR_DATA[c] ? ' <span class="ir-tag">IR</span>' : '';
        html += `<div class="pair-sample">
          <span><span class="ps-code">${s.c}</span> <span class="ps-name">${s.n}</span>${irTag}</span>
          <span><span class="ps-chi">χ ${chi}</span> · <span class="ps-w">${w}</span>${dens ? ` · <span class="ps-dens">ρ ${dens}</span>` : ''}</span>
        </div>`;
      });
      html += `</div></div>`;
    });
    html += '</div></div>';
  });
  html += '</div>';
  el.innerHTML = html;
  drawAllIRSpectra();
}

function drawDoughnutChart() {
  const cv = document.getElementById('doughnutCanvas');
  if (!cv) return;
  const W = 600, H = 300;
  const dpr = window.devicePixelRatio || 1;
  cv.width = W * dpr; cv.height = H * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const MARGIN = { top: 30, right: 20, bottom: 45, left: 55 };
  const CHI_MIN = 4.0, CHI_MAX = 5.6, BIN = 0.2;
  const nbins = Math.round((CHI_MAX - CHI_MIN) / BIN);
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
  const x0 = MARGIN.left, y0 = MARGIN.top, x1 = W - MARGIN.right, y1 = H - MARGIN.bottom;
  const toX = c => x0 + (c - CHI_MIN) / (CHI_MAX - CHI_MIN) * (x1 - x0);

  // Bin counts
  const bins = Array.from({ length: nbins }, () => ({ H: 0, L: 0, LL: 0, '??': 0 }));
  const groups = ['H', 'L', 'LL', '??'];
  const groupColors = { H: '#27ae60', L: '#e67e22', LL: '#b8860b', '??': '#999' };
  SAMPLES.filter(s => s.lc != null).forEach(s => {
    const grp = kly5Group(s.lc);
    const idx = Math.min(nbins - 1, Math.max(0, Math.floor((s.lc - CHI_MIN) / BIN)));
    if (bins[idx][grp] !== undefined) bins[idx][grp]++;
  });
  const maxCount = Math.max(...bins.map(b => groups.reduce((s, g) => s + (b[g] || 0), 0)), 3);
  const toY = n => y1 - (n / maxCount) * (y1 - y0);

  // Axes
  ctx.fillStyle = '#444'; ctx.font = '11px Arial';
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  for (let c = 4.0; c <= 5.6; c += 0.2) ctx.fillText(c.toFixed(1), toX(c), y1 + 6);
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (let n = 0; n <= maxCount; n += 2) ctx.fillText(n, toX(CHI_MIN) - 6, toY(n));
  ctx.fillStyle = '#333'; ctx.font = '13px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.fillText('log χ (10⁻⁹ m³/kg)', (x0 + x1) / 2, y1 + 26);
  ctx.save(); ctx.translate(16, (y0 + y1) / 2); ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
  ctx.fillText('Number of specimens', 0, 0); ctx.restore();
  ctx.strokeStyle = '#999'; ctx.lineWidth = 1;
  ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);

  // kly5Group classification thresholds (vertical lines)
  const thrHL = 4.82, thrLL = 4.265;
  ctx.setLineDash([4, 3]); ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(39,174,96,0.35)';
  ctx.beginPath(); ctx.moveTo(toX(thrHL), y0); ctx.lineTo(toX(thrHL), y1); ctx.stroke();
  ctx.strokeStyle = 'rgba(230,126,34,0.35)';
  ctx.beginPath(); ctx.moveTo(toX(thrLL), y0); ctx.lineTo(toX(thrLL), y1); ctx.stroke();
  ctx.setLineDash([]);

  // Stacked bars
  const bw = (x1 - x0) / nbins * 0.7;
  bins.forEach((bin, i) => {
    const bx = x0 + (i + 0.15) * (x1 - x0) / nbins;
    let stack = 0;
    groups.forEach(g => {
      const n = bin[g] || 0;
      if (n > 0) {
        const by = toY(stack + n);
        ctx.fillStyle = groupColors[g]; ctx.fillRect(bx, by, bw, toY(stack) - by);
        stack += n;
      }
    });
  });

  // Legend
  const lr = 4, lgap = 17, lpad = 8;
  const legItems = [
    { type: 'label', text: 'KLY5 group', h: 1 },
    ...groups.filter(g => bins.some(b => (b[g] || 0) > 0)).map(g => ({ type: 'color', label: g, color: groupColors[g], h: 1 })),
  ];
  const lh = legItems.reduce((s, i) => s + i.h * lgap, 0) + lpad * 2;
  const lw = 100;
  const lx = x1 - lw - 8, ly = y0 + 8;
  ctx.fillStyle = 'rgba(255,255,255,0.92)'; ctx.strokeStyle = 'rgba(0,0,0,0.12)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.roundRect(lx, ly, lw, lh, 4); ctx.fill(); ctx.stroke();
  let yy = ly + lpad;
  ctx.font = '10px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  legItems.forEach(item => {
    const sy = yy + lgap / 2;
    if (item.type === 'label') { ctx.fillStyle = '#999'; ctx.font = '9px Arial'; ctx.fillText(item.text, lx + lpad, sy); yy += lgap; return; }
    if (item.type === 'color') {
      ctx.fillStyle = item.color; ctx.beginPath(); ctx.arc(lx + lpad + lr, sy, lr, 0, 2 * Math.PI); ctx.fill();
      ctx.fillStyle = '#444'; ctx.font = '10px Arial'; ctx.fillText(item.label, lx + lpad + 12, sy);
      yy += lgap;
    }
  });

  // Reference annotation
  ctx.fillStyle = '#888'; ctx.font = '8px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
  ctx.fillText('Shaded: mean±1σ from Rochette et al. (2003)', x0 + 4, y1 - 2);
}

function drawPetroGradeChart() {
  petroPoints.length = 0;
  const cv = document.getElementById('petroGradeCanvas');
  if (!cv) return;
  const W = 700, H = 420;
  const dpr = window.devicePixelRatio || 1;
  cv.width = W * dpr; cv.height = H * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const MARGIN = { top: 25, right: 30, bottom: 42, left: 55 };
  const W_MIN = -0.5, W_MAX = 4.5, CHI_MIN = 4.0, CHI_MAX = 5.6;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
  const x0 = MARGIN.left, y0 = MARGIN.top, x1 = W - MARGIN.right, y1 = H - MARGIN.bottom;
  const toX = w => x0 + (w - W_MIN) / (W_MAX - W_MIN) * (x1 - x0);
  const toY = c => y1 - (c - CHI_MIN) / (CHI_MAX - CHI_MIN) * (y1 - y0);

  // Axes
  ctx.fillStyle = '#444'; ctx.font = '11px Arial';
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  for (let w = 0; w <= 4; w++) ctx.fillText('W' + w, toX(w), y1 + 6);
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (let c = 4.0; c <= 5.6; c += 0.2) ctx.fillText(c.toFixed(1), toX(W_MIN) - 6, toY(c));
  ctx.fillStyle = '#333'; ctx.font = '13px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.fillText('Weathering grade (petrographic, Wlotzka 1993)', (x0 + x1) / 2, y1 + 26);
  ctx.save(); ctx.translate(16, (y0 + y1) / 2); ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
  ctx.fillText('log \u03c7 (10\u207b\u2079 m\u00b3/kg)', 0, 0); ctx.restore();

  ctx.save(); ctx.beginPath(); ctx.rect(x0, y0, x1 - x0, y1 - y0); ctx.clip();

  // kly5Group classification bands with Rochette W correction (-0.15 per grade)
  const thrHL = 4.82, thrLL = 4.265;
  const bandF = (lo, hi, col) => {
    ctx.beginPath();
    ctx.moveTo(toX(W_MIN), toY(lo - 0.15 * W_MIN));
    ctx.lineTo(toX(W_MAX), toY(lo - 0.15 * W_MAX));
    ctx.lineTo(toX(W_MAX), toY(hi - 0.15 * W_MAX));
    ctx.lineTo(toX(W_MIN), toY(hi - 0.15 * W_MIN));
    ctx.closePath();
    ctx.fillStyle = col; ctx.fill();
  };
  const bCol = (col, a) => { const c = { H: '39,174,96', L: '230,126,34', LL: '184,134,11' }[col] || '153,153,153'; return 'rgba(' + c + ',' + a + ')'; };
  // H: χ ≥ 4.82 - 0.15W
  bandF(thrHL, CHI_MAX, bCol('H', 0.12));
  // L: 4.265 - 0.15W ≤ χ < 4.82 - 0.15W
  bandF(thrLL, thrHL, bCol('L', 0.12));
  // LL: χ < 4.265 - 0.15W
  bandF(CHI_MIN, thrLL, bCol('LL', 0.12));
  // Boundary lines at W=0 reference
  ctx.setLineDash([4, 3]); ctx.lineWidth = 1;
  [[thrHL,'rgba(39,174,96,0.4)'],[thrLL,'rgba(230,126,34,0.4)']].forEach(b => {
    ctx.strokeStyle = b[1];
    ctx.beginPath(); ctx.moveTo(toX(W_MIN), toY(b[0])); ctx.lineTo(toX(W_MAX), toY(b[0])); ctx.stroke();
  });
  ctx.setLineDash([]);

  const groupColors = { H: '#27ae60', L: '#e67e22', LL: '#b8860b', '??': '#999' };
  const R = 5;
  SAMPLES.filter(s => s.lc != null && s.pW != null).forEach(s => {
    const grp = kly5Group(s.lc);
    const col = groupColors[grp] || '#999';
    const jitter = (s.c.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 100 - 50) / 100 * 0.18;
    const px = toX(s.pW + jitter), py = toY(s.lc);
    ctx.beginPath(); ctx.arc(px, py, R, 0, 2 * Math.PI);
    ctx.fillStyle = col;
    ctx.globalAlpha = 0.5; ctx.fill(); ctx.globalAlpha = 1;
    ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#333'; ctx.font = '9px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    ctx.fillText(s.c, px, py + 8);
    petroPoints.push({ x: px, y: py, r: R, c: s.c, chi: s.lc, pW: s.pW, grp, hasPetro: true });
  });

  ctx.restore();

  // Border and boundary labels drawn outside clip
  ctx.strokeStyle = '#999'; ctx.lineWidth = 1; ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);
  ctx.font = '9px Arial'; ctx.textBaseline = 'bottom';
  ctx.fillStyle = 'rgba(39,174,96,0.6)'; ctx.textAlign = 'left'; ctx.font = '9px Arial';
  ctx.fillText('H/L ' + thrHL.toFixed(2), toX(W_MIN) + 2, toY(thrHL) - 2);
  ctx.fillStyle = 'rgba(230,126,34,0.6)'; ctx.fillText('L/LL ' + thrLL.toFixed(2), toX(W_MIN) + 2, toY(thrLL) - 2);

  const lr = 4, lgap = 17, lpad = 8;
  const legItems = [
    { type: 'label', text: 'KLY5 group', h: 1 },
    { type: 'color', label: 'H', color: '#27ae60', h: 1 },
    { type: 'color', label: 'L', color: '#e67e22', h: 1 },
    { type: 'color', label: 'LL', color: '#b8860b', h: 1 },
  ];
  const lh = legItems.reduce((s, i) => s + i.h * lgap, 0) + lpad * 2;
  const lw = 100;
  const lx = x1 - lw - 8, ly = y0 + 8;
  ctx.fillStyle = 'rgba(255,255,255,0.92)'; ctx.strokeStyle = 'rgba(0,0,0,0.12)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.roundRect(lx, ly, lw, lh, 4); ctx.fill(); ctx.stroke();
  let yy = ly + lpad;
  ctx.font = '10px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  legItems.forEach(item => {
    const sy = yy + lgap / 2;
    if (item.type === 'label') { ctx.fillStyle = '#999'; ctx.font = '9px Arial'; ctx.fillText(item.text, lx + lpad, sy); yy += lgap; return; }
    if (item.type === 'color') {
      ctx.fillStyle = item.color; ctx.beginPath(); ctx.arc(lx + lpad + lr, sy, lr, 0, 2 * Math.PI); ctx.fill();
      ctx.fillStyle = '#444'; ctx.font = '10px Arial'; ctx.fillText(item.label, lx + lpad + 12, sy);
      yy += lgap;
    }
  });

  // Hover highlight
  if (petroHover >= 0 && petroHover < petroPoints.length) {
    const hp = petroPoints[petroHover];
    ctx.beginPath(); ctx.arc(hp.x, hp.y, R + 3, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e74c3c'; ctx.lineWidth = 3; ctx.stroke();
  }

  // Tooltip events
  if (!cv._petroListeners) {
    cv._petroListeners = true;
    cv.addEventListener('mousemove', function(e) {
      const rect = cv.getBoundingClientRect();
      const sc = cv.width / dpr / rect.width;
      const cx = (e.clientX - rect.left) * sc, cy = (e.clientY - rect.top) * sc;
      let hit = -1;
      for (let i = 0; i < petroPoints.length; i++) {
        const p = petroPoints[i], dx = cx - p.x, dy = cy - p.y;
        if (dx*dx + dy*dy <= (p.r+4)*(p.r+4)) { hit = i; break; }
      }
      if (hit !== petroHover) { petroHover = hit; drawPetroGradeChart(); }
      const tip = document.getElementById('chart-tooltip3');
      if (hit >= 0) {
        const p = petroPoints[hit];
        const pos = cv.getBoundingClientRect();
        tip.style.display = 'block'; tip.style.left = (e.clientX - pos.left + 12) + 'px'; tip.style.top = (e.clientY - pos.top - 10) + 'px';
        tip.textContent = p.c + ' \u03c7=' + p.chi.toFixed(3) + ', W=' + p.pW + ' | ' + p.grp;
        cv.style.cursor = 'pointer';
      } else { tip.style.display = 'none'; cv.style.cursor = 'crosshair'; }
    });
    cv.addEventListener('mouseleave', function() {
      document.getElementById('chart-tooltip3').style.display = 'none';
      cv.style.cursor = 'default'; petroHover = -1; drawPetroGradeChart();
    });
  }
}

function drawDensityChart() {
  densityPoints.length = 0;
  const cv = document.getElementById('densityChiCanvas');
  if (!cv) return;
  const W = 760, H = 420;
  const dpr = window.devicePixelRatio || 1;
  cv.width = W * dpr; cv.height = H * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const MARGIN = { top: 25, right: 30, bottom: 42, left: 58 };
  const CHI_MIN = 3.4, CHI_MAX = 5.6, DENS_MIN = 1.4, DENS_MAX = 4.6;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
  const x0 = MARGIN.left, y0 = MARGIN.top, x1 = W - MARGIN.right, y1 = H - MARGIN.bottom;
  const toX = c => x0 + (c - CHI_MIN) / (CHI_MAX - CHI_MIN) * (x1 - x0);
  const toY = d => y1 - (d - DENS_MIN) / (DENS_MAX - DENS_MIN) * (y1 - y0);
  ctx.fillStyle = '#444'; ctx.font = '11px Arial';
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  for (let c = 3.6; c <= 5.6; c += 0.2) { ctx.fillText(c.toFixed(1), toX(c), y1 + 6); }
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (let d = 1.5; d <= 4.5; d += 0.5) { ctx.fillText(d.toFixed(1), x0 - 6, toY(d)); }
  ctx.fillStyle = '#333'; ctx.font = '13px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.fillText('log \u03c7 (10\u207b\u2079 m\u00b3/kg)', (x0 + x1) / 2, y1 + 26);
  ctx.save(); ctx.translate(16, (y0 + y1) / 2); ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
  ctx.fillText('Density (g/cm\u00b3)', 0, 0); ctx.restore();
  ctx.strokeStyle = 'rgba(0,0,0,0.06)'; ctx.lineWidth = 0.5;
  for (let c = 3.6; c <= 5.6; c += 0.2) { const px = toX(c); ctx.beginPath(); ctx.moveTo(px, y0); ctx.lineTo(px, y1); ctx.stroke(); }
  for (let d = 1.5; d <= 4.5; d += 0.5) { const py = toY(d); ctx.beginPath(); ctx.moveTo(x0, py); ctx.lineTo(x1, py); ctx.stroke(); }
  ctx.strokeStyle = '#999'; ctx.lineWidth = 1; ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);
  ctx.save(); ctx.beginPath(); ctx.rect(x0, y0, x1 - x0, y1 - y0); ctx.clip();
  const colors = { H: '#27ae60', L: '#e67e22', LL: '#b8860b', '??': '#999' };
  const R = 5;
  SAMPLES.filter(s => s.lc != null && DENSITY_MAP[s.c] != null).forEach(s => {
    const dens = DENSITY_MAP[s.c];
    const px = toX(s.lc), py = toY(dens);
    const grp = kly5Group(s.lc);
    const hasPetro = s.pW != null;
    ctx.beginPath(); ctx.arc(px, py, R, 0, 2 * Math.PI);
    ctx.fillStyle = hasPetro ? (colors[grp] || '#999') : '#fff';
    ctx.globalAlpha = hasPetro ? 0.5 : 1; ctx.fill(); ctx.globalAlpha = 1;
    ctx.strokeStyle = colors[grp] || '#999';
    ctx.lineWidth = hasPetro ? 2 : 2.5; ctx.stroke();
    densityPoints.push({ x: px, y: py, r: R, c: s.c, n: s.n, dens, lc: s.lc, grp, hasPetro });
  });
  if (densityHover >= 0 && densityHover < densityPoints.length) {
    const hp = densityPoints[densityHover];
    ctx.beginPath(); ctx.arc(hp.x, hp.y, R + 3, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e74c3c'; ctx.lineWidth = 3; ctx.stroke();
  }
  ctx.restore();
  const lr = 4, lgap = 17, lpad = 8;
  const nH = SAMPLES.filter(s => s.lc != null && DENSITY_MAP[s.c] != null && kly5Group(s.lc) === 'H').length;
  const nL = SAMPLES.filter(s => s.lc != null && DENSITY_MAP[s.c] != null && kly5Group(s.lc) === 'L').length;
  const nLL = SAMPLES.filter(s => s.lc != null && DENSITY_MAP[s.c] != null && kly5Group(s.lc) === 'LL').length;
  const legItems = [
    { type: 'label', text: 'KLY5 group', h: 1 },
    { type: 'color', label: 'H (n=' + nH + ')', color: '#27ae60', h: 1 },
    { type: 'color', label: 'L (n=' + nL + ')', color: '#e67e22', h: 1 },
    { type: 'color', label: 'LL (n=' + nLL + ')', color: '#b8860b', h: 1 },
    { type: 'label', text: '\u25cf petro  \u25cb est.', h: 1 },
  ];
  const lh = legItems.reduce((s, i) => s + i.h * lgap, 0) + lpad * 2;
  const lw = 145;
  const lx = x1 - lw - 8, ly = y0 + 8;
  ctx.fillStyle = 'rgba(255,255,255,0.92)'; ctx.strokeStyle = 'rgba(0,0,0,0.12)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.roundRect(lx, ly, lw, lh, 4); ctx.fill(); ctx.stroke();
  let yy = ly + lpad;
  ctx.font = '10px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  legItems.forEach(item => {
    const sy = yy + lgap / 2;
    if (item.type === 'label') { ctx.fillStyle = '#999'; ctx.font = '9px Arial'; ctx.fillText(item.text, lx + lpad, sy); yy += lgap; return; }
    if (item.type === 'color') {
      ctx.fillStyle = item.color; ctx.beginPath(); ctx.arc(lx + lpad + lr, sy, lr, 0, 2 * Math.PI); ctx.fill();
      ctx.fillStyle = '#444'; ctx.font = '10px Arial'; ctx.fillText(item.label, lx + lpad + 12, sy);
      yy += lgap;
    }
  });
  if (!cv._densityListeners) {
    cv._densityListeners = true;
    cv.addEventListener('mousemove', function(e) {
      const rect = cv.getBoundingClientRect();
      const sc = cv.width / dpr / rect.width;
      const cx = (e.clientX - rect.left) * sc, cy = (e.clientY - rect.top) * sc;
      let hit = -1;
      for (let i = 0; i < densityPoints.length; i++) {
        const p = densityPoints[i], dx = cx - p.x, dy = cy - p.y;
        if (dx*dx + dy*dy <= (p.r+4)*(p.r+4)) { hit = i; break; }
      }
      if (hit !== densityHover) { densityHover = hit; drawDensityChart(); }
      const tip = document.getElementById('chart-tooltip4');
      if (hit >= 0) {
        const p = densityPoints[hit];
        const pos = cv.getBoundingClientRect();
        tip.style.display = 'block'; tip.style.left = (e.clientX - pos.left + 12) + 'px'; tip.style.top = (e.clientY - pos.top - 10) + 'px';
        tip.textContent = p.c + ' \u03c1=' + p.dens.toFixed(3) + ' g/cm\u00b3, \u03c7=' + p.lc.toFixed(3) + ' | ' + p.grp + (p.hasPetro ? '' : ' (no petro)');
        cv.style.cursor = 'pointer';
      } else { tip.style.display = 'none'; cv.style.cursor = 'crosshair'; }
    });
    cv.addEventListener('mouseleave', function() {
      document.getElementById('chart-tooltip4').style.display = 'none';
      cv.style.cursor = 'default'; densityHover = -1; drawDensityChart();
    });
  }
}

function loadIRSpectrum(code) {
  const data = IR_DATA[code];
  if (!data) return;
  const canvas = document.getElementById('ir-spectrum-canvas');
  if (canvas) drawIRSpectrum(canvas, data, code);
}

function drawIRSpectrum(canvas, data, code) {
  if (!data || data.length < 2) return;
  const rect = canvas.getBoundingClientRect();
  const W = rect.width || 600, H = 250;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = W * dpr; canvas.height = H * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
  const MARGIN = { top: 15, right: 15, bottom: 30, left: 50 };
  const x0 = MARGIN.left, y0 = MARGIN.top, x1 = W - MARGIN.right, y1 = H - MARGIN.bottom;
  const xMin = 2.5, xMax = 25;
  let yMin = Infinity, yMax = -Infinity;
  for (const d of data) {
    const wl = 10000 / d[0];
    if (wl < xMin || wl > xMax) continue;
    if (d[1] < yMin) yMin = d[1];
    if (d[1] > yMax) yMax = d[1];
  }
  const yPad = (yMax - yMin) * 0.05 || 0.01;
  yMin -= yPad; yMax += yPad;
  const toX = wl => x0 + (wl - xMin) / (xMax - xMin) * (x1 - x0);
  const toY = y => y1 - (y - yMin) / (yMax - yMin) * (y1 - y0);
  ctx.strokeStyle = '#ddd'; ctx.lineWidth = 0.5; ctx.setLineDash([3,3]);
  ctx.beginPath(); ctx.moveTo(x1, y0); ctx.lineTo(x1, y1); ctx.stroke();
  ctx.setLineDash([]);
  ctx.strokeStyle = '#ddd'; ctx.lineWidth = 0.5;
  for (let y = 0; y <= 1; y += 0.25) {
    const yy = y0 + y * (y1 - y0);
    ctx.beginPath(); ctx.moveTo(x0, yy); ctx.lineTo(x1, yy); ctx.stroke();
  }
  ctx.strokeStyle = '#2c3e50'; ctx.lineWidth = 1.5;
  ctx.beginPath(); let started = false;
  for (const d of data) {
    const wl = 10000 / d[0];
    if (wl < xMin || wl > xMax) continue;
    const x = toX(wl), y = toY(d[1]);
    if (!started) { ctx.moveTo(x, y); started = true; }
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.textAlign = 'center';
  ctx.fillStyle = '#888'; ctx.font = '10px sans-serif';
  const xTicks = [2,4,6,8,10,12,14,16,18,20,22,24];
  xTicks.forEach(t => { ctx.fillText(t.toString(), toX(t), y1 + 16); });
  ctx.fillStyle = '#bbb'; ctx.font = '9px sans-serif';
  ctx.fillText('Wavelength (µm)', W / 2, H - 2);
}

const _IR_COLORS = ['#e74c3c','#3498db','#2ecc71','#f39c12','#9b59b6','#1abc9c','#e67e22','#2c3e50','#c0392b','#2980b9'];

function drawPairIR(canvas, sampleCodes, clusterName, opts) {
  opts = opts || {};
  const rawData = sampleCodes.map(c => IR_DATA[c]).filter(Boolean);
  if (rawData.length < 2) return;
  const rect = canvas.getBoundingClientRect();
  const W = rect.width || 600, H = 280;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = W * dpr; canvas.height = H * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = opts.bg || '#fff';
  ctx.fillRect(0, 0, W, H);
  const MARGIN = { top: 10, right: 85, bottom: 28, left: 10 };
  const x0 = MARGIN.left, y0 = MARGIN.top, x1 = W - MARGIN.right, y1 = H - MARGIN.bottom;
  const xMin = 2.5, xMax = 22;
  const toX = wl => x0 + (wl - xMin) / (xMax - xMin) * (x1 - x0);
  const offset = (y1 - y0) / (rawData.length + 1);
  const used = (rawData.length - 1 + 0.8) * offset;
  const topPad = ((y1 - y0) - used) / 2;
  // Global y-range across all spectra for uniform scaling
  let yMin = Infinity, yMax = -Infinity;
  for (const data of rawData)
    for (const d of data) {
      const wl = 10000 / d[0];
      if (wl >= xMin && wl <= xMax) { if (d[1] < yMin) yMin = d[1]; if (d[1] > yMax) yMax = d[1]; }
    }
  const yRange = (yMax - yMin) || 1;
  const toY = (val, idx) => y1 - topPad - idx * offset - ((val - yMin) / yRange) * offset * 0.8;

  // Draw each spectrum with offset using true absorbance values on a shared scale
  rawData.forEach((data, idx) => {
    const color = _IR_COLORS[idx % _IR_COLORS.length];
    ctx.strokeStyle = color; ctx.lineWidth = 1.2;
    ctx.beginPath(); let started = false;
    for (const d of data) {
      const wl = 10000 / d[0];
      if (wl < xMin || wl > xMax) continue;
      const x = toX(wl), y = toY(d[1], idx);
      if (!started) { ctx.moveTo(x, y); started = true; }
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    // Label on the right
    ctx.fillStyle = color; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.font = '11px sans-serif';
    const labelY = toY(0, idx);
    ctx.fillText(sampleCodes[idx], x1 + 6, labelY);
  });

  ctx.textAlign = 'center'; ctx.fillStyle = '#888'; ctx.font = '10px sans-serif';
  const xTicks = [2,4,6,8,10,12,14,16,18,20,22];
  xTicks.forEach(t => { ctx.fillText(t.toString(), toX(t), y1 + 14); });
  ctx.fillStyle = '#bbb'; ctx.font = '9px sans-serif';
  ctx.fillText('Wavelength (µm)', W / 2, H - 2);
}

function drawAllIRSpectra() {
  const canvas = document.getElementById('ir-overview-chart');
  if (!canvas) return;
  const codes = Object.keys(IR_DATA);

  const PALETTE = ['#1f77b4','#ff7f0e','#2ca02c','#d62728','#9467bd','#8c564b','#e377c2','#7f7f7f','#bcbd22','#17becf','#aec7e8','#ffbb78'];
  const groupOrder = [];
  const sampleGroup = {};
  const groupColor = {};
  let palIdx = 0;

  PAIR_GROUPS.forEach(g => {
    g.falls.forEach(f => {
      const inCluster = f.samples.filter(c => IR_DATA[c]);
      if (inCluster.length >= 2) {
        const key = f.name;
        if (!groupOrder.includes(key)) groupOrder.push(key);
        if (!groupColor[key]) { groupColor[key] = PALETTE[palIdx % PALETTE.length]; palIdx++; }
        inCluster.forEach(c => sampleGroup[c] = key);
      }
    });
  });

  const candidates = [
    ['Exp19-04','Exp19-08'],
    ['Exp19-50','Exp19-53'],
    ['Exp19-06','Exp19-34'],
  ];
  candidates.forEach((pair, i) => {
    const key = 'Candidate ' + (i + 1);
    groupOrder.push(key);
    if (!groupColor[key]) { groupColor[key] = PALETTE[palIdx % PALETTE.length]; palIdx++; }
    pair.forEach(c => sampleGroup[c] = key);
  });

  const unpaired = codes.filter(c => !sampleGroup[c]);
  if (unpaired.length) {
    groupOrder.push('Unpaired');
    unpaired.forEach(c => sampleGroup[c] = 'Unpaired');
    groupColor['Unpaired'] = '#ddd';
  }

  // Order spectra by similarity (most similar at bottom, most different at top)
  const GRID_N = 200;
  const comGrid = Array.from({ length: GRID_N }, (_, i) => 400 + i * (3600 / GRID_N));
  function interpSpec(code) {
    const pts = IR_DATA[code].slice().sort((a, b) => a[0] - b[0]);
    return comGrid.map(t => {
      let lo = 0, hi = pts.length - 1;
      while (lo < hi - 1) { const m = (lo + hi) >> 1; if (pts[m][0] < t) lo = m; else hi = m; }
      const [x0, y0] = pts[lo], [x1, y1] = pts[hi];
      return x1 === x0 ? y0 : y0 + (t - x0) * (y1 - y0) / (x1 - x0);
    });
  }
  function cosine(a, b) {
    let dot = 0, na = 0, nb = 0;
    for (let i = 0; i < a.length; i++) { dot += a[i] * b[i]; na += a[i] * a[i]; nb += b[i] * b[i]; }
    return dot / (Math.sqrt(na) * Math.sqrt(nb) || 1);
  }
  const interp = Object.fromEntries(codes.map(c => [c, interpSpec(c)]));
  const avgSpec = comGrid.map((_, i) => codes.reduce((s, c) => s + interp[c][i], 0) / codes.length);
  const sims = codes.map(c => ({ code: c, sim: cosine(interp[c], avgSpec) }));
  sims.sort((a, b) => b.sim - a.sim);

  const items = sims.map(s => ({
    code: s.code,
    group: sampleGroup[s.code] || 'Unpaired',
    color: groupColor[sampleGroup[s.code]] || '#ddd',
    sim: s.sim,
  }));

  const W = 800;
  const LANE_H = 9, GROUP_GAP = 0, MARGIN = { top: 100, right: 80, bottom: 30, left: 85 };
  const H = MARGIN.top + MARGIN.bottom + items.length * LANE_H + 10;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = W * dpr; canvas.height = H * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);

  const x0 = MARGIN.left, y0 = MARGIN.top, x1 = W - MARGIN.right, y1 = H - MARGIN.bottom;
  const xMin = 2.5, xMax = 22;
  const toX = wl => x0 + (wl - xMin) / (xMax - xMin) * (x1 - x0);

  let curY = y0;
  const yPos = {};
  items.forEach(item => {
    yPos[item.code] = curY + LANE_H / 2;
    curY += LANE_H;
  });

  let yMin = Infinity, yMax = -Infinity;
  for (const code of codes)
    for (const d of IR_DATA[code]) {
      const wl = 10000 / d[0];
      if (wl >= xMin && wl <= xMax) { if (d[1] < yMin) yMin = d[1]; if (d[1] > yMax) yMax = d[1]; }
    }
  const yRange = (yMax - yMin) || 1;

  ctx.strokeStyle = '#f0f0f0'; ctx.lineWidth = 0.5;
  ctx.beginPath();
  for (let y = y0; y <= y1; y += LANE_H * 2) { ctx.moveTo(x0, y); ctx.lineTo(x1, y); }
  ctx.stroke();

  for (const item of items) {
    const data = IR_DATA[item.code];
    const baseY = yPos[item.code];
    ctx.strokeStyle = item.color; ctx.lineWidth = 1.1;
    ctx.beginPath(); let started = false;
    for (const d of data) {
      const wl = 10000 / d[0];
      if (wl < xMin || wl > xMax) continue;
      const x = toX(wl), y = baseY - ((d[1] - yMin) / yRange) * LANE_H * 10;
      if (!started) { ctx.moveTo(x, y); started = true; }
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  ctx.textBaseline = 'bottom';
  curY = y0;
  items.forEach(item => {
    const baseY = curY + LANE_H / 2;
    ctx.fillStyle = item.color; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'right';
    const label = item.group.length > 16 ? item.group.slice(0, 15) + '\u2026' : item.group;
    ctx.fillText(label, x0 - 6, baseY);
    ctx.fillStyle = item.color; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText(item.code, x1 + 1, baseY - 30);
    curY += LANE_H;
  });

  ctx.fillStyle = '#888'; ctx.font = '9px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  const xTicks = [2,4,6,8,10,12,14,16,18,20,22];
  xTicks.forEach(t => ctx.fillText(t.toString(), toX(t), y1 + 4));
  ctx.fillStyle = '#bbb'; ctx.font = '9px sans-serif';
  ctx.fillText('Wavelength (µm)', W / 2, y1 + 18);
}

// ---- FIGURE 5: IR SPECTRA OF CLUSTERS 2, 8, 11 (Paper tab) ----
function drawIRClusterSpectraPaper() {
  const cv = document.getElementById('irClusterSpectraPaper');
  if (!cv || typeof IR_DATA === 'undefined') return;
  const targetClusters = [
    { name:'Cluster 2', codes:['Exp19-10','Exp19-24'], color:'#1f77b4' },
    { name:'Cluster 8', codes:['Exp19-14','Exp19-30'], color:'#2ca02c' },
    { name:'Cluster 11', codes:['Exp19-41','Exp19-42'], color:'#d62728' },
  ];
  const W=700, H=270, dpr=window.devicePixelRatio||1;
  cv.width=W*dpr; cv.height=H*dpr;
  const ctx=cv.getContext('2d');
  ctx.scale(dpr,dpr);
  ctx.fillStyle='#fff'; ctx.fillRect(0,0,W,H);
  const ml=65, mr=20, mt=25, mb=35;
  const x0=ml, x1=W-mr, y0=mt, y1=H-mb;
  const wlMin=6, wlMax=16;
  const toX=wl=>x0+(wl-wlMin)/(wlMax-wlMin)*(x1-x0);
  let aMin=Infinity, aMax=-Infinity;
  targetClusters.forEach(g=>g.codes.forEach(c=>IR_DATA[c].forEach(d=>{const wl=10000/d[0];if(wl>=wlMin&&wl<=wlMax){if(d[1]<aMin)aMin=d[1];if(d[1]>aMax)aMax=d[1];}})));
  const aRng=(aMax-aMin)||1;
  const toY=v=>y1-(v-aMin)/aRng*(y1-y0);
  ctx.strokeStyle='#eee'; ctx.lineWidth=0.5; ctx.beginPath();
  [6,8,10,12,14,16].forEach(wl=>{const x=toX(wl);ctx.moveTo(x,y0);ctx.lineTo(x,y1);});
  ctx.stroke();
  const styles = [[],[3,3],[],[3,3],[]];
  targetClusters.forEach((g,gi)=>{
    g.codes.forEach((c,si)=>{
      const pts=IR_DATA[c];
      ctx.strokeStyle=g.color; ctx.lineWidth=1.1;
      ctx.setLineDash(styles[si]||[]);
      ctx.beginPath(); let started=false;
      pts.forEach(d=>{
        const wl=10000/d[0]; if(wl<wlMin||wl>wlMax)return;
        const x=toX(wl),y=toY(d[1]);
        if(!started){ctx.moveTo(x,y);started=true;}else ctx.lineTo(x,y);
      });
      ctx.stroke();
      const last=pts.filter(d=>{const wl=10000/d[0];return wl>=wlMin&&wl<=wlMax;});
      if(last.length){
        const lp=last[last.length-1], lx=toX(10000/lp[0])+2, ly=toY(lp[1]);
        ctx.fillStyle=g.color; ctx.font='9px sans-serif'; ctx.textBaseline='middle'; ctx.textAlign='left';
        ctx.fillText(c,lx,ly);
      }
    });
  });
  ctx.setLineDash([]);
  const legY=[y0+15,y0+(y1-y0)/2,y1-15];
  targetClusters.forEach((g,i)=>{
    ctx.fillStyle=g.color; ctx.font='bold 11px sans-serif'; ctx.textBaseline='middle'; ctx.textAlign='left';
    ctx.fillRect(x1+8,legY[i]-4,10,10); ctx.fillText(g.name,x1+22,legY[i]);
  });
  ctx.strokeStyle='#ccc'; ctx.lineWidth=0.5;
  ctx.strokeRect(x0,y0,x1-x0,y1-y0);
  ctx.fillStyle='#888'; ctx.font='9px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='top';
  [6,8,10,12,14,16].forEach(wl=>ctx.fillText(wl.toString(),toX(wl),y1+4));
  ctx.fillStyle='#bbb'; ctx.font='9px sans-serif'; ctx.fillText('Wavelength (µm)',W/2,y1+18);
}

