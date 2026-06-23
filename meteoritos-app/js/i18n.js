// Internationalization — English / Español
const LOCALE = {
  current: 'en',
  en: {
    // Nav
    nav_home: 'Home',
    nav_samples: 'Samples',
    nav_pairing: 'Pairing',
    nav_paper: 'Pre-print',
    nav_contact: 'Contact',
    nav_login: 'Login',
    nav_logout: 'Logout',

    // Auth modal
    auth_title: 'Login',
    auth_email: 'Email',
    auth_password: 'Password',
    auth_login_btn: 'Login',
    auth_signup_btn: 'Sign Up',
    auth_email_pass: 'Enter email and password',
    auth_pass_short: 'Password must be at least 6 characters',
    auth_check_email: 'Check your email to confirm signup!',
    auth_logged_in: 'Logged in as',
    auth_logged_out: 'Logged out',

    // Home
    home_title: 'Beatriz Levi Repository',
    home_subtitle: 'Atacama Desert Meteorite Collection · Universidad de Chile',
    home_wip: '⚠ Work in progress. This repository is being systematically organized and documented. Some samples have incomplete data (pending IR analysis, petrography, or KLY5 measurement). All entries will be progressively completed over time.',
    home_about: 'About the Repository',
    home_desc1: 'The Beatriz Levi Repository houses 49 meteorite specimens from the Atacama Desert (Catalina, El Médano, San Juan, and Los Vientos areas), all recovered during the 2019 expedition. The collection was classified using magnetic susceptibility (KLY5-A Kappabridge), infrared spectroscopy (FT-IR), Raman spectroscopy, and petrography.',
    home_desc2: 'This project was funded by a Community Grant from the Meteoritical Society (August 2025) and is housed at the Departamento de Geología, Facultad de Ciencias Físicas y Matemáticas, Universidad de Chile.',
    home_stats_specimens: 'Total Specimens',
    home_stats_kly5: 'KLY5 Measured',
    home_stats_localities: 'Localities',
    home_btn_samples: 'Browse Samples',
    home_btn_paper: 'Read Pre-print',
    home_btn_pairing: 'View Pairing Groups',

    // Samples table
    samples_title: 'Samples',
    samples_search: 'Search by code, name, locality...',
    samples_found: 'sample(s) found',
    th_code: 'Code',
    th_locality: 'Locality',
    th_class: 'Class',
    th_type: 'Type',
    th_shock: 'Shock',
    th_weathering: 'Weathering',
    th_mass: 'Mass (g)',
    th_density: 'Density (g/cm³)',
    th_logchi: 'log χ',
    th_ir: 'IR',

    // Sample detail
    back_to_samples: '&larr; Back to samples',
    tab_info: 'Info',
    tab_gallery: 'Gallery',
    tab_spectra: 'Spectra',
    sd_locality: 'Locality',
    sd_code: 'Code',
    sd_class: 'Class',
    sd_type: 'Type',
    sd_shock: 'Shock',
    sd_classifier: 'Classifier',
    sd_logchi: 'log χ (KLY5)',
    sd_weathering: 'Weathering',
    sd_ir_status: 'IR Status',
    sd_field_chi: 'Field χ (10⁻³ SI)',
    sd_density: 'Density (g/cm³)',
    sd_fragments: 'Fragments',
    sd_location: 'Location',
    sd_coordinates: 'Coordinates',
    sd_main_mass: 'Main Mass',
    sd_finder: 'Finder',
    sd_ir_done: 'Done',
    sd_ir_pending: 'Pending',
    sd_ir_no: 'No',
    sd_ir_pending_analysis: '(pending analysis)',
    sd_loading_gallery: 'Loading gallery...',
    sd_no_photos: 'No photos yet',
    sd_no_spectrum: 'No IR spectrum available for this sample',
    sd_petro_classification: 'Petrography & Classification',
    sd_classification: 'Classification',
    sd_weathering_grade: 'Weathering Grade',
    sd_mineralogy: 'Mineralogy',
    sd_matrix: 'Matrix',
    sd_chondrules: 'Chondrules',
    sd_chemical_group: 'Chemical Group',

    // Pairing
    pairing_title: 'Pairing Groups',
    pairing_desc: 'Groups of samples identified as fragments of the same meteorite fall based on magnetic susceptibility (Δχ ≤ 0.08 within same KLY5 class) and validated by bulk density consistency. Magnetic pairs with density variation exceeding 20% were rejected.',
    pairing_ir_overview: 'IR Spectra Overview',
    pairing_ir_ranking: 'IR Match Ranking (best match first)',
    pr_rank: '#',
    pr_cluster: 'Cluster',
    pr_ir_match: 'IR Match',
    pr_samples: 'Samples',
    pr_locality: 'Locality',
    pr_kly5: 'KLY5',
    pr_density: 'Density',
    pr_type: 'Type',
    pr_fragments: 'fragments',
    pr_no_ir_data: 'No IR data available',
    pr_ir_pending: 'pending',
    pr_1sample_ir: '1 sample with data',
    pr_type_label: 'Type',
    pr_delta: 'Δχ',
    pr_distance: 'Distance',

    // Contact
    contact_title: 'Contact & Loan System',
    contact_loan: 'Sample Loan Request',
    contact_loan_desc: 'The Beatriz Levi Repository is a physical meteorite collection available to the scientific community.',
    contact_loan_how: 'How to request a sample?',
    contact_loan_detail: 'Samples are available for research upon formal request to the Depto. de Geología, FCFM, U. de Chile:',
    contact_step1: 'Browse the catalog and select the samples of interest',
    contact_step2: 'Send a brief research proposal to the repository team',
    contact_step3: 'Sign a temporary loan agreement with return commitment',
    contact_step4: 'Shipping costs are borne by the requester',
    contact_project: 'Project Document',
    contact_info: 'Contact Information',
    contact_academic: 'Academic responsible',
    contact_curator: 'Repository curator',
    contact_email_btn: '✉ Send us an email',

    // Charts
    chart_kly5_group: 'KLY5 group',
    chart_petro_filled: '\u25cf petrography   \u25cb estimated',
    chart_petro_filled_short: '\u25cf petro  \u25cb est.',
    chart_mass_label: 'Mass (g)',
    chart_logchi_label: 'log \u03c7 (10\u207b\u2079 m\u00b3/kg)',
    chart_w_label: 'Weathering grade (petrographic, Wlotzka 1993)',
    chart_density_label: 'Density (g/cm\u00b3)',
    chart_specimens: 'Number of specimens',
    chart_nopetro: '(no petro)',
    chart_reference: 'Shaded: mean\u00b11\u03c3 from Rochette et al. (2003)',

    // Detail basic fields
    basic_name: 'Name',
    basic_observedFall: 'Observed Fall',
    basic_yearFound: 'Year Found',
    basic_country: 'Country',
    basic_mass: 'Mass',
    basic_pieces: 'Pieces',

    // IR spectrum
    ir_wavenumber: 'Wavenumber (cm⁻¹)',
    ir_absorbance: 'Absorbance',
    ir_wavelength: 'Wavelength (µm)',
    ir_download: '⬇ Download',
    ir_spectrum_title: 'IR Spectrum (FTIR)',
    ir_overview_gap: 'Unpaired',

    // General
    loading: 'Loading...',
    delete_confirm: 'Delete this file?',
    file_deleted: 'File deleted',
    upload_ok: 'file(s) uploaded',
    upload_error: 'error(s)',
    error_loading: 'Error loading',
  },

  es: {
    // Nav
    nav_home: 'Inicio',
    nav_samples: 'Muestras',
    nav_pairing: 'Pareo',
    nav_paper: 'Pre-print',
    nav_contact: 'Contacto',
    nav_login: 'Ingresar',
    nav_logout: 'Salir',

    // Auth modal
    auth_title: 'Iniciar sesión',
    auth_email: 'Correo',
    auth_password: 'Contraseña',
    auth_login_btn: 'Ingresar',
    auth_signup_btn: 'Registrarse',
    auth_email_pass: 'Ingresa correo y contraseña',
    auth_pass_short: 'La contraseña debe tener al menos 6 caracteres',
    auth_check_email: '¡Revisa tu correo para confirmar el registro!',
    auth_logged_in: 'Conectado como',
    auth_logged_out: 'Sesión cerrada',

    // Home
    home_title: 'Repositorio Beatriz Levi',
    home_subtitle: 'Colección de Meteoritos del Desierto de Atacama · Universidad de Chile',
    home_wip: '⚠ Trabajo en progreso. Este repositorio se está organizando y documentando sistemáticamente. Algunas muestras tienen datos incompletos (pendientes de análisis IR, petrografía o medición KLY5). Todas las entradas se completarán progresivamente.',
    home_about: 'Sobre el Repositorio',
    home_desc1: 'El Repositorio Beatriz Levi alberga 49 especímenes de meteoritos del Desierto de Atacama (sectores de Catalina, El Médano, San Juan y Los Vientos), recuperados durante la expedición de 2019. La colección fue clasificada mediante susceptibilidad magnética (KLY5-A Kappabridge), espectroscopía infrarroja (FT-IR), espectroscopía Raman y petrografía.',
    home_desc2: 'Este proyecto fue financiado por una Community Grant de la Meteoritical Society (agosto 2025) y está alojado en el Departamento de Geología, Facultad de Ciencias Físicas y Matemáticas, Universidad de Chile.',
    home_stats_specimens: 'Total de Muestras',
    home_stats_kly5: 'Medidos con KLY5',
    home_stats_localities: 'Localidades',
    home_btn_samples: 'Explorar Muestras',
    home_btn_paper: 'Leer Pre-print',
    home_btn_pairing: 'Ver Grupos de Pareo',

    // Samples table
    samples_title: 'Muestras',
    samples_search: 'Buscar por código, nombre, localidad...',
    samples_found: 'muestra(s) encontradas',
    th_code: 'Código',
    th_locality: 'Localidad',
    th_class: 'Clase',
    th_type: 'Tipo',
    th_shock: 'Shock',
    th_weathering: 'Meteorización',
    th_mass: 'Masa (g)',
    th_density: 'Densidad (g/cm³)',
    th_logchi: 'log χ',
    th_ir: 'IR',

    // Sample detail
    back_to_samples: '&larr; Volver a muestras',
    tab_info: 'Información',
    tab_gallery: 'Galería',
    tab_spectra: 'Espectros',
    sd_locality: 'Localidad',
    sd_code: 'Código',
    sd_class: 'Clase',
    sd_type: 'Tipo',
    sd_shock: 'Shock',
    sd_classifier: 'Clasificador',
    sd_logchi: 'log χ (KLY5)',
    sd_weathering: 'Meteorización',
    sd_ir_status: 'Estado IR',
    sd_field_chi: 'χ terreno (10⁻³ SI)',
    sd_density: 'Densidad (g/cm³)',
    sd_fragments: 'Fragmentos',
    sd_location: 'Ubicación',
    sd_coordinates: 'Coordenadas',
    sd_main_mass: 'Masa Principal',
    sd_finder: 'Descubridor',
    sd_ir_done: 'Completado',
    sd_ir_pending: 'Pendiente',
    sd_ir_no: 'No',
    sd_ir_pending_analysis: '(análisis pendiente)',
    sd_loading_gallery: 'Cargando galería...',
    sd_no_photos: 'Sin fotos aún',
    sd_no_spectrum: 'No hay espectro IR disponible para esta muestra',
    sd_petro_classification: 'Petrografía y Clasificación',
    sd_classification: 'Clasificación',
    sd_weathering_grade: 'Grado de Meteorización',
    sd_mineralogy: 'Mineralogía',
    sd_matrix: 'Matriz',
    sd_chondrules: 'Cóndrulos',
    sd_chemical_group: 'Grupo Químico',

    // Pairing
    pairing_title: 'Grupos de Pareo',
    pairing_desc: 'Grupos de muestras identificadas como fragmentos de una misma caída meteórica, basados en susceptibilidad magnética (Δχ ≤ 0.08 dentro de la misma clase KLY5) y validados por consistencia de densidad. Los pares magnéticos con variación de densidad superior al 20% fueron rechazados.',
    pairing_ir_overview: 'Vista General de Espectros IR',
    pairing_ir_ranking: 'Ranking de Coincidencia IR (mejor primero)',
    pr_rank: '#',
    pr_cluster: 'Cluster',
    pr_ir_match: 'Coincidencia IR',
    pr_samples: 'Muestras',
    pr_locality: 'Localidad',
    pr_kly5: 'KLY5',
    pr_density: 'Densidad',
    pr_type: 'Tipo',
    pr_fragments: 'fragmentos',
    pr_no_ir_data: 'Sin datos IR',
    pr_ir_pending: 'pendiente',
    pr_1sample_ir: '1 muestra con datos',
    pr_type_label: 'Tipo',
    pr_delta: 'Δχ',
    pr_distance: 'Distancia',

    // Contact
    contact_title: 'Contacto y Sistema de Préstamo',
    contact_loan: 'Solicitud de Préstamo de Muestras',
    contact_loan_desc: 'El Repositorio Beatriz Levi es una colección física de meteoritos disponible para la comunidad científica.',
    contact_loan_how: '¿Cómo solicitar una muestra?',
    contact_loan_detail: 'Las muestras están disponibles para investigación previa solicitud formal al Depto. de Geología, FCFM, U. de Chile:',
    contact_step1: 'Explora el catálogo y selecciona las muestras de interés',
    contact_step2: 'Envía una breve propuesta de investigación al equipo del repositorio',
    contact_step3: 'Firma un acuerdo de préstamo temporal con compromiso de devolución',
    contact_step4: 'Los costos de envío corren por cuenta del solicitante',
    contact_project: 'Documento del Proyecto',
    contact_info: 'Información de Contacto',
    contact_academic: 'Responsable académico',
    contact_curator: 'Curadora del repositorio',
    contact_email_btn: '✉ Envíanos un correo',

    // Charts
    chart_kly5_group: 'Grupo KLY5',
    chart_petro_filled: '\u25cf con petrografía   \u25cb estimado',
    chart_petro_filled_short: '\u25cf petro  \u25cb est.',
    chart_mass_label: 'Masa (g)',
    chart_logchi_label: 'log \u03c7 (10\u207b\u2079 m\u00b3/kg)',
    chart_w_label: 'Grado de meteorización (petrográfico, Wlotzka 1993)',
    chart_density_label: 'Densidad (g/cm³)',
    chart_specimens: 'Número de especímenes',
    chart_nopetro: '(sin petrografía)',
    chart_reference: 'Sombreado: media±1σ de Rochette et al. (2003)',

    // Detail basic fields
    basic_name: 'Nombre',
    basic_observedFall: 'Caída Observada',
    basic_yearFound: 'Año de Hallazgo',
    basic_country: 'País',
    basic_mass: 'Masa',
    basic_pieces: 'Fragmentos',

    // IR spectrum
    ir_wavenumber: 'Número de onda (cm⁻¹)',
    ir_absorbance: 'Absorbancia',
    ir_wavelength: 'Longitud de onda (µm)',
    ir_download: '⬇ Descargar',
    ir_spectrum_title: 'Espectro IR (FTIR)',
    ir_overview_gap: 'Sin pareo',

    // General
    loading: 'Cargando...',
    delete_confirm: '¿Eliminar este archivo?',
    file_deleted: 'Archivo eliminado',
    upload_ok: 'archivo(s) subidos',
    upload_error: 'error(es)',
    error_loading: 'Error al cargar',
  }
};

