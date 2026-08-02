if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x,y,w,h,r){if(r===undefined)r=0;this.moveTo(x+r,y);this.lineTo(x+w-r,y);this.quadraticCurveTo(x+w,y,x+w,y+r);this.lineTo(x+w,y+h-r);this.quadraticCurveTo(x+w,y+h,x+w-r,y+h);this.lineTo(x+r,y+h);this.quadraticCurveTo(x,y+h,x,y+h-r);this.lineTo(x,y+r);this.quadraticCurveTo(x,y,x+r,y);this.closePath();return this;};
}
// IR consistency scores for existing clusters (from full-range cosine analysis)
const _IR_CLUSTER_STATUS = {
  'Cluster 1':        { ok: true,  d:0.005, note:'IR consistent (E44+E49 99.5%)' },
  'Cluster 2':        { ok: true,  d:0.012, note:'IR consistent (E53+E43+E56 98.8%)' },
  'Cluster 3':        { ok: true,  d:0.006, note:'IR consistent (E51+E52 99.4%)' },
  'Cluster 4':        { ok: true,  d:0.022, note:'IR consistent (avg 97.8%)' },
  'Cluster 5':        { ok: true,  d:0.001, note:'IR consistent (E48+E45 99.9%)' },
  'Cluster 6':        { ok: true,  d:0.040, note:'IR consistent (E54+E46 96.0%)' },
  'Cluster 7':        { ok: true,  d:0.009, note:'IR consistent (avg 99.1%)' },
  'Cluster 8':        { ok: true,  d:0.007, note:'IR consistent (E06+E12+E09 99.3%)' },
   'Cluster 9':        { ok: null, d:null,  note:'E01 with IR, E25 no IR data' },
  'Cluster 10':       { ok: true,  d:0.039, note:'IR consistent (E10+E24 96.1%)' },
  'Cluster 11':       { ok: null, d:null,  note:'no IR data' },
};
const _IR_PALETTE = ['#1f77b4','#ff7f0e','#2ca02c','#d62728','#9467bd','#8c564b','#e377c2','#7f7f7f','#bcbd22','#17becf','#aec7e8','#ffbb78'];
let _IR_CLUSTER_COLORS = {};
let _IR_VISIBLE_CLUSTERS = {};
// Pre-compute cluster colors (runs at module load, after data.js + ir-data.js)
(function() {
  if (typeof PAIR_GROUPS === 'undefined' || typeof IR_DATA === 'undefined') return;
  let idx = 0;
  PAIR_GROUPS.forEach(g => g.falls.forEach(f => {
    if (f.samples.filter(c => IR_DATA[c]).length >= 2) {
      _IR_CLUSTER_COLORS[f.name] = _IR_PALETTE[idx % _IR_PALETTE.length];
      idx++;
    }
  }));
})();

// ---------- Supabase ----------
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

// Cache of sample codes that have photos in Supabase
const PHOTO_SAMPLES = new Set();
(async function() {
  try {
    const { data } = await _supabase.from('files').select('sample_code').eq('file_type', 'photo');
    if (data) data.forEach(r => PHOTO_SAMPLES.add(r.sample_code));
  } catch(e) { /* non-critical */ }
})();

