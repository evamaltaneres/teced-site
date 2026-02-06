const $ = (q, el=document) => el.querySelector(q);

const state = {
  lang: "es",
  whatsappNumber: "549TU_NUMERO", // TODO: reemplazar
  whatsappMsgES: "Hola TECED! Quiero consultar por cursos / servicio técnico. Mi consulta es:",
  whatsappMsgEN: "Hi TECED! I’d like to ask about courses / tech service. My question is:",
  moodleUrl: "https://TU-MOODLE.com" // TODO: reemplazar
};

const i18n = {
  es: {
    tagline: "Liderar, Innovar y Transformar",
    menu: "Menú",
    nav_home: "Inicio",
    nav_about: "Sobre TECED",
    nav_services: "Servicios y Cursos",
    nav_blog: "Blog",
    nav_resources: "Recursos",
    nav_testimonials: "Testimonios",
    nav_contact: "Contacto",
    wa: "WhatsApp",
    pill: "Educación + Tecnología con mirada humana",
    h1: "Transformación educativa y soluciones tecnológicas, en un mismo lugar.",
    lead: "Capacitaciones presenciales y virtuales en tu plataforma Moodle + servicio técnico de reparación y venta de PC y notebooks.",
    cta_services: "Ver servicios y cursos",
    cta_moodle: "Ir al Campus Moodle",
    badge_1: "✅ Cursos para docentes e instituciones",
    badge_2: "✅ Acompañamiento y asesoría",
    badge_3: "✅ Servicio técnico confiable",
    card_title: "¿Qué estás buscando hoy?",
    choice_courses: "Cursos\nPresenciales y virtuales",
    choice_it: "Servicio técnico\nPC y notebooks",
    choice_resources: "Recursos\nDescargables",
    choice_contact: "Contacto\nWhatsApp directo",

    about_title: "Sobre TECED",
    about_sub: "Un puente entre pedagogía, cultura digital y soluciones concretas para el día a día.",
    about_h3_1: "Nuestra misión",
    about_p_1: "Acompañar a escuelas, docentes y familias en procesos de transformación educativa con enfoque creativo, ético y situado.",
    about_li_1: "Formación docente y talleres",
    about_li_2: "Plataforma virtual Moodle propia",
    about_li_3: "Asesoría institucional y proyectos",
    about_h3_2: "También resolvemos lo técnico",
    about_p_2: "Porque la innovación no funciona con una notebook colgada del último suspiro. Reparación, optimización y venta de equipos.",
    about_li_4: "Diagnóstico y reparación",
    about_li_5: "Mantenimiento y mejoras",
    about_li_6: "Venta de PC / notebooks",

    services_title: "Servicios y Cursos",
    services_sub: "Dos líneas de trabajo, una misma idea: que todo funcione (en el aula y en la compu).",
    svc_courses_title: "Capacitaciones (Presenciales + Moodle)",
    svc_courses_p: "Cursos, talleres y trayectos formativos. Acceso a contenidos y actividades en tu campus virtual.",
    chip_1: "IA en educación",
    chip_2: "Cultura digital",
    chip_3: "Innovación pedagógica",
    chip_4: "Familias y ciudadanía",
    btn_moodle: "Entrar al Campus Moodle",
    btn_quote_courses: "Pedir propuesta",
    svc_it_title: "Servicio técnico (PC y notebooks)",
    svc_it_p: "Reparación, mantenimiento, optimización y venta de equipos. Para hogares, instituciones y público general.",
    it_li_1: "Formateo, instalación y puesta a punto",
    it_li_2: "Mejoras (SSD, RAM) y limpieza",
    it_li_3: "Diagnóstico y reparación",
    it_li_4: "Equipos reacondicionados / venta",
    btn_whatsapp: "Consultar por WhatsApp",
    btn_guides: "Ver guías",
    note_strong: "Tip:",
    note_text: "Podemos armar paquetes para escuelas: capacitación + soporte técnico + acompañamiento.",

    blog_title: "Blog",
    blog_sub: "Ideas, recursos y mirada situada sobre educación y tecnología.",
    post1_title: "IA en la escuela: potenciales y límites",
    post1_desc: "Una guía para pensar la IA sin magia ni pánico moral.",
    post2_title: "Cultura digital y ciudadanía",
    post2_desc: "Convivencia, redes y el desafío de enseñar a habitar internet.",
    post3_title: "Checklist técnico para escuelas",
    post3_desc: "Lo mínimo para que el laboratorio no sea un museo de PCs tristes.",
    read_more: "Leer más",
    blog_note: "(Cuando quieras, lo convierto en blog real “sin sufrimiento” con un generador estático o CMS liviano.)",

    resources_title: "Recursos descargables",
    resources_sub: "Materiales para docentes, directivos y familias.",
    res1_title: "Plantilla de planificación",
    res1_desc: "Modelo editable para proyectos con tecnología.",
    res2_title: "Rúbrica de proyectos",
    res2_desc: "Criterios simples para evaluar aprendizajes.",
    res3_title: "Guía rápida de cuidado digital",
    res3_desc: "Recomendaciones para familias y estudiantes.",
    download: "Descargar",

    testimonials_title: "Testimonios",
    testimonials_sub: "Lo que dicen quienes ya trabajaron con TECED.",
    t1: "“Una capacitación clara, práctica y con mirada ética. Nos ayudó a ordenar el proyecto institucional.”",
    t1a: "Equipo directivo",
    t2: "“El campus Moodle es súper accesible. Las actividades se adaptan a distintos ritmos.”",
    t2a: "Docente",
    t3: "“Además del curso, nos resolvieron problemas técnicos que veníamos pateando hace meses.”",
    t3a: "Institución",

    contact_title: "Contacto",
    contact_sub: "Escribime por WhatsApp y contame qué necesitás (curso, propuesta institucional o servicio técnico).",
    contact_h3: "WhatsApp directo",
    contact_p: "Te respondo a la brevedad. Si es para escuela, agregá localidad y nivel.",
    contact_btn: "Abrir WhatsApp",
    contact_moodle: "Ir al Campus Moodle",
    contact_box_title: "Horarios de respuesta",
    contact_box_text: "Lun a Vie · 9 a 18 hs (Arg). Urgencias técnicas: indicarlo en el primer mensaje.",
    footer_rights: "Todos los derechos reservados",
    back_top: "Volver arriba"
  },

  en: {
    tagline: "Lead, Innovate & Transform",
    menu: "Menu",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services & Courses",
    nav_blog: "Blog",
    nav_resources: "Downloads",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",
    wa: "WhatsApp",
    pill: "Education + Technology, human-centered",
    h1: "Educational transformation and tech solutions in one place.",
    lead: "On-site and online training through your Moodle platform + PC and laptop repair & sales.",
    cta_services: "Explore services & courses",
    cta_moodle: "Go to Moodle Campus",
    badge_1: "✅ Training for schools & educators",
    badge_2: "✅ Guidance and consulting",
    badge_3: "✅ Reliable tech service",
    card_title: "What do you need today?",
    choice_courses: "Courses\nOn-site & online",
    choice_it: "Tech service\nPCs & laptops",
    choice_resources: "Resources\nDownloads",
    choice_contact: "Contact\nWhatsApp",

    about_title: "About TECED",
    about_sub: "A bridge between pedagogy, digital culture, and practical solutions.",
    about_h3_1: "Our mission",
    about_p_1: "We support schools, educators, and families in transformation processes with a creative, ethical, and contextual approach.",
    about_li_1: "Teacher training & workshops",
    about_li_2: "Own Moodle virtual campus",
    about_li_3: "Institutional consulting",
    about_h3_2: "We also solve the tech side",
    about_p_2: "Innovation can’t run on a dying laptop. Repair, optimization, and equipment sales.",
    about_li_4: "Diagnostics & repair",
    about_li_5: "Maintenance & upgrades",
    about_li_6: "PC / laptop sales",

    services_title: "Services & Courses",
    services_sub: "Two work lines, one goal: make things work (in class and on the computer).",
    svc_courses_title: "Training (On-site + Moodle)",
    svc_courses_p: "Courses, workshops, and programs. Access content and activities in your virtual campus.",
    chip_1: "AI in education",
    chip_2: "Digital culture",
    chip_3: "Pedagogical innovation",
    chip_4: "Families & citizenship",
    btn_moodle: "Enter Moodle Campus",
    btn_quote_courses: "Request a proposal",
    svc_it_title: "Tech service (PCs & laptops)",
    svc_it_p: "Repair, maintenance, optimization, and equipment sales for schools and the general public.",
    it_li_1: "OS install & setup",
    it_li_2: "Upgrades (SSD, RAM) & cleaning",
    it_li_3: "Diagnostics & repair",
    it_li_4: "Refurbished / sales",
    btn_whatsapp: "Ask via WhatsApp",
    btn_guides: "See guides",
    note_strong: "Tip:",
    note_text: "We can bundle for schools: training + tech support + ongoing guidance.",

    blog_title: "Blog",
    blog_sub: "Ideas, resources, and a contextual view on education & technology.",
    post1_title: "AI at school: potential and limits",
    post1_desc: "Think AI without hype or fear.",
    post2_title: "Digital citizenship",
    post2_desc: "Coexistence, networks, and teaching how to live online.",
    post3_title: "Tech checklist for schools",
    post3_desc: "Minimum essentials so your lab isn’t a museum of sad PCs.",
    read_more: "Read more",
    blog_note: "(Whenever you want, I can turn this into a real blog using a lightweight CMS or static generator.)",

    resources_title: "Downloadable resources",
    resources_sub: "Materials for educators, school leaders and families.",
    res1_title: "Planning template",
    res1_desc: "Editable model for tech-enabled projects.",
    res2_title: "Project rubric",
    res2_desc: "Simple criteria to assess learning.",
    res3_title: "Digital care quick guide",
    res3_desc: "Recommendations for families and students.",
    download: "Download",

    testimonials_title: "Testimonials",
    testimonials_sub: "What people say about working with TECED.",
    t1: "“Clear, practical, ethically grounded training. It helped us structure our institutional project.”",
    t1a: "School leadership team",
    t2: "“The Moodle campus is very accessible. Activities adapt to different paces.”",
    t2a: "Teacher",
    t3: "“Beyond the course, they solved long-standing technical issues.”",
    t3a: "Institution",

    contact_title: "Contact",
    contact_sub: "Message us on WhatsApp and tell us what you need (courses, institutional proposal or tech service).",
    contact_h3: "Direct WhatsApp",
    contact_p: "I’ll reply soon. For schools, include city and level.",
    contact_btn: "Open WhatsApp",
    contact_moodle: "Go to Moodle Campus",
    contact_box_title: "Reply hours",
    contact_box_text: "Mon–Fri · 9am–6pm (Argentina). For urgent tech issues, say it in the first message.",
    footer_rights: "All rights reserved",
    back_top: "Back to top"
  }
};

