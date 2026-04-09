/* ============================================
   RAFAEL OROZCO — PORTFOLIO
   script.js v2.0
   ============================================ */

/* ---- i18n Translations ---- */
const translations = {
  en: {
    nav: {
      skills:       'Skills',
      background:   'Background',
      projects:     'Projects',
      development:  'Development',
      awards:       'Awards',
      publications: 'Publications',
      contact:      'Contact',
    },
    hero: {
      status:   'Available for collaboration',
      subtitle: 'Agricultural Engineer & ',
      typed: [
        'Co-Founder of ASYMETREE',
        'Data Scientist',
        'Remote Sensing Expert',
        'Irrigation Researcher',
        'Python Developer',
        'UAV Specialist',
      ],
      desc: 'Specializing in precision agriculture, irrigation optimization, and remote sensing technologies for sustainable and efficient farming.',
      cta_work:    'View My Work',
      cta_contact: 'Get In Touch',
      stat_papers: 'Publications',
      stat_years:  'Years Research',
    },
    skills: {
      eyebrow:      'Expertise',
      title_1:      'What I ',
      title_2:      'work with',
      agro_title:   'Agronomy & Precision Irrigation',
      agro_desc:    'Water resource optimization in woody crops, focusing on tree behavior variability under hydric stress. Field trials, technical consulting, and knowledge transfer to the sector through ASYMETREE.',
      sensing_title:'Remote Sensing & Field Sensors',
      sensing_desc: 'Capture and processing of information using thermal sensors, LiDAR, and drones. Deployment of IoT sensor networks and micrometeorological stations for continuous field monitoring.',
      data_title:   'Data Processing & Spatial Analysis',
      data_desc:    'Processing of agronomic and geospatial data using tools like Python and geographic information systems. Time series, image analysis, and integration of heterogeneous data sources.',
      dev_title:    'Software Development',
      dev_desc:     'Building web applications and desktop tools for both research and business management. From field data visualization to digital solutions tailored for small businesses.',
      ai_title:     'Artificial Intelligence',
      ai_desc:      'AI as a cross-cutting tool: data analysis support, code generation, workflow automation, and assistance in technical and scientific writing.',
      teach_title:  'Teaching & Communication',
      teach_desc:   'University teaching at UCO and applied programming courses for the agricultural sector. Scientific communication at conferences and in peer-reviewed publications.',
    },
    background: {
      eyebrow:    'Career',
      title_1:    'My ',
      title_2:    'Background',
      tab_work:   'Work Experience',
      tab_edu:    'Education',
      w1_date: '2024 — Present',  w1_role: 'Co-Founder & CTO',  w1_org: 'ASYMETREE — AgriTech Spinoff',
      w1_desc: 'Co-founded ASYMETREE, a technology-based company (EBT) focused on precision irrigation consulting for farmers. Uses LiDAR-derived canopy models and UAV thermography as core decision-support technologies. Backed by €20,000 in seed funding (CSIC EBTon + EIT Food TechBridge).',
      w2_date: '2023 — Present',  w2_role: 'Agronomist Engineer',  w2_org: '<a href="https://www.ias.csic.es/" target="_blank" rel="noopener">IAS</a> · <a href="https://www.csic.es/" target="_blank" rel="noopener">CSIC</a>',
      w2_desc: 'Continuation of the STIMA2 project research line — sensorization and monitoring of fruit trees for the automatic optimization of irrigation resources.',
      w3_date: '2023 — Present',  w3_role: 'Affiliate Professor',  w3_org: '<a href="https://www.uco.es/" target="_blank" rel="noopener">UCO</a>',
      w3_desc: 'Contributing to the Agricultural Mechanization Machinery course (Bachelor\'s in Agricultural Engineering & Oenology), focusing on advanced sensing technologies.',
      w4_date: '2021 — Present',  w4_role: 'Python Programming Instructor',  w4_org: 'Private & Public Sector',
      w4_desc: 'Leading specialized courses on Python\'s role in agronomic data analysis and GIS integration for private and public companies.',
      w5_role: 'Technical Agronomist Engineer',
      w5_desc: 'Agronomy Department at AgroPhenoLab working on the STIMA2 project (High-resolution smart irrigation in almond tree).',
      w6_role: 'Sales Technician',
      w6_desc: 'Worked as a salesperson in the nature section during the last year of my degree.',
      e1_date: '2023 — Present',  e1_role: 'PhD Studies',
      e1_desc: 'Research on irrigation optimization in fruit trees, focusing on the variability of behavior under hydric stress. Supervised at AgroPhenoLab.',
      e2_role: 'Agronomic Engineering Master',  e2_org: '<a href="http://www.uco.es/etsiam/" target="_blank" rel="noopener">ETSIAM</a> · UCO',
      e2_desc: 'Specialization in Rural Environment Technology, Agro-food Industries, and Agricultural Production Technology. Graduated with MH distinction.',
      e3_role: 'Agri-food & Rural Environment Engineering',  e3_org: '<a href="http://www.uco.es/etsiam/" target="_blank" rel="noopener">ETSIAM</a> · UCO',
      e3_desc: 'Specialization in Agricultural Operations, including animal and plant production technologies.',
    },
    highlights: {
      eyebrow:    'Portfolio',
      title_1:    'Areas of ',
      title_2:    'Work',
      phd_title:  'PhD Studies',
      phd_desc:   'Doctoral research on irrigation optimization in fruit trees, focusing on hydric stress detection.',
      res_title:  'Research Projects',
      res_desc:   'Ongoing scientific work within precision agriculture and smart farming initiatives.',
      dev_title:  'Own Developments',
      dev_desc:   'Open-source tools and apps — from thermal camera calibration to GIS web apps.',
      awa_title:  'Awards',
      awa_desc:   'National and international recognition for innovation in agri-tech research.',
      pub_title:  'Publications',
      pub_desc:   'Peer-reviewed journal articles and conference papers on precision irrigation.',
      dig_title:  'Digital Solutions',
      dig_desc:   'Custom management applications for small businesses: product control, workflows, and client management.',
      explore:    'Explore →',
    },
    gallery: {
      eyebrow: 'Visual Work',
      title_1: 'Field ',
      title_2: 'Gallery',
      g1_title: 'OrthoImagery',    g1_sub: 'UAV Mapping',
      g2_title: 'Aerial LiDAR',    g2_sub: '3D Canopy Models',
      g3_title: 'Thermal Imagery',  g3_sub: 'Calibrated IR',
      g4_title: 'Stress Monitoring', g4_sub: 'IoT Field Sensors',
      g5_title: 'Micro-Meteorology', g5_sub: 'Farm-level Stations',
      g6_title: 'Terrestrial LiDAR', g6_sub: 'Full Canopy Modelling',
    },
    contact: {
      eyebrow:   'Get In Touch',
      title_1:   "Let's ",
      title_2:   'Connect',
      tagline:   "Have a project in mind or want to collaborate? I'd love to hear from you.",
      loc_label: 'Location',
      loc_val:   'Córdoba, Spain',
      tel_label: 'Phone',
      mail_label:'Email',
      name_label:  'Name',
      email_label: 'Email',
      msg_label:   'Message',
      name_ph:     'Rafael García',
      email_ph:    'hello@example.com',
      msg_ph:      'Tell me about your project…',
      send:        'Send Message',
      success:     '✓  Message sent — I will get back to you soon!',
    },
    footer: {
      copy: '© 2025 Rafael Orozco Morán · Built with ♥ in Córdoba',
    },

    /* ---- Sub-pages ---- */
    pub: {
      back:     '← Back to home',
      eyebrow:  'Research',
      title:    'Publications',
      subtitle: 'Peer-reviewed articles, conference papers and technical reports.',
      learn:    'Read paper →',
    },
    awards: {
      back:     '← Back to home',
      eyebrow:  'Recognition',
      title:    'Awards',
      subtitle: 'Honours and prizes received for innovation and research.',
      link:     'View details →',
    },
    phd: {
      back:     '← Back to home',
      eyebrow:  'Research',
      title:    'PhD Studies',
      subtitle: 'Doctoral research at IAS-CSIC & UCO on precision irrigation in fruit trees.',
      inst:     'Institution',
      period:   'Period',
      status:   'Status',
      topic:    'Research Topic',
      active:   'Active',
      link:     'AgroPhenoLab profile →',
    },
    thesis: {
      back:     '← Back to home',
      eyebrow:  'Master Thesis',
      title:    'PyRADTEMCam 1.0',
      subtitle: 'Radiometric calibration of thermal infrared cameras on UAVs for agronomic applications.',
      link:     'View on GitHub →',
    },
    dev: {
      back:     '← Back to home',
      eyebrow:  'Development',
      title:    'Own Developments',
      subtitle: 'Tools and applications I built to solve real problems in the field.',
      check:    'Check it out →',
    },
    digsol: {
      back:     '← Back to home',
      eyebrow:  'Services',
      title:    'Digital Solutions',
      subtitle: 'Custom management tools built around how small businesses actually work — not the other way around.',
      intro:    'Many small businesses don\'t need — or want — complex ERP systems. Their workflows are established, personal, and effective. What they need is a digital layer that respects that way of working while bringing structure, data, and scalability.',
      approach_title: 'My approach',
      approach: 'I develop tailored management applications that fit into existing business processes rather than replacing them. The goal is to professionalize day-to-day operations without forcing a complete overhaul of how things are done.',
      result_title: 'The result',
      result:   'Businesses gain visibility over their data, can scale their operations, and maintain the essence of how they work.',
      area1_title: 'Product & inventory control',
      area1_desc: 'Tracking stock, movements and availability in a way that mirrors how the business already manages it — just digitally.',
      area2_title: 'Client management',
      area2_desc: 'Organizing client information, history and communications without the overhead of heavy CRM platforms.',
      area3_title: 'Workflow automation',
      area3_desc: 'Turning repetitive manual tasks into simple automated processes adapted to each business\'s routine.',
      area4_title: 'Data & reporting',
      area4_desc: 'Giving business owners clear visibility over their numbers — sales, trends, performance — with tools they can actually use.',
      cta: 'Interested? Get in touch →',
    },
  },

  es: {
    nav: {
      skills:       'Habilidades',
      background:   'Trayectoria',
      projects:     'Proyectos',
      development:  'Desarrollo',
      awards:       'Premios',
      publications: 'Publicaciones',
      contact:      'Contacto',
    },
    hero: {
      status:   'Disponible para colaborar',
      subtitle: 'Ingeniero Agrónomo & ',
      typed: [
        'Co-Fundador de ASYMETREE',
        'Científico de Datos',
        'Experto en Teledetección',
        'Investigador de Riego',
        'Desarrollador Python',
        'Especialista en UAV',
      ],
      desc: 'Especializado en agricultura de precisión, optimización del riego y tecnologías de teledetección para una agricultura sostenible.',
      cta_work:    'Ver Mi Trabajo',
      cta_contact: 'Contactar',
      stat_papers: 'Publicaciones',
      stat_years:  'Años Investigando',
    },
    skills: {
      eyebrow:      'Conocimientos',
      title_1:      'Con qué ',
      title_2:      'trabajo',
      agro_title:   'Agronomía y Riego de Precisión',
      agro_desc:    'Optimización de recursos hídricos en cultivos leñosos, con enfoque en la variabilidad del comportamiento del árbol bajo estrés. Ensayos de campo, consultoría técnica y transferencia al sector a través de ASYMETREE.',
      sensing_title:'Teledetección y Sensorización',
      sensing_desc: 'Captura y procesado de información con sensores térmicos, LiDAR y drones. Despliegue de redes de sensores IoT y estaciones micrometeorológicas para monitorización continua en parcela.',
      data_title:   'Procesamiento de Datos y Análisis Espacial',
      data_desc:    'Tratamiento de datos agronómicos y geoespaciales con herramientas como Python y sistemas de información geográfica. Series temporales, análisis de imágenes e integración de fuentes de datos heterogéneas.',
      dev_title:    'Desarrollo de Software',
      dev_desc:     'Creación de aplicaciones web y herramientas de escritorio orientadas tanto a la investigación como a la gestión. Desde visualización de datos de campo hasta soluciones digitales para pequeños negocios.',
      ai_title:     'Inteligencia Artificial',
      ai_desc:      'Uso de IA como herramienta transversal: asistencia en análisis de datos, generación de código, automatización de flujos de trabajo y apoyo en redacción técnica y científica.',
      teach_title:  'Formación y Comunicación',
      teach_desc:   'Docencia universitaria en la UCO y cursos de programación aplicada a la agronomía para el sector público y privado. Comunicación científica en congresos y publicaciones.',
    },
    background: {
      eyebrow:    'Carrera',
      title_1:    'Mi ',
      title_2:    'Trayectoria',
      tab_work:   'Experiencia Laboral',
      tab_edu:    'Educación',
      w1_date: '2024 — Presente',  w1_role: 'Co-Fundador y CTO',  w1_org: 'ASYMETREE — Spinoff AgriTech',
      w1_desc: 'Co-fundador de ASYMETREE, empresa de base tecnológica (EBT) especializada en consultoría de riego de precisión. Utiliza modelos de copa derivados de LiDAR y termografía UAV como tecnologías de apoyo a la decisión. Respaldada con 20.000 € en financiación semilla (CSIC EBTon + EIT Food TechBridge).',
      w2_date: '2023 — Presente',  w2_role: 'Ingeniero Agrónomo',  w2_org: '<a href="https://www.ias.csic.es/" target="_blank" rel="noopener">IAS</a> · <a href="https://www.csic.es/" target="_blank" rel="noopener">CSIC</a>',
      w2_desc: 'Continuación de la línea de investigación del proyecto STIMA2 — sensorización y monitorización de frutales para la optimización automática de recursos de riego.',
      w3_date: '2023 — Presente',  w3_role: 'Profesor Afiliado',  w3_org: '<a href="https://www.uco.es/" target="_blank" rel="noopener">UCO</a>',
      w3_desc: 'Contribución a la asignatura de Maquinaria y Mecanización Agraria (Grado en Ingeniería Agroalimentaria y del Medio Rural), con enfoque en tecnologías avanzadas de sensorización.',
      w4_date: '2021 — Presente',  w4_role: 'Instructor de Programación Python',  w4_org: 'Sector Público y Privado',
      w4_desc: 'Impartición de cursos especializados sobre el uso de Python en análisis de datos agronómicos e integración con SIG para empresas públicas y privadas.',
      w5_role: 'Ingeniero Agrónomo Técnico',
      w5_desc: 'Departamento de Agronomía en AgroPhenoLab, trabajando en el proyecto STIMA2 (Riego inteligente de alta resolución en almendro).',
      w6_role: 'Técnico de Ventas',
      w6_desc: 'Vendedor en la sección de naturaleza durante el último año de carrera.',
      e1_date: '2023 — Presente',  e1_role: 'Estudios de Doctorado',
      e1_desc: 'Investigación sobre optimización del riego en frutales, centrada en la variabilidad del comportamiento bajo estrés hídrico. Supervisado en AgroPhenoLab.',
      e2_role: 'Máster en Ingeniería Agronómica',  e2_org: '<a href="http://www.uco.es/etsiam/" target="_blank" rel="noopener">ETSIAM</a> · UCO',
      e2_desc: 'Especialización en Tecnología del Medio Rural, Industrias Agroalimentarias y Tecnología de la Producción Agrícola. Graduado con distinción MH.',
      e3_role: 'Ingeniería Agroalimentaria y del Medio Rural',  e3_org: '<a href="http://www.uco.es/etsiam/" target="_blank" rel="noopener">ETSIAM</a> · UCO',
      e3_desc: 'Especialización en Explotaciones Agropecuarias, incluyendo tecnologías de producción animal y vegetal.',
    },
    highlights: {
      eyebrow:    'Portfolio',
      title_1:    'Áreas de ',
      title_2:    'Trabajo',
      phd_title:  'Doctorado',
      phd_desc:   'Investigación doctoral sobre optimización del riego en frutales y detección de estrés hídrico.',
      res_title:  'Proyectos de Investigación',
      res_desc:   'Trabajo científico activo en agricultura de precisión y agricultura inteligente.',
      dev_title:  'Desarrollos Propios',
      dev_desc:   'Herramientas y apps open-source: desde calibración de cámaras térmicas hasta apps GIS.',
      awa_title:  'Premios',
      awa_desc:   'Reconocimientos nacionales e internacionales por innovación en investigación agri-tech.',
      pub_title:  'Publicaciones',
      pub_desc:   'Artículos revisados por pares y ponencias sobre riego de precisión.',
      dig_title:  'Soluciones Digitales',
      dig_desc:   'Aplicaciones de gestión a medida para pequeños negocios: control de productos, flujos de trabajo y gestión de clientes.',
      explore:    'Explorar →',
    },
    gallery: {
      eyebrow: 'Trabajo Visual',
      title_1: 'Galería ',
      title_2: 'de Campo',
      g1_title: 'Ortoimagen',        g1_sub: 'Cartografía UAV',
      g2_title: 'LiDAR Aéreo',       g2_sub: 'Modelos 3D de Copa',
      g3_title: 'Imagen Térmica',     g3_sub: 'IR Calibrado',
      g4_title: 'Monitorización de Estrés', g4_sub: 'Sensores IoT de Campo',
      g5_title: 'Micrometeorología',  g5_sub: 'Estaciones de Parcela',
      g6_title: 'LiDAR Terrestre',    g6_sub: 'Modelado Completo de Copa',
    },
    contact: {
      eyebrow:   'Ponte en Contacto',
      title_1:   'Hablemos',
      title_2:   '',
      tagline:   '¿Tienes un proyecto en mente o quieres colaborar? Estaré encantado de escucharte.',
      loc_label: 'Ubicación',
      loc_val:   'Córdoba, España',
      tel_label: 'Teléfono',
      mail_label:'Email',
      name_label:  'Nombre',
      email_label: 'Correo electrónico',
      msg_label:   'Mensaje',
      name_ph:     'Rafael García',
      email_ph:    'hola@ejemplo.com',
      msg_ph:      'Cuéntame sobre tu proyecto…',
      send:        'Enviar mensaje',
      success:     '✓  ¡Mensaje enviado! Te responderé pronto.',
    },
    footer: {
      copy: '© 2025 Rafael Orozco Morán · Hecho con ♥ en Córdoba',
    },

    /* ---- Sub-pages ---- */
    pub: {
      back:     '← Volver al inicio',
      eyebrow:  'Investigación',
      title:    'Publicaciones',
      subtitle: 'Artículos revisados por pares, ponencias y reportes técnicos.',
      learn:    'Leer artículo →',
    },
    awards: {
      back:     '← Volver al inicio',
      eyebrow:  'Reconocimientos',
      title:    'Premios',
      subtitle: 'Honores y premios por innovación e investigación.',
      link:     'Ver detalles →',
    },
    phd: {
      back:     '← Volver al inicio',
      eyebrow:  'Investigación',
      title:    'Estudios de Doctorado',
      subtitle: 'Investigación doctoral en IAS-CSIC & UCO sobre riego de precisión en frutales.',
      inst:     'Institución',
      period:   'Período',
      status:   'Estado',
      topic:    'Línea de Investigación',
      active:   'Activo',
      link:     'Perfil AgroPhenoLab →',
    },
    thesis: {
      back:     '← Volver al inicio',
      eyebrow:  'Trabajo Fin de Máster',
      title:    'PyRADTEMCam 1.0',
      subtitle: 'Calibración radiométrica de cámaras infrarrojas térmicas en UAVs para aplicaciones agronómicas.',
      link:     'Ver en GitHub →',
    },
    dev: {
      back:     '← Volver al inicio',
      eyebrow:  'Desarrollo',
      title:    'Desarrollos Propios',
      subtitle: 'Herramientas y aplicaciones construidas para resolver problemas reales en el campo.',
      check:    'Ver proyecto →',
    },
    digsol: {
      back:     '← Volver al inicio',
      eyebrow:  'Servicios',
      title:    'Soluciones Digitales',
      subtitle: 'Herramientas de gestión a medida, diseñadas en torno a la forma real de trabajo de cada negocio — no al revés.',
      intro:    'Muchos pequeños negocios no necesitan — ni quieren — sistemas ERP complejos. Sus flujos de trabajo están establecidos, son personales y funcionan. Lo que necesitan es una capa digital que respete esa forma de trabajar y al mismo tiempo aporte estructura, datos y escalabilidad.',
      approach_title: 'Mi enfoque',
      approach: 'Desarrollo aplicaciones de gestión adaptadas que se integran en los procesos existentes del negocio en lugar de sustituirlos. El objetivo es profesionalizar las operaciones del día a día sin forzar un cambio completo en la forma de hacer las cosas.',
      result_title: 'El resultado',
      result:   'Los negocios ganan visibilidad sobre sus datos, pueden escalar sus operaciones y mantienen la esencia de cómo trabajan.',
      area1_title: 'Control de productos e inventario',
      area1_desc: 'Seguimiento de stock, movimientos y disponibilidad de forma fiel a cómo el negocio ya lo gestiona — pero en digital.',
      area2_title: 'Gestión de clientes',
      area2_desc: 'Organización de información, historial y comunicaciones con clientes sin la complejidad de plataformas CRM pesadas.',
      area3_title: 'Automatización de flujos de trabajo',
      area3_desc: 'Convertir tareas manuales repetitivas en procesos automáticos sencillos, adaptados a la rutina de cada negocio.',
      area4_title: 'Datos e informes',
      area4_desc: 'Dar a los propietarios visibilidad clara sobre sus números — ventas, tendencias, rendimiento — con herramientas que realmente puedan usar.',
      cta: '¿Te interesa? Contacta conmigo →',
    },
  },
};