// ---------- State ----------
let currentSample = null;
let observationsCache = {};
let filesCache = {};
const _selectedIRSamples = new Set();

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
  if (page === 'pairing') renderPairing();
  if (page === 'research') renderResearch();
  if (page === 'contact') renderContact();
  if (page === 'sample') {
    const parts = (data || '').split('#');
    showSample(parts[0]);
    if (parts[1]) setTimeout(() => {
      const el = document.getElementById(parts[1]);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }
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
        <h1 style="color:#fff;margin:0;font-size:26px;text-shadow:0 1px 4px rgba(0,0,0,.5)">${__('home_title')}</h1>
        <p style="color:#ddd;font-size:14px;margin:4px 0 0;text-align:center">${__('home_subtitle')}</p>
      </div>
    </div>

    <div style="max-width:700px;margin:0 auto 32px;background:#fff8e1;border:1px solid #ffe082;border-radius:6px;padding:14px 18px;font-size:13px;color:#6d4c00">
      <strong>${__('home_wip')}</strong>
    </div>

    <div style="max-width:700px;margin:0 auto 32px">
      <h2 style="text-align:center;margin-bottom:12px">${__('home_about')}</h2>
      <p>${__('home_desc1').replace('{count}', SAMPLES.length)}</p>
      <p>${__('home_desc2')}</p>
    </div>

    <div style="text-align:center;margin-top:16px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <button class="btn" onclick="navigate('samples')">${__('home_btn_samples')}</button>
      <a href="mailto:meteoritosuchile@gmail.com?subject=Request%20Pre-print%20-%20Classification%20and%20Fragmentation%20Analysis%20of%20Ordinary%20Chondrites%20from%20the%20Atacama%20Desert" class="btn" style="text-decoration:none">${__('home_btn_report')}</a>
    </div>

    <div class="logos" style="margin-top:32px">
      <a href="https://meteoritical.org/" target="_blank" rel="noopener noreferrer"><img src="Logos/Logo_Metsoc.png" alt="Meteoritical Society" title="Meteoritical Society" style="height:48px"></a>
      <a href="https://geologia.uchile.cl/" target="_blank" rel="noopener noreferrer"><img src="Logos/Logo_Geologia.png" alt="Departamento de Geología UChile" title="Departamento de Geología, Universidad de Chile" style="height:90px"></a>
      <a href="https://astronomia.udp.cl/es/collaboration/udp-cosmic-dust-laboratory/" target="_blank" rel="noopener noreferrer"><img src="Logos/Logo_UDP.png" alt="Cosmic Dust Lab UDP" title="Cosmic Dust Laboratory, Universidad Diego Portales" style="height:60px"></a>
      <a href="https://geologia.uchile.cl/investigacion/laboratorios-de-investigacion/laboratorio-de-fluidos-en-sistemas-planetarios" target="_blank" rel="noopener noreferrer"><img src="Logos/Logo_Planetary_Fluids.png" alt="Planetary Fluids Group" title="Planetary Fluids Research Group, Universidad de Chile" style="height:70px"></a>
      <div style="flex-basis:100%;height:0"></div>
      <a href="https://www.sociedadgeologica.cl/geositios-1/meteoritos-y-ciencias-planetarias" target="_blank" rel="noopener noreferrer"><img src="Logos/Logo_MyCP.png" alt="Grupo Meteoritos y Ciencias Planetarias" title="Grupo Meteoritos y Ciencias Planetarias" style="height:70px"></a>
      <a href="https://geologia.uchile.cl/investigacion/laboratorios-de-investigacion/laboratorio-de-paleomagnetismo" target="_blank" rel="noopener noreferrer"><img src="Logos/LAMP_logo-01.png" alt="LAMP - Laboratorio de Paleomagnetismo UChile" title="LAMP - Laboratorio de Paleomagnetismo, Universidad de Chile" style="height:50px"></a>
      <a href="https://uchile.cl/" target="_blank" rel="noopener noreferrer"><img src="Logos/U de Chile.jpg" alt="Universidad de Chile" title="Facultad de Ciencias Físicas y Matemáticas, Universidad de Chile" style="height:70px"></a>
    </div>
  `;
}

// ---------- Research ----------
function renderResearch() {
  const w = (id, label) => `<div style="margin-bottom:16px;padding:16px;background:#fff;border:1px solid #e0e0e0;border-radius:6px">
    <div style="display:flex;align-items:flex-start;gap:12px">
      <div style="flex:1">
        <div style="font-size:13px;color:#888;margin-bottom:2px">${label}</div>
        <strong style="font-size:15px">${id.title}</strong>
        <p style="font-size:13px;color:#555;margin:2px 0">${id.authors}</p>
        <p style="font-size:12px;color:#888">${id.year} &middot; ${id.inst}</p>
      </div>
      <div style="flex-shrink:0">${id.btn}</div>
    </div>
  </div>`;
  const sec = (title, items) => `<h2 style="font-size:17px;margin:28px 0 12px;padding-bottom:6px;border-bottom:1px solid #ddd">${title}</h2>${items}`;

  document.getElementById('research-content').innerHTML = `
    <h1 style="margin-bottom:4px">${__('research_title')}</h1>
    <p style="color:#666;font-size:14px;margin-bottom:24px">${__('research_desc')}</p>

    ${sec(__('research_sec_articles'),
      w({
        title: 'Classification and Fragmentation Analysis of Ordinary Chondrites from the Atacama Desert',
        authors: 'C. S. Aravena, D. Moncada, L. Cieza, G. Batalla, A. Escobar, F. Poblete, R. Fernandez, M. J. Figueroa Zambrano, M. E. Parra, M. Peña, R. Lavín, B. De la Fuente, V. Cárcamo, D. Castañeda, S. Gatica, A. Mohor, L. Olivares, R. Valles',
        year: '2026',
        inst: 'UChile, UMayor, UDP',
        btn: `<a href="mailto:meteoritosuchile@gmail.com?subject=Request%20Pre-print%20-%20Beatriz%20Levi%20Repository" class="btn">${__('research_request')}</a>`
      }, __('research_type_article')) +
      w({
        title: 'Petrologic sub-type and melt inclusions study in chondrules of three carbonaceous chondrites',
        authors: 'C. S. Aravena, D. Moncada, M. Valenzuela, K. Deckart, M. Zolensky, L. Moore, A. Morlok, G. Pinto & R. Martinez',
        year: '2026',
        inst: 'UChile, UCN, NASA JSC, Virginia Tech, U Münster, ULB, Museo del Meteorito',
        btn: `<a href="mailto:meteoritosuchile@gmail.com?subject=Request%20Pre-print%20-%20Petrologic%20sub-type%20and%20melt%20inclusions" class="btn">${__('research_request')}</a>`
      }, __('research_type_article')))}

    ${sec(__('research_sec_grad'), w({
      title: 'Subtipo petrológico e inclusiones vítreas en condritas carbonáceas',
      authors: 'C. S. Aravena',
      year: '2023',
      inst: 'Universidad de Chile',
      btn: `<a href="mailto:meteoritosuchile@gmail.com?subject=Request%20MSc%20Thesis%20-%20Subtipo%20petrol%C3%B3gico" class="btn">${__('research_request')}</a>`
    }, __('research_type_msc')))}

    ${sec(__('research_sec_undergrad'),
      w({
        title: 'Una reconstrucción aproximada de los procesos iniciales que dieron origen a los primeros cuerpos celestes',
        authors: 'N. Amengual',
        year: '2019',
        inst: 'Universidad de Chile',
        btn: `<a href="N_Amengual_2019 (1).pdf" target="_blank" class="btn">${__('research_download')}</a>`
      }, __('research_type_thesis')) +
      w({
        title: 'Inclusiones vítreas en condritos carbonáceos del Desierto de Atacama, Región de Antofagasta, Chile',
        authors: 'C. S. Aravena',
        year: '2019',
        inst: 'Universidad de Chile',
        btn: `<a href="CS_Aravena_2019 (1).pdf" target="_blank" class="btn">${__('research_download')}</a>`
      }, __('research_type_thesis')) +
      w({
        title: 'Estudio del espectro infrarrojo de meteoritos y aplicación en observaciones astronómicas',
        authors: 'G. Batalla',
        year: '2020',
        inst: 'Universidad de Chile / UDP',
        btn: `<a href="G_Batalla_2020 (1).pdf" target="_blank" class="btn">${__('research_download')}</a>`
      }, __('research_type_thesis')) +
      w({
        title: 'Clasificación y descripción de meteoritos mediante análisis petrográfico',
        authors: 'D. Luna',
        year: '2022',
        inst: 'Universidad de Chile',
        btn: `<a href="D_Luna_2022 (1).pdf" target="_blank" class="btn">${__('research_download')}</a>`
      }, __('research_type_thesis')) +
      w({
        title: 'Desarrollo de calibración en olivino mediante espectroscopía Raman: clasificación de condritos ordinarios',
        authors: 'M. F. Tapia',
        year: '2023',
        inst: 'Universidad de Chile',
        btn: `<a href="MF_Tapia_2023 (1).pdf" target="_blank" class="btn">${__('research_download')}</a>`
      }, __('research_type_thesis')) +
      w({
        title: 'Búsqueda de volátiles en cuerpos parentales asteroidales mediante estudio de inclusiones vítreas, espectroscopía Raman y espectroscopía de absorbancia en condritos ordinarios',
        authors: 'M. E. Parra',
        year: '2023',
        inst: 'Universidad de Chile',
        btn: `<a href="ME_Parra_2023.pdf" target="_blank" class="btn">${__('research_download')}</a>`
      }, __('research_type_thesis')) +
      w({
        title: 'Clasificación de meteoritos del Desierto de Atacama utilizando susceptibilidad magnética, petrografía y técnicas espectroscópicas',
        authors: 'M. J. Figueroa Zambrano',
        year: '2023',
        inst: 'Universidad Mayor',
        btn: `<a href="MFigueroaZ_TE_SAG (1).pdf" target="_blank" class="btn">${__('research_download')}</a>`
      }, __('research_type_thesis'))
    )}

    ${sec(__('research_sec_reports'), w({
      title: 'Informe Práctica Profesional I — Montaje inicial del Repositorio Beatriz Levi',
      authors: 'B. De la Fuente',
      year: '2020',
      inst: 'Universidad de Chile',
      btn: `<a href="Informe_Practica_I_final (1).pdf" target="_blank" class="btn">${__('research_download')}</a>`
    }, __('research_type_report')))}

    ${sec(__('research_sec_grants'),
      w({
        title: 'Meteorites: Human heritage — Meteoritical Society Community Grant report',
        authors: 'C. S. Aravena',
        year: '2024',
        inst: 'Universidad de Chile',
        btn: `<a href="https://meteoritical.org/news/community-grant-report-meteorites-human-heritage" target="_blank" rel="noopener noreferrer" class="btn">${__('research_readmore')}</a>`
      }, __('research_type_grant')) +
      w({
        title: 'Classification & Curation of Atacama\'s Ordinary Chondrites at Chile\'s Oldest University',
        authors: 'D. Moncada',
        year: '2025',
        inst: 'Universidad de Chile',
        btn: `<a href="https://meteoritical.org/news/five-new-meteoritical-society-community-grants-awarded" target="_blank" rel="noopener noreferrer" class="btn">${__('research_readmore')}</a>`
      }, __('research_type_grant')))}
  `;
}

// ---------- Contact ----------
function renderContact() {
  document.getElementById('contact-content').innerHTML = `
    <h1 style="margin-bottom:16px">${__('contact_title')}</h1>

    <div style="max-width:700px;margin:0 auto 32px;background:#f8f8f8;border-left:3px solid #1a2a3a;padding:20px 24px;border-radius:0 6px 6px 0">
      <h2 style="margin:0 0 8px;font-size:16px">${__('contact_loan')}</h2>
      <p style="font-size:13px;margin:0 0 10px">${__('contact_loan_desc')}</p>
      <p style="font-size:13px;font-weight:600;margin:0 0 6px">${__('contact_loan_how')}</p>
      <p style="font-size:13px;margin:0 0 4px">${__('contact_loan_detail')}</p>
      <ol style="font-size:13px;margin:6px 0 0 18px;padding:0;color:#444">
        <li style="margin-bottom:4px">${__('contact_step1')}</li>
        <li style="margin-bottom:4px">${__('contact_step2')}</li>
        <li style="margin-bottom:4px">${__('contact_step3')}</li>
        <li style="margin-bottom:4px">${__('contact_step4')}</li>
      </ol>
      <p style="font-size:13px;margin:8px 0 0">Contact: Departamento de Geología, FCFM, Universidad de Chile — <a href="Repository_The_Meteoritical_Society_Community_Grant_-_Application_Form_DM (2).pdf" target="_blank" style="color:#1a2a3a;font-weight:600">${__('contact_project')}</a></p>
    </div>

    <div style="max-width:700px;margin:0 auto 32px;text-align:center">
      <h2 style="margin-bottom:12px">${__('contact_info')}</h2>
      <p style="text-align:center;font-size:13px;color:#555">
        <strong>Departamento de Geología</strong><br>
        Facultad de Ciencias Físicas y Matemáticas<br>
        Universidad de Chile<br>
        Plaza Ercilla 803, Santiago, Chile<br><br>
        <strong>${__('contact_academic')}:</strong> Daniel Moncada<br>
        <strong>${__('contact_curator')}:</strong> Samanta Aravena<br>
        <strong>Email:</strong> <a href="mailto:meteoritosuchile@gmail.com" style="color:#1a2a3a;font-weight:600">meteoritosuchile@gmail.com</a>
      </p>
      <p style="margin-top:12px">
        <a href="mailto:meteoritosuchile@gmail.com" class="btn" style="font-size:14px">${__('contact_email_btn')}</a>
      </p>
    </div>

    <div class="logos" style="margin-top:24px">
      <a href="https://meteoritical.org/" target="_blank" rel="noopener noreferrer"><img src="Logos/Logo_Metsoc.png" alt="Meteoritical Society" title="Meteoritical Society" style="height:48px"></a>
      <a href="https://geologia.uchile.cl/" target="_blank" rel="noopener noreferrer"><img src="Logos/Logo_Geologia.png" alt="Departamento de Geología UChile" title="Departamento de Geología, Universidad de Chile" style="height:90px"></a>
      <a href="https://astronomia.udp.cl/es/collaboration/udp-cosmic-dust-laboratory/" target="_blank" rel="noopener noreferrer"><img src="Logos/Logo_UDP.png" alt="Cosmic Dust Lab UDP" title="Cosmic Dust Laboratory, Universidad Diego Portales" style="height:60px"></a>
      <a href="https://geologia.uchile.cl/investigacion/laboratorios-de-investigacion/laboratorio-de-fluidos-en-sistemas-planetarios" target="_blank" rel="noopener noreferrer"><img src="Logos/Logo_Planetary_Fluids.png" alt="Planetary Fluids Group" title="Planetary Fluids Research Group, Universidad de Chile" style="height:70px"></a>
      <div style="flex-basis:100%;height:0"></div>
      <a href="https://www.sociedadgeologica.cl/geositios-1/meteoritos-y-ciencias-planetarias" target="_blank" rel="noopener noreferrer"><img src="Logos/Logo_MyCP.png" alt="Grupo Meteoritos y Ciencias Planetarias" title="Grupo Meteoritos y Ciencias Planetarias" style="height:70px"></a>
      <a href="https://geologia.uchile.cl/investigacion/laboratorios-de-investigacion/laboratorio-de-paleomagnetismo" target="_blank" rel="noopener noreferrer"><img src="Logos/LAMP_logo-01.png" alt="LAMP - Laboratorio de Paleomagnetismo UChile" title="LAMP - Laboratorio de Paleomagnetismo, Universidad de Chile" style="height:50px"></a>
      <a href="https://uchile.cl/" target="_blank" rel="noopener noreferrer"><img src="Logos/U de Chile.jpg" alt="Universidad de Chile" title="Facultad de Ciencias Físicas y Matemáticas, Universidad de Chile" style="height:70px"></a>
    </div>
  `;
}

// ---------- Samples ----------
function renderSamples(filter = '') {
  const f = filter.toLowerCase();
  const showInput = !document.getElementById('sample-search');
  if (showInput) {
    document.getElementById('samples-content').innerHTML = `
      <h1>${__('samples_title')}</h1>
      <input class="search-bar" id="sample-search" placeholder="${__('samples_search')}">
      <div id="sample-table-wrap"></div>
      <div id="interactive-ir-section" style="margin-top:32px;border-top:1px solid #ddd;padding-top:16px">
        <h2 style="text-align:center;margin-bottom:16px;font-size:16px">Interactive IR Spectra</h2>
        <div id="interactive-ir-container"></div>
      </div>
    `;
    document.getElementById('sample-search').addEventListener('input', function() {
      renderSamplesTable(this.value);
    });
  }
  renderSamplesTable(filter);
}

function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function renderSamplesTable(filter) {
  const f = normalize(filter);
  const list = SAMPLES.filter(s =>
    !f || normalize(s.c).includes(f) || normalize(s.n).includes(f) || normalize(s.loc).includes(f)
  );
  const tableHtml = `<div class="table-wrap">
    <table>
      <thead><tr>
        <th>${__('th_code')}</th>
        <th>${__('th_locality')}</th>
        <th>${__('th_class')}</th>
        <th>${__('th_type')}</th>
        <th style="text-align:right">${__('th_shock')}</th>
        <th style="text-align:right">${__('th_weathering')}</th>
        <th style="text-align:right">${__('th_mass')}</th>
        <th style="text-align:right">${__('th_density')}</th>
        <th style="text-align:right">${__('th_logchi')}</th>
        <th style="text-align:center" title="Gallery">🔬</th>
        <th style="text-align:right">${__('th_ir')}</th>
      </tr></thead>
      <tbody>
        ${list.map(s => {
          const mass = MASS_MAP[s.c];
          const dens = DENSITY_MAP[s.c];
          const d = SAMPLE_DETAILS[s.c];
          const typeClass = d?.classification?.class;
          const clusterType = CLUSTER_TYPE_MAP[s.c];
          let typeLabel, typeColor;
          if (typeClass) {
            const m = typeClass.match(/^(H|LL|L)/);
            typeLabel = typeClass;
            typeColor = m ? {H:'h',L:'l',LL:'ll'}[m[1]] : 'q';
          } else if (clusterType) {
            const m = clusterType.type.match(/^(H|LL|L)/);
            typeLabel = (m ? m[1] : clusterType.type) + ' (' + clusterType.name + ')';
            typeColor = 'q';
          } else {
            const t = s.t !== '??' ? s.t : null;
            typeLabel = t || '—';
            typeColor = (t && s.pW !== null) ? {H:'h',L:'l',LL:'ll'}[t] : 'q';
          }
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
            <td style="text-align:center">${PHOTO_SAMPLES.has(s.c) || s.shk || d?.classification?.shock ? `<span style="cursor:pointer" onclick="event.stopPropagation();navigate('sample','${s.c}#sample-gallery')" title="Gallery">🔬</span>` : '—'}</td>
            <td style="text-align:right;cursor:pointer" onclick="event.stopPropagation();navigate('sample','${s.c}#sample-ir')" title="View IR spectrum">${irStr}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
    </div>
    <p style="font-size:12px;color:#888;text-align:center">${list.length} ${__('samples_found')}</p>`;
  const wrap = document.getElementById('sample-table-wrap');
  if (wrap) wrap.innerHTML = tableHtml;
  renderInteractiveIRSpectra();
}

// ---------- Sample Detail ----------
async function showSample(code) {
  const s = SAMPLES.find(x => x.c === code);
  if (!s) { navigate('samples'); return; }
  currentSample = s;

  const kt = s.lc != null ? (s.lc >= 5.08 ? 'H' : s.lc >= 4.68 ? 'L' : s.lc >= 4.37 ? 'LL' : '??') : '—';
  const wStr = s.pW != null ? 'W' + s.pW : '—';
  const irStr = s.ir === 'sí' ? '<span class="badge badge-ok">' + __('sd_ir_done') + '</span>' : s.ir === 'disp' ? '<span class="badge badge-pending">' + __('sd_ir_pending') + '</span>' : '<span class="badge badge-none">' + __('sd_ir_no') + '</span>';

  // Get field data
  const fieldVals = FIELD_DATA[s.n] || FIELD_DATA[s.n.replace(/(\w+)(\d+)/,'$1 $2')] || [];
  const fieldMean = fieldVals.length ? (fieldVals.reduce((a,b)=>a+b,0)/fieldVals.length).toFixed(2) : '—';

  const hasDetails = !!SAMPLE_DETAILS[s.c];
  const hasIR = !!(IR_FILES[s.c] || IR_DATA[s.c]);

  document.getElementById('sample-content').innerHTML = `
    <p><a href="#" onclick="navigate('samples');return false" style="font-size:13px">${__('back_to_samples')}</a></p>
    <h1>${s.c}</h1>

    <div class="meta" style="display:grid;grid-template-columns:140px 1fr;gap:4px 12px;font-size:13px">
      <dt>${__('sd_locality')}</dt><dd>${s.loc}</dd>
      <dt>${__('sd_code')}</dt><dd>${s.c}</dd>
      <dt>${__('sd_class')}</dt><dd>Ordinary Chondrite (OC)</dd>
      <dt>${__('sd_type')}</dt><dd>${(()=>{const d=SAMPLE_DETAILS[s.c]; let h=''; if(d?.classification?.class){const c=d.classification.class;const m=c.match(/^(H|LL|L)/);h+=`<span class="tag-${(m?{H:'h',L:'l',LL:'ll'}[m[1]]:'q')}">${c}</span>`}else{const ct=CLUSTER_TYPE_MAP[s.c];if(ct){const m=ct.type.match(/^(H|LL|L)/);h+=`<span class="tag-q">${m?m[1]:ct.type} (${ct.name})</span>`}else{if(s.pW===null){h+=`<span class="tag-q">${s.t||'?'}</span>`}else{h+=typeTag(s.t)}}}const inc=isInconsistent(s);if(inc)h+=` <span title="${inc}" style="cursor:help;font-size:14px">⚠️</span>`;return h})()}</dd>
      <dt>${__('sd_shock')}</dt><dd>${s.shk || SAMPLE_DETAILS[s.c]?.classification?.shock || '—'}</dd>
      <dt>${__('sd_classifier')}</dt><dd>${SAMPLE_DETAILS[s.c]?.classification?.classifier || 'C. S. Aravena (2026)'}</dd>
      <dt>${__('sd_logchi')}</dt><dd>${s.lc != null ? s.lc.toFixed(3) : '—'}</dd>
      <dt>${__('sd_weathering')}</dt><dd>${wStr}</dd>
      <dt>${__('sd_ir_status')}</dt><dd>${irStr} ${s.ir === 'sí' ? '<span style="color:#888;font-size:11px">' + __('sd_ir_pending_analysis') + '</span>' : ''}</dd>
      <dt>${__('sd_field_chi')}</dt><dd>${fieldMean}</dd>
      <dt>${__('sd_density')}</dt><dd>${DENSITY_MAP[s.c] ? DENSITY_MAP[s.c].toFixed(3) : '—'}</dd>
      <dt>${__('sd_fragments')}</dt><dd>${FRAGMENTS_MAP[s.c] != null ? FRAGMENTS_MAP[s.c] === 'Briquette' ? 'Briquette (1 pellet)' : `${FRAGMENTS_MAP[s.c]} fragment${FRAGMENTS_MAP[s.c] > 1 ? 's' : ''}` : s.pieces ? `${s.pieces} fragment${s.pieces > 1 ? 's' : ''}` : '—'}</dd>
    </div>

    <div class="sample-details" style="margin-top:24px;border-top:1px solid #ddd;padding-top:16px">
      <h3 style="font-size:15px;margin-bottom:12px">Petrography &amp; Classification</h3>
      ${hasDetails ? renderSampleDetails(s.c) : `
      <p style="color:#888;font-size:13px;text-align:center;padding:20px 0">Próximamente más información, estamos investigando.</p>
      <table style="width:100%;font-size:12px;border-collapse:collapse;margin-bottom:8px">
        <tr><td style="padding:3px 8px;color:#888;width:130px;vertical-align:top">${__('sd_coordinates')}</td><td style="padding:3px 8px">${COORDS_MAP[s.c] || '—'}</td></tr>
        <tr><td style="padding:3px 8px;color:#888;width:130px;vertical-align:top">${__('sd_main_mass')}</td><td style="padding:3px 8px">Universidad de Chile</td></tr>
        <tr><td style="padding:3px 8px;color:#888;width:130px;vertical-align:top">${__('sd_finder')}</td><td style="padding:3px 8px">${DISCOVERER_MAP[s.c] || '—'}</td></tr>
      </table>`}
    </div>

    <div id="sample-ir" class="ir-spectrum-section" style="margin-top:24px;border-top:1px solid #ddd;padding-top:16px">
      <h3 style="font-size:15px;margin-bottom:12px">IR Spectrum</h3>
      ${hasIR ? `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        ${IR_FILES[s.c] ? `<a href="${encodeURI(IR_DIR + IR_FILES[s.c])}" download class="btn btn-sm" style="font-size:12px">${__('ir_download')}</a>` : ''}
      </div>
      <canvas id="ir-spectrum-canvas" style="width:100%;max-width:700px;height:280px;display:block;margin:0 auto"></canvas>
` : '<p style="color:#888;font-size:13px;text-align:center;padding:40px 0">' + __('sd_no_spectrum') + '</p>'}
    </div>

    <div id="sample-gallery" class="gallery-section" style="margin-top:24px;border-top:1px solid #ddd;padding-top:16px">
      <h3 style="font-size:15px;margin-bottom:12px">Gallery</h3>
      <div id="gallery-content"><div class="loading">${__('sd_loading_gallery')}</div></div>
    </div>
  `;

  // Load IR spectrum
  if (IR_DATA[s.c]) {
    const canvas = document.getElementById('ir-spectrum-canvas');
    if (canvas) drawIRSpectrum(canvas, IR_DATA[s.c], s.c);
  } else if (IR_FILES[s.c]) {
    loadIRSpectrum(s.c);
  }

  // Load gallery
  renderGallery(s.c);
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
  html += '<h3 style="font-size:15px;margin-bottom:12px">' + __('sd_petro_classification') + '</h3>';

  // Basic info
  const _basicLabels = { name: 'basic_name', observedFall: 'basic_observedFall', yearFound: 'basic_yearFound', country: 'basic_country', mass: 'basic_mass', pieces: 'basic_pieces' };
  if (d.basic) {
    html += '<table style="width:100%;font-size:12px;border-collapse:collapse;margin-bottom:14px">';
    Object.entries(d.basic).forEach(([k,v]) => {
      const label = _basicLabels[k] ? __(_basicLabels[k]) : k.replace(/([A-Z])/g,' $1').replace(/^./, s => s.toUpperCase());
      html += `<tr><td style="padding:3px 8px;color:#888;width:130px;vertical-align:top">${label}</td><td style="padding:3px 8px">${v}</td></tr>`;
    });
    html += '</table>';
  }

  // Classification
  if (d.classification) {
    html += `<div style="margin-bottom:14px;background:#f8f8f8;padding:10px 14px;border-radius:4px;font-size:12px">
      <strong style="color:#1a2a3a">${__('sd_classification')}:</strong> ${d.classification.class}<br>
      <strong style="color:#1a2a3a">${__('sd_classifier')}:</strong> ${d.classification.classifier}<br>
      <p style="margin:6px 0 0;font-size:12px;text-align:justify">${d.classification.description}</p>
    </div>`;
  }

  // Weathering
  if (d.weathering) {
    html += `<div style="margin-bottom:14px;background:#f8f8f8;padding:10px 14px;border-radius:4px;font-size:12px">
      <strong style="color:#1a2a3a">${__('sd_weathering_grade')}:</strong> ${d.weathering.grade}<br>
      <p style="margin:6px 0 0;font-size:12px;text-align:justify">${d.weathering.description}</p>
    </div>`;
  }

  // Petrology
  if (d.petrology) {
    html += '<div style="margin-bottom:14px">';
    if (d.petrology.mineralogy) {
      html += `<div style="background:#f8f8f8;padding:10px 14px;border-radius:4px;margin-bottom:8px;font-size:12px">
        <strong style="color:#1a2a3a">${__('sd_mineralogy')}:</strong>
        <p style="margin:6px 0 0;font-size:12px;text-align:justify">${d.petrology.mineralogy}</p>
      </div>`;
    }
    if (d.petrology.matrix) {
      html += `<div style="background:#f8f8f8;padding:10px 14px;border-radius:4px;margin-bottom:8px;font-size:12px">
        <strong style="color:#1a2a3a">${__('sd_matrix')}:</strong>
        <p style="margin:6px 0 0;font-size:12px;text-align:justify">${d.petrology.matrix}</p>
      </div>`;
    }
    if (d.petrology.chondrules) {
      html += `<div style="background:#f8f8f8;padding:10px 14px;border-radius:4px;margin-bottom:8px;font-size:12px">
        <strong style="color:#1a2a3a">${__('sd_chondrules')}:</strong>
        <p style="margin:6px 0 0;font-size:12px;text-align:justify">${d.petrology.chondrules}</p>
      </div>`;
    }
    if (d.petrology.chemicalGroup) {
      html += `<div style="background:#f8f8f8;padding:10px 14px;border-radius:4px;margin-bottom:8px;font-size:12px">
        <strong style="color:#1a2a3a">${__('sd_chemical_group')}:</strong>
        <p style="margin:6px 0 0;font-size:12px;text-align:justify">${d.petrology.chemicalGroup}</p>
      </div>`;
    }
    html += '</div>';
  }

  // Location
  const _locLabels = { coordinates: 'sd_coordinates', mainMass: 'sd_main_mass', finder: 'sd_finder', state: 'basic_country' };
  if (d.location) {
    html += '<table style="width:100%;font-size:12px;border-collapse:collapse;margin-bottom:8px">';
    Object.entries(d.location).forEach(([k,v]) => {
      const label = _locLabels[k] ? __(_locLabels[k]) : k.replace(/([A-Z])/g,' $1').replace(/^./, s => s.toUpperCase());
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
        uploaded_by: 'web'
      });
      if (dbErr) { err++; errMsg += ` DB: ${dbErr.message}`; continue; }
      ok++;
    } catch(e) { err++; errMsg += ` ${e.message}`; }
  }
  preview.innerHTML = '';
  const msg = `${ok} ${__('upload_ok')}, ${err} ${__('upload_error')}`;
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
  if (!confirm(__('delete_confirm'))) return;
  await _supabase.storage.from('sample-files').remove([path]);
  await _supabase.from('files').delete().eq('id', id);
  toast(__('file_deleted'));
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
  if (error) { el.innerHTML = '<p style="color:#c0392b">' + __('error_loading') + ' gallery</p>'; return; }
  data = (data || []).filter(f => f.filename !== 'EXP19-01_4X_TR_5.tif' && f.filename !== 'EXP19-01_4X_TR_4.tif' && f.filename !== 'EXP19-01_4X_NX_6.tif' && f.filename !== 'EXP19-01_4X_REF_2.tif');
  if (!data.length) {
    el.innerHTML = '<p style="color:#888;font-size:13px;text-align:center;padding:20px">' + __('sd_no_photos') + '</p>';
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
    canvasId === 'kly5StripPaper' ? 'Figure 4' :
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
    try { drawKLY5StripChart('kly5StripPaper'); } catch(e) { console.warn('Fig 4 error:', e); }
    try { drawAllIRSpectra('irClusterSpectraPaper', true); } catch(e) { console.warn('Fig 5 error:', e); }
  }, 50);
}

const massPoints = [];
let massHover = -1;

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
  ctx.fillText(__('chart_logchi_label'), (x0 + x1) / 2, y1 + 26);
  ctx.save(); ctx.translate(18, (y0 + y1) / 2); ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
  ctx.fillText(__('chart_mass_label'), 0, 0); ctx.restore();

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
    { type: 'label', text: __('chart_kly5_group'), h: 1 },
    { type: 'color', label: 'H (\u03c7 \u2265 4.82)', color: '#27ae60', h: 1 },
    { type: 'color', label: 'L (4.265 \u2264 \u03c7 < 4.82)', color: '#e67e22', h: 1 },
    { type: 'color', label: 'LL (\u03c7 < 4.265)', color: '#b8860b', h: 1 },
    { type: 'label', text: __('chart_petro_filled'), h: 1 },
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
        tip.textContent = p.c + ' ' + p.n + ' | mass=' + p.m + ' g, \u03c7=' + p.lc.toFixed(3) + ' | ' + p.grp + (p.hasPetro ? '' : ' (' + __('chart_nopetro') + ')');

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
  let html = '<h1 style="margin-bottom:8px">' + __('pairing_title') + '</h1>';
  html += '<p style="text-align:center;color:#666;font-size:13px;margin-bottom:24px">' + __('pairing_desc') + '</p>';
  html += '<h2 style="text-align:center;margin:20px 0 8px;font-size:15px;color:#444">' + __('pairing_ir_overview') + '</h2>';
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
      let sim = null;
      if (irCodes.length >= 2) {
        let totalSim = 0, pairs = 0;
        for (let i=0;i<irCodes.length;i++) {
          const a = getInterp(irCodes[i]);
          for (let j=i+1;j<irCodes.length;j++) {
            totalSim += cosSim(a, getInterp(irCodes[j]));
            pairs++;
          }
        }
        sim = totalSim/pairs;
      }
      irClusterRank.push({ name: f.name, sim: sim, codes: irCodes, allSamples: f.samples, type: f.type });
    });
  });
  irClusterRank.sort((a,b)=>b.sim-a.sim);
  const irRanked = irClusterRank.filter(r => r.sim !== null);

  // Cluster visibility toggles — only first IR-ranked cluster visible by default
  _IR_VISIBLE_CLUSTERS = {};
  const toggleKeys = Object.keys(_IR_CLUSTER_COLORS);
  toggleKeys.forEach(k => { _IR_VISIBLE_CLUSTERS[k] = false; });
  if (irRanked.length) _IR_VISIBLE_CLUSTERS[irRanked[0].name] = true;
  if (toggleKeys.length) {
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:10px 0 4px;font-size:12px">';
    toggleKeys.forEach(k => {
      const col = _IR_CLUSTER_COLORS[k];
      const checked = _IR_VISIBLE_CLUSTERS[k] ? ' checked' : '';
      html += `<label style="cursor:pointer;display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:4px;border:1px solid ${col}">
        <input type="checkbox"${checked} onchange="toggleIRCluster('${k}')" style="accent-color:${col}">
        <span style="color:${col};font-weight:600">${k}</span>
      </label>`;
    });
    html += '</div>';
  }

  if (irRanked.length) {
    html += '<h2 style="text-align:center;margin:28px 0 12px;font-size:15px;color:#444">' + __('pairing_ir_ranking') + '</h2>';
    html += '<div style="overflow-x:auto;margin-bottom:20px"><table style="width:100%;border-collapse:collapse;font-size:12px">';
    html += '<thead><tr style="background:#f7f7f7">';
    [__('pr_rank'),__('pr_cluster'),__('pr_type'),__('pr_ir_match'),__('pr_samples'),__('pr_locality'),__('pr_delta'),__('pr_distance')].forEach(h => {
      html += `<th style="padding:6px 8px;text-align:left;border-bottom:2px solid #ddd;font-weight:600">${h}</th>`;
    });
    html += '</tr></thead><tbody>';
    irRanked.forEach((r,i) => {
      const sCodes = r.allSamples;
      const detailId = 'cd-' + i;
      html += `<tr class="clickable"${i%2===1?' style="background:#fafafa"':''} onclick="toggleClusterDetail('${detailId}')">`;
      const bgColor = _IR_CLUSTER_COLORS[r.name];
      html += `<td style="padding:5px 8px;color:#fff;font-weight:600;border-radius:3px;background:${bgColor || 'transparent'}"><span class="toggle-arrow" style="display:inline-block;width:12px;color:${bgColor ? '#fff' : '#888'}">▶</span> ${i+1}</td>`;
      html += `<td style="padding:5px 8px;font-weight:600">Cluster ${i+1}</td>`;
      const typeLabel = r.type;
      const typeColor = ({H:'#27ae60',L:'#e67e22',LL:'#b8860b'})[r.type[0]] || '#999';
      html += `<td style="padding:5px 8px"><span style="display:inline-block;padding:1px 7px;border-radius:3px;background:${typeColor};color:#fff;font-size:11px;font-weight:600">${typeLabel}</span></td>`;
      const irPct = r.sim !== null ? (r.sim*100).toFixed(1)+'%' : __('pr_ir_pending');
      const irColor = r.sim !== null ? (r.sim >= 0.99 ? '#27ae60' : r.sim >= 0.97 ? '#e67e22' : '#e74c3c') : '#999';
      html += `<td style="padding:5px 8px;color:${irColor};font-weight:600">${irPct}</td>`;
      html += `<td style="padding:5px 8px">${r.allSamples.join(', ')}</td>`;
      const locs = [...new Set(sCodes.map(c => SAMPLES.find(x=>x.c===c)?.loc || '').filter(Boolean))].join(', ');
      html += `<td style="padding:5px 8px">${locs}</td>`;
      const lcs = sCodes.map(c => SAMPLES.find(x=>x.c===c)?.lc).filter(lc=>lc!=null);
      const deltaStr = lcs.length >= 2 ? (Math.max(...lcs) - Math.min(...lcs)).toFixed(3) : '—';
      html += `<td style="padding:5px 8px">${deltaStr}</td>`;
      const dists = [];
      for (let di=0;di<sCodes.length;di++) for (let dj=di+1;dj<sCodes.length;dj++) {
        const c1=COORDS_MAP[sCodes[di]], c2=COORDS_MAP[sCodes[dj]];
        if (c1&&c2) {
          const p1=c1.match(/[\d.]+/g), p2=c2.match(/[\d.]+/g);
          if (p1&&p2&&p1.length>=2&&p2.length>=2) {
            const d=Math.round(Math.sqrt((p1[0]-p2[0])**2+(p1[1]-p2[1])**2));
            dists.push(d);
          }
        }
      }
      const distStr = dists.length ? (dists.length===1?dists[0]+'m':Math.min(...dists)+'–'+Math.max(...dists)+'m') : '—';
      html += `<td style="padding:5px 8px">${distStr}</td>`;
      html += '</tr>';
      // Detail row
      html += `<tr id="${detailId}" style="display:none"><td colspan="8" style="padding:0;background:#fafafa">`;
      html += `<div style="padding:14px 18px;font-size:12px;line-height:1.6">`;
      const irStatus = _IR_CLUSTER_STATUS[r.name];
      if (irStatus && irStatus.ok === true) {
        html += `<div style="color:#27ae60;margin-bottom:10px;font-weight:600">✓ IR consistent (d=${irStatus.d.toFixed(3)})</div>`;
      } else if (irStatus && irStatus.ok === false) {
        html += `<div style="color:#e74c3c;margin-bottom:10px;font-weight:600">⚠ IR inconsistent (d=${irStatus.d.toFixed(3)})</div>`;
      } else if (r.codes.length === 1) {
        html += `<div style="color:#888;margin-bottom:10px">○ 1 sample with IR, ${r.allSamples.length - 1} pending</div>`;
      } else if (r.codes.length === 0) {
        html += `<div style="color:#bbb;margin-bottom:10px">— No IR data</div>`;
      }
      // Column headers
      html += `<div style="display:grid;grid-template-columns:110px 70px 80px 60px 70px;gap:8px;padding:5px 0;font-weight:600;color:#888;border-bottom:2px solid #ddd;margin-bottom:4px">
        <span>Sample</span><span>IR</span><span>χ (KLY5)</span><span>W</span><span>ρ (g/cm³)</span>
      </div>`;
      r.allSamples.forEach(c => {
        const s = sampleLookup(c);
        if (!s) return;
        const chi = s.lc != null ? s.lc.toFixed(3) : '—';
        const w = s.pW != null ? 'W'+s.pW : '—';
        const dens = DENSITY_MAP[c] != null ? DENSITY_MAP[c].toFixed(3) : '—';
        let irLabel, irColor;
        if (IR_DATA[c]) { irLabel = '✓'; irColor = '#27ae60'; }
        else if (s.ir === 'disp') { irLabel = 'pending'; irColor = '#e67e22'; }
        else { irLabel = '—'; irColor = '#bbb'; }
        html += `<div style="display:grid;grid-template-columns:110px 70px 80px 60px 70px;gap:8px;padding:4px 0;border-bottom:1px solid #f0f0f0">
          <span style="font-weight:600">${s.c}</span>
          <span style="color:${irColor}">${irLabel}</span>
          <span>${chi}</span>
          <span>${w}</span>
          <span>${dens}</span>
        </div>`;
      });
      html += `</div></td></tr>`;
    });
    html += '</tbody></table></div>';
  }

  html += '<h2 style="text-align:center;margin:32px 0 8px;font-size:15px;color:#444">KLY5 Magnetic Susceptibility by Cluster</h2>';
  html += '<p style="text-align:center;color:#888;font-size:12px;margin:0 0 12px">Horizontal bands: H (≥4.82) · L (≥4.265) · LL (&lt;4.265). Hover for details.</p>';
  html += '<div style="text-align:center;position:relative"><canvas id="kly5StripChart" style="max-width:900px;width:100%;height:auto"></canvas>';
  html += '<div id="kly5-tooltip" style="display:none;position:fixed;background:#1a2a3a;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px;pointer-events:none;z-index:999"></div></div>';

  el.innerHTML = html;
  drawAllIRSpectra();
  drawKLY5StripChart();
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
  ctx.fillText(__('chart_specimens'), 0, 0); ctx.restore();
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
    { type: 'label', text: __('chart_kly5_group'), h: 1 },
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
  ctx.fillText(__('chart_reference'), x0 + 4, y1 - 2);
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
  ctx.fillText(__('chart_w_label'), (x0 + x1) / 2, y1 + 26);
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
    { type: 'label', text: __('chart_kly5_group'), h: 1 },
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
  const xMin = 2, xMax = 21;
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
  const xTicks = [2,4,6,8,10,12,14,16,18,20];
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
  const xMin = 2, xMax = 21;
  const toX = wl => x0 + (wl - xMin) / (xMax - xMin) * (x1 - x0);
  const offset = (y1 - y0) / (rawData.length + 1);
  const used = (rawData.length - 1 + 0.8) * offset;
  const topPad = ((y1 - y0) - used) / 2;
  // Global y-range across all spectra for uniform scaling
  let yMin = Infinity, yMax = -Infinity;
  for (const item of items)
    for (const d of IR_DATA[item.code]) {
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

function toggleClusterDetail(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const show = el.style.display === 'none' || el.style.display === '';
  el.style.display = show ? 'table-row' : 'none';
  // Toggle arrow icon in the first cell
  const row = el.previousElementSibling;
  if (row && row.tagName === 'TR') {
    const arrow = row.querySelector('.toggle-arrow');
    if (arrow) arrow.textContent = show ? '▼' : '▶';
  }
}

function toggleIRCluster(key) {
  _IR_VISIBLE_CLUSTERS[key] = !_IR_VISIBLE_CLUSTERS[key];
  drawAllIRSpectra();
}

function drawAllIRSpectra(targetCanvasId, showAll) {
  const canvas = document.getElementById(targetCanvasId || 'ir-overview-chart');
  if (!canvas) return;
  const codes = Object.keys(IR_DATA);

  const groupOrder = [];
  const sampleGroup = {};
  const groupColor = _IR_CLUSTER_COLORS;

  PAIR_GROUPS.forEach(g => {
    g.falls.forEach(f => {
      const inCluster = f.samples.filter(c => IR_DATA[c]);
      if (inCluster.length >= 2) {
        const key = f.name;
        if (!groupOrder.includes(key)) groupOrder.push(key);
        inCluster.forEach(c => sampleGroup[c] = key);
      }
    });
  });

  // Sort clusters naturally (Cluster 1, Cluster 2, ...)
  groupOrder.sort((a, b) => {
    const na = parseInt(a.match(/\d+/)), nb = parseInt(b.match(/\d+/));
    return (na||0) - (nb||0);
  });

  // Build items grouped by cluster, samples in decreasing suffix order
  const items = [];
  groupOrder.forEach(key => {
    if (!showAll && !_IR_VISIBLE_CLUSTERS[key]) return;
    const members = Object.keys(sampleGroup).filter(c => sampleGroup[c] === key);
    members.sort((a, b) => {
      const na = parseInt(a.match(/\d+$/)), nb = parseInt(b.match(/\d+$/));
      return (nb||0) - (na||0);
    });
    members.forEach(c => {
      items.push({
        code: c,
        group: key,
        color: groupColor[key],
      });
    });
  });

  const W = 900;
  const LANE_H = 20, GROUP_GAP = 0, MARGIN = { top: 210, right: 110, bottom: 40, left: 85 };
  const H = MARGIN.top + MARGIN.bottom + items.length * LANE_H + 10;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = W * dpr; canvas.height = H * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);

  const x0 = MARGIN.left, y0 = MARGIN.top, x1 = W - MARGIN.right, y1 = H - MARGIN.bottom;
  const xMin = 2, xMax = 21;
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
  let lastGroup = null;
  items.forEach(item => {
    const baseY = curY + LANE_H / 2;
    ctx.fillStyle = item.color; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(item.code, x0 - 6, baseY);
    if (item.group !== lastGroup) {
      const displayGroup = item.group === 'Unpaired' ? __('ir_overview_gap') : item.group;
      const label = displayGroup.length > 18 ? displayGroup.slice(0, 17) + '\u2026' : displayGroup;
      ctx.fillStyle = item.color; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText(label, x1 + 1, baseY - 100);
      lastGroup = item.group;
    }
    curY += LANE_H;
  });

  ctx.fillStyle = '#888'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  const xTicks = [2,4,6,8,10,12,14,16,18,20];
  xTicks.forEach(t => ctx.fillText(t.toString(), toX(t), y1 + 4));
  ctx.fillStyle = '#bbb'; ctx.font = '12px sans-serif';
  ctx.fillText('Wavelength (µm)', W / 2, y1 + 24);
}

// ---------- KLY5 Strip Chart by Cluster (Pairing page / Figure 4) ----------
function drawKLY5StripChart(canvasId) {
  const canvas = document.getElementById(canvasId || 'kly5StripChart');
  if (!canvas) return;
  const tooltipId = (canvasId === 'kly5StripPaper') ? 'chart-tooltip4' : 'kly5-tooltip';
  const tooltip = document.getElementById(tooltipId);
  if (!tooltip) return;
  const W = 900, H = 520;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = W * dpr; canvas.height = H * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
  const PAD = { top: 48, bottom: 48, left: 90, right: 30 };
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;

  // Build cluster data
  const clusters = [];
  PAIR_GROUPS.forEach(pg => {
    pg.falls.forEach(f => {
      const pts = f.samples.map(code => {
        const s = sampleLookup(code);
        const lc = s ? s.lc : null;
        const d = DENSITY_MAP[code] ?? null;
        return { code, name: s ? s.n : code, lc, density: d, loc: pg.locality };
      }).filter(p => p.lc !== null && p.lc !== undefined);
      if (pts.length) clusters.push({ name: f.name, type: f.type, locality: pg.locality, tc: f.tc, samples: pts });
    });
  });
  if (!clusters.length) return;

  let yMin = Infinity, yMax = -Infinity;
  clusters.forEach(c => c.samples.forEach(p => { if (p.lc < yMin) yMin = p.lc; if (p.lc > yMax) yMax = p.lc; }));
  const yPad = (yMax - yMin) * 0.1 || 0.15;
  yMin = Math.max(3.5, yMin - yPad);
  yMax = Math.min(5.6, yMax + yPad);
  const xStep = plotW / (clusters.length + 1);
  const xPos = i => PAD.left + xStep * (i + 1);
  const yPos = v => PAD.top + plotH - (v - yMin) / (yMax - yMin) * plotH;

  ctx.textBaseline = 'bottom';
  ctx.font = '12px system-ui, sans-serif';

  // Horizontal bands (H / L / LL)
  const bands = [
    { lo: 4.82, hi: yMax, label: 'H', color: '#27ae60' },
    { lo: 4.265, hi: 4.82, label: 'L', color: '#e67e22' },
    { lo: yMin, hi: 4.265, label: 'LL', color: '#b8860b' },
  ];
  bands.forEach(b => {
    const y0 = yPos(Math.min(b.hi, yMax));
    const y1 = yPos(Math.max(b.lo, yMin));
    ctx.fillStyle = b.color + '18';
    ctx.fillRect(PAD.left, y1, plotW, y0 - y1);
    ctx.strokeStyle = b.color + '40';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 4]);
    ctx.beginPath();
    ctx.moveTo(PAD.left + 8, yPos(b.lo));
    ctx.lineTo(PAD.left + plotW - 8, yPos(b.lo));
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = b.color + '80';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(b.label, PAD.left + plotW - 16, yPos(b.lo));
  });

  // Y axis ticks
  ctx.strokeStyle = '#ccc';
  ctx.lineWidth = 1;
  const yTicks = 6;
  for (let i = 0; i <= yTicks; i++) {
    const v = yMin + (yMax - yMin) * i / yTicks;
    const y = yPos(v);
    ctx.fillStyle = '#888';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.font = '11px sans-serif';
    ctx.fillText(v.toFixed(3), PAD.left - 8, y);
    ctx.strokeStyle = '#eee';
    ctx.beginPath();
    ctx.moveTo(PAD.left, y);
    ctx.lineTo(PAD.left + plotW, y);
    ctx.stroke();
  }
  ctx.fillStyle = '#444';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.font = '13px sans-serif';
  ctx.fillText('log χ (KLY5)', PAD.left - 40, 10);

  // X axis: cluster labels
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.font = 'bold 12px sans-serif';
  clusters.forEach((c, i) => {
    const x = xPos(i);
    ctx.fillStyle = c.tc;
    ctx.fillText(c.name, x, PAD.top + plotH + 6);
    ctx.fillStyle = '#999';
    ctx.font = '10px sans-serif';
    ctx.fillText(c.locality.substring(0, 4) + '.', x, PAD.top + plotH + 22);
    ctx.font = 'bold 12px sans-serif';
  });

  // Data points
  const points = [];
  clusters.forEach((c, i) => {
    const x = xPos(i);
    c.samples.forEach(p => {
      const y = yPos(p.lc);
      points.push({ x, y, r: 8, ...p, cluster: c.name, color: c.tc });
      ctx.beginPath();
      ctx.arc(x, y, 7, 0, Math.PI * 2);
      ctx.fillStyle = c.tc;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  });

  // Hover
  canvas.onmousemove = function (e) {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (W / rect.width);
    const my = (e.clientY - rect.top) * (H / rect.height);
    let found = null;
    for (const p of points) {
      const dx = mx - p.x, dy = my - p.y;
      if (dx * dx + dy * dy < p.r * p.r) { found = p; break; }
    }
    if (found) {
      const d = found.density !== null ? found.density.toFixed(3) : '\u2014';
      const lc = found.lc.toFixed(3);
      const grp = kly5Group(found.lc);
      tooltip.innerHTML = '<b>' + found.code + '</b> ' + found.name + '<br>log \u03c7 = ' + lc + ' (' + grp + ')<br>\u03c1 = ' + d + ' g/cm\u00b3<br>' + found.cluster + ' \u00b7 ' + found.locality;
      tooltip.style.display = 'block';
      tooltip.style.left = (e.clientX + 14) + 'px';
      tooltip.style.top = (e.clientY - 10) + 'px';
      canvas.style.cursor = 'pointer';
    } else {
      tooltip.style.display = 'none';
      canvas.style.cursor = 'default';
    }
  };
  canvas.onmouseleave = function () { tooltip.style.display = 'none'; };
}

// ---------- Interactive IR Spectra (Samples page) ----------
function renderInteractiveIRSpectra() {
  const container = document.getElementById('interactive-ir-container');
  if (!container) return;
  const codes = Object.keys(IR_DATA);
  if (!codes.length) { container.innerHTML = '<p style="color:#888;text-align:center;padding:20px 0">No IR data available</p>'; return; }
  if (_selectedIRSamples.size === 0) _selectedIRSamples.add(codes[0]);
  let html = '<div style="display:flex;flex-wrap:wrap;gap:4px 12px;max-height:140px;overflow-y:auto;margin-bottom:12px;padding:8px;background:#fafafa;border-radius:4px;font-size:12px">';
  codes.forEach(c => {
    const checked = _selectedIRSamples.has(c) ? 'checked' : '';
    html += `<label style="white-space:nowrap;cursor:pointer"><input type="checkbox" ${checked} onchange="toggleInteractiveIR('${c}')"> ${c}</label>`;
  });
  html += '</div>';
  html += '<canvas id="interactive-ir-canvas" style="width:100%;max-width:800px;height:350px;display:block;margin:0 auto"></canvas>';
  container.innerHTML = html;
  drawInteractiveIRSpectra();
}
function toggleInteractiveIR(code) {
  if (_selectedIRSamples.has(code)) _selectedIRSamples.delete(code); else _selectedIRSamples.add(code);
  drawInteractiveIRSpectra();
}
function drawInteractiveIRSpectra() {
  const canvas = document.getElementById('interactive-ir-canvas');
  if (!canvas) return;
  const codes = [..._selectedIRSamples].filter(c => IR_DATA[c]);
  if (!codes.length) return;
  const rect = canvas.getBoundingClientRect();
  const W = rect.width || 800, H = 350;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = W * dpr; canvas.height = H * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
  const MARGIN = { top: 20, right: 20, bottom: 30, left: 55 };
  const x0 = MARGIN.left, y0 = MARGIN.top, x1 = W - MARGIN.right, y1 = H - MARGIN.bottom;
  const xMin = 2, xMax = 21;
  const toX = wl => x0 + (wl - xMin) / (xMax - xMin) * (x1 - x0);
  let yMin = Infinity, yMax = -Infinity;
  for (const code of codes)
    for (const d of IR_DATA[code]) {
      const wl = 10000 / d[0];
      if (wl >= xMin && wl <= xMax) { if (d[1] < yMin) yMin = d[1]; if (d[1] > yMax) yMax = d[1]; }
    }
  const yPad = (yMax - yMin) * 0.05 || 0.01;
  yMin -= yPad; yMax += yPad;
  const toY = y => y1 - (y - yMin) / (yMax - yMin) * (y1 - y0);
  ctx.strokeStyle = '#f0f0f0'; ctx.lineWidth = 0.5;
  for (let v = 0; v <= 1; v += 0.25) { const yy = y0 + v * (y1 - y0); ctx.beginPath(); ctx.moveTo(x0, yy); ctx.lineTo(x1, yy); ctx.stroke(); }
  ctx.strokeStyle = '#ddd'; ctx.setLineDash([3,3]); ctx.beginPath(); ctx.moveTo(x1, y0); ctx.lineTo(x1, y1); ctx.stroke(); ctx.setLineDash([]);
  const PALETTE = ['#e74c3c','#3498db','#2ecc71','#f39c12','#9b59b6','#1abc9c','#e67e22','#2c3e50','#c0392b','#2980b9','#27ae60','#8e44ad','#16a085','#d35400','#7f8c8d','#f1c40f','#00bcd4','#ff5722','#795548','#607d8b','#e91e63','#3f51b5','#009688','#ff9800','#673ab7','#03a9f4','#8bc34a','#ffeb3b'];
  codes.forEach((code, i) => {
    const color = PALETTE[i % PALETTE.length];
    ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.beginPath(); let started = false;
    for (const d of IR_DATA[code]) {
      const wl = 10000 / d[0]; if (wl < xMin || wl > xMax) continue;
      const x = toX(wl), y = toY(d[1]);
      if (!started) { ctx.moveTo(x, y); started = true; } else ctx.lineTo(x, y);
    }
    ctx.stroke();
  });
  ctx.fillStyle = '#888'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  [2,4,6,8,10,12,14,16,18,20].forEach(wl => ctx.fillText(wl.toString(), toX(wl), y1 + 4));
  ctx.fillStyle = '#bbb'; ctx.font = '9px sans-serif';
  ctx.fillText('Wavelength (µm)', x0 + (x1 - x0) / 2, y1 + 18);
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#888'; ctx.font = '9px sans-serif';
  const nYTicks = 4;
  for (let i = 0; i <= nYTicks; i++) { const v = yMin + (yMax - yMin) * i / nYTicks; ctx.fillText(v.toFixed(2), x0 - 6, y0 + (y1 - y0) * (1 - i / nYTicks)); }
  ctx.save(); ctx.translate(14, y0 + (y1 - y0) / 2); ctx.rotate(-Math.PI / 2); ctx.textAlign = 'center'; ctx.fillStyle = '#bbb'; ctx.font = '9px sans-serif'; ctx.fillText('Absorbance', 0, 0); ctx.restore();
  const lx = x1 - 130, ly = y0 + 10;
  const legW = 120, legH = codes.length * 16 + 10;
  if (legH + ly < y1 - 10) {
    ctx.fillStyle = 'rgba(255,255,255,0.88)'; ctx.fillRect(lx - 6, ly - 4, legW, legH);
    ctx.strokeStyle = '#ddd'; ctx.lineWidth = 0.5; ctx.strokeRect(lx - 6, ly - 4, legW, legH);
    codes.forEach((code, i) => {
      ctx.strokeStyle = PALETTE[i % PALETTE.length]; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(lx, ly + i * 16 + 4); ctx.lineTo(lx + 14, ly + i * 16 + 4); ctx.stroke();
      ctx.fillStyle = '#333'; ctx.font = '10px sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText(code, lx + 18, ly + i * 16 + 4);
    });
  }
}