function setTextContentWithNewlines(el, text){
  // Permite "\n" en strings (para los botones del hero)
  el.textContent = "";
  text.split("\n").forEach((line, idx) => {
    if(idx) el.appendChild(document.createElement("br"));
    el.appendChild(document.createTextNode(line));
  });
}

function applyI18n(lang){
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.dataset.lang = lang;

  const dict = i18n[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if(!val) return;
    if(val.includes("\n")) setTextContentWithNewlines(el, val);
    else el.textContent = val;
  });

  // WhatsApp message changes by language
  const msg = lang === "en" ? state.whatsappMsgEN : state.whatsappMsgES;
  const waUrl = `https://wa.me/${state.whatsappNumber}?text=${encodeURIComponent(msg)}`;

  ["waFloat","waMain"].forEach(id => {
    const a = document.getElementById(id);
    if(a) a.href = waUrl;
  });

  // Moodle links
  ["moodleLinkTop","moodleLinkMid","moodleLinkBottom"].forEach(id => {
    const a = document.getElementById(id);
    if(a) a.href = state.moodleUrl;
  });
}

function initNav(){
  const btn = $("#navToggle");
  const menu = $("#navMenu");
  if(!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  // close menu after click (mobile)
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

function initLang(){
  const btn = $("#langBtn");
  if(!btn) return;

  btn.addEventListener("click", () => {
    state.lang = state.lang === "es" ? "en" : "es";
    applyI18n(state.lang);
  });
}

function initYear(){
  const y = $("#year");
  if(y) y.textContent = new Date().getFullYear();
}

initNav();
initLang();
initYear();
applyI18n(state.lang);