function __(key) {
  return LOCALE[LOCALE.current][key] || key;
}

function setLocale(lang) {
  if (LOCALE[lang]) {
    LOCALE.current = lang;
    localStorage.setItem('locale', lang);
    document.documentElement.lang = lang;
    updateNavLocale();
    // Re-render current page
    const activePage = document.querySelector('.page.active');
    if (activePage) {
      const pageId = activePage.id.replace('page-', '');
      if (pageId === 'home') renderHome();
      else if (pageId === 'samples') renderSamples();
      else if (pageId === 'sample') { if (currentSample) showSample(currentSample.c); }
      else if (pageId === 'pairing') renderPairing();
      else if (pageId === 'contact') renderContact();
      else if (pageId === 'paper') { renderPaperCharts(); }
    }
  }
}

function toggleLocale() {
  setLocale(LOCALE.current === 'en' ? 'es' : 'en');
}

function updateNavLocale() {
  const isEn = LOCALE.current === 'en';
  const btn = document.getElementById('locale-toggle');
  if (btn) btn.textContent = isEn ? 'ES' : 'EN';
  // Update nav link texts
  const links = {
    'home': 'nav_home',
    'samples': 'nav_samples',
    'pairing': 'nav_pairing',
    'paper': 'nav_paper',
    'contact': 'nav_contact',
  };
  Object.entries(links).forEach(([page, key]) => {
    const el = document.querySelector(`nav a[data-page="${page}"]`);
    if (el) el.textContent = __(key);
  });
  // Auth button
  const authBtn = document.getElementById('auth-btn');
  if (authBtn) {
    if (typeof currentUser !== 'undefined' && currentUser) {
      authBtn.textContent = __('nav_logout');
    } else {
      authBtn.textContent = __('nav_login');
    }
  }
  // Auth modal texts
  const modalTitle = document.getElementById('auth-modal-title');
  if (modalTitle) modalTitle.textContent = __('auth_title');
  const emailInput = document.getElementById('auth-email');
  if (emailInput) emailInput.placeholder = __('auth_email');
  const passInput = document.getElementById('auth-password');
  if (passInput) passInput.placeholder = __('auth_password');
  const loginBtn = document.getElementById('auth-modal-login-btn');
  if (loginBtn) loginBtn.textContent = __('auth_login_btn');
  const signupBtn = document.getElementById('auth-modal-signup-btn');
  if (signupBtn) signupBtn.textContent = __('auth_signup_btn');
}

// Restore saved locale
(function initLocale() {
  const saved = localStorage.getItem('locale');
  if (saved && LOCALE[saved]) {
    LOCALE.current = saved;
  }
  document.documentElement.lang = LOCALE.current;
  // Defer nav update until DOM is ready
  setTimeout(updateNavLocale, 50);
})();
