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
      eyebrow:     'Expertise',
      title_1:     'What I ',
      title_2:     'work with',
      tech_title:  'Technical Skills',
      soft_title:  'Professional Skills',
      tags_label:  'Also familiar with:',
    },
    background: {
      eyebrow:    'Career',
      title_1:    'My ',
      title_2:    'Background',
      tab_work:   'Work Experience',
      tab_edu:    'Education',
    },
    highlights: {
      eyebrow:    'Portfolio',
      title_1:    'Areas of ',
      title_2:    'Work',
      phd_title:  'PhD Studies',
      phd_desc:   'Doctoral research on irrigation optimization in fruit trees, focusing on hydric stress detection.',
      res_title:  'Research Projects',
      res_desc:   'Ongoing scientific work within precision agriculture and smart farming initiatives.',
      fut_title:  'Future Projects',
      fut_desc:   'Upcoming research lines and development projects in the agri-tech field.',
      dev_title:  'Own Developments',
      dev_desc:   'Open-source tools and apps — from thermal camera calibration to GIS web apps.',
      awa_title:  'Awards',
      awa_desc:   'National and international recognition for innovation in agri-tech research.',
      pub_title:  'Publications',
      pub_desc:   'Peer-reviewed journal articles and conference papers on precision irrigation.',
      explore:    'Explore →',
    },
    gallery: {
      eyebrow: 'Visual Work',
      title_1: 'Field ',
      title_2: 'Gallery',
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
      eyebrow:     'Conocimientos',
      title_1:     'Con qué ',
      title_2:     'trabajo',
      tech_title:  'Habilidades Técnicas',
      soft_title:  'Habilidades Profesionales',
      tags_label:  'También conocedor de:',
    },
    background: {
      eyebrow:    'Carrera',
      title_1:    'Mi ',
      title_2:    'Trayectoria',
      tab_work:   'Experiencia Laboral',
      tab_edu:    'Educación',
    },
    highlights: {
      eyebrow:    'Portfolio',
      title_1:    'Áreas de ',
      title_2:    'Trabajo',
      phd_title:  'Doctorado',
      phd_desc:   'Investigación doctoral sobre optimización del riego en frutales y detección de estrés hídrico.',
      res_title:  'Proyectos de Investigación',
      res_desc:   'Trabajo científico activo en agricultura de precisión y agricultura inteligente.',
      fut_title:  'Proyectos Futuros',
      fut_desc:   'Próximas líneas de investigación y proyectos de desarrollo en agri-tech.',
      dev_title:  'Desarrollos Propios',
      dev_desc:   'Herramientas y apps open-source: desde calibración de cámaras térmicas hasta apps GIS.',
      awa_title:  'Premios',
      awa_desc:   'Reconocimientos nacionales e internacionales por innovación en investigación agri-tech.',
      pub_title:  'Publicaciones',
      pub_desc:   'Artículos revisados por pares y ponencias sobre riego de precisión.',
      explore:    'Explorar →',
    },
    gallery: {
      eyebrow: 'Trabajo Visual',
      title_1: 'Galería ',
      title_2: 'de Campo',
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

/* ---- Skill bars animation ---- */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');
  if (!bars.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width;
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => obs.observe(bar));
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
  initSkillBars();
  initTimelineTabs();
  initContactForm();
  initBackToTop();
  initLangToggle();
  runTypewriter();
});