/* ---- State ---- */
let currentLang = localStorage.getItem('lang') || 'en';
let typewriterIndex = 0;
let typewriterCharIndex = 0;
let typewriterDeleting = false;
let typewriterTimeout = null;

/* ---- Helper: get nested translation key ---- */
function t(path) {
  const keys = path.split('.');
  let obj = translations[currentLang];
  for (const k of keys) {
    if (obj == null) return path;
    obj = obj[k];
  }
  return obj ?? path;
}

/* ---- Apply all translations ---- */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val !== key) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = t(key);
    if (val !== key) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val !== key) el.placeholder = val;
  });

  /* Update lang toggle buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  /* Update html lang attr */
  document.documentElement.lang = currentLang;

  /* Restart typewriter with new strings */
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
  typewriterIndex = 0;
  typewriterCharIndex = 0;
  typewriterDeleting = false;
  const typedEl = document.getElementById('typed-text');
  if (typedEl) { typedEl.textContent = ''; runTypewriter(); }
}

/* ---- Language toggle ---- */
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations();
}

/* ---- Typewriter ---- */
function runTypewriter() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const strings = t('hero.typed');
  if (!Array.isArray(strings) || strings.length === 0) return;

  const current = strings[typewriterIndex % strings.length];
  const speed = typewriterDeleting ? 55 : 110;
  const pause = 2200;

  if (!typewriterDeleting) {
    el.textContent = current.substring(0, typewriterCharIndex + 1);
    typewriterCharIndex++;
    if (typewriterCharIndex === current.length) {
      typewriterTimeout = setTimeout(() => {
        typewriterDeleting = true;
        runTypewriter();
      }, pause);
      return;
    }
  } else {
    el.textContent = current.substring(0, typewriterCharIndex - 1);
    typewriterCharIndex--;
    if (typewriterCharIndex === 0) {
      typewriterDeleting = false;
      typewriterIndex++;
    }
  }
  typewriterTimeout = setTimeout(runTypewriter, speed);
}

/* ---- Navigation scroll state ---- */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);

    /* Active section highlight */
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });

    document.querySelectorAll('.nav-menu a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });

    /* Back to top */
    const btn = document.getElementById('back-to-top');
    if (btn) btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

/* ---- Hamburger / mobile menu ---- */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('nav-mobile');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ---- Scroll reveal (IntersectionObserver) ---- */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => obs.observe(el));
}

/* ---- Timeline tabs ---- */
function initTimelineTabs() {
  document.querySelectorAll('.timeline-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;

      document.querySelectorAll('.timeline-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.timeline-panel').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ---- Contact form (Formspree) ---- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = '…';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        form.reset();
        if (success) {
          success.textContent = t('contact.success');
          success.style.display = 'block';
          setTimeout(() => { success.style.display = 'none'; }, 5000);
        }
      } else {
        throw new Error('Network error');
      }
    } catch {
      alert('Something went wrong. Please try again later.');
    } finally {
      btn.textContent = original;
      btn.disabled = false;
    }
  });
}

/* ---- Back to top ---- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---- Lang toggle buttons ---- */
function initLangToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  initNav();
  initHamburger();
  initScrollReveal();
  initTimelineTabs();
  initContactForm();
  initBackToTop();
  initLangToggle();
  runTypewriter();
});
