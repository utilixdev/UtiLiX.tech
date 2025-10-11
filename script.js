/* =================== UtiLiX.dev — Vanilla, ràpid i robust =================== */
document.body.classList.remove('no-js');

const $  = (s, ctx=document) => ctx.querySelector(s);
const $$ = (s, ctx=document) => Array.from(ctx.querySelectorAll(s));
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ========================================================================== */
/* i18n */
/* ========================================================================== */
const I18N = {
  es:{ ui:{menu:'Menú', scroll:'Desliza'},
    cta:{services:'Descubre los servicios',projects:'Ver proyectos',quote:'Pedir Propuesta',view_project:'Ver proyecto'},
    nav:{services:'Servicios',projects:'Proyectos',method:'Método',quote:'Propuesta',contact:'Contacto'},
    hero:{
      title_prefix:'Diseño & Desarrollo',
      dynamicWords:['Web a Medida','Rápido ⚡','Accesible ♿','Optimizado para SEO','Bonito y Eficaz'],
      subhead:'HTML, CSS, JS, SEO, mantenimiento y back-end. Rendimiento, accesibilidad y magia visual en cada píxel.',
      kpis:{
        performance:'Rendimiento 90+ CWV',
        accessibility:'Accesibilidad AA/AAA',
        seo:'SEO técnico listo',
        custom:'100% a medida'
      }
    },
    services:{ title:'Servicios',subtitle:'End-to-End',desc:'Soluciones completas: del concepto al despliegue, con rendimiento top y SEO técnico de base.',
      uiux:{title:'Diseño UI/UX',desc:'Interfaces claras, accesibles y con identidad propia. Wireframes, componentes y sistemas de diseño.',b1:'Design system',b2:'Prototipado',b3:'Accesibilidad (WCAG)'},
      front:{title:'Front-end',desc:'HTML5, CSS3, ES6+, animaciones pro y builds optimizados. SSR/SSG si hace falta.',b1:'Rendimiento y Core Web Vitals',b2:'Animaciones fluidas',b3:'Responsive avanzado'},
      back:{title:'Back-end',desc:'APIs seguras, bases de datos e integraciones. Headless CMS o microservicios según proyecto.',b1:'Autenticación & seguridad',b2:'REST/GraphQL',b3:'Integraciones a medida'},
      seo:{title:'SEO Técnico',desc:'Arquitectura, schema, metadatos y sitemaps.',b1:'On-page & técnico',b2:'Analítica de eventos',b3:'Estrategia de contenido'},
      maint:{title:'Mantenimiento',desc:'Monitorización, actualizaciones y soporte.',b1:'Uptime & alertas',b2:'Hardening básico',b3:'Backups automatizados'},
      opt:{title:'Optimizaciones',desc:'Lazy-loading, code-splitting, compresiones y CDN.',b1:'Auditorías de rendimiento',b2:'Core Web Vitals',b3:'Mejoras contínuas'}
    },
    projects:{ title:'Proyectos',subtitle:'que Brillan',desc:'Una muestra visual de lo que podemos crear juntos. Carrusel fluido y microinteracciones.',
      items:{saas:'Landing altamente conversiva con animaciones de producto.',ecom:'Arquitectura headless, pagespeed y conversiones a tope.',corp:'Identidad sólida y narrativa visual con microinteracciones.',app:'Panel dinámico con gráficas y actualizaciones en tiempo real.'}},
    method:{title:'Método',subtitle:'claro',and:'y colaborativo', s1t:'Discovery:',s1:'objetivos, público y éxitos medibles.', s2t:'Diseño:',s2:'wireframes, UI, prototipos.', s3t:'Construcción:',s3:'front-end / back-end e integraciones.', s4t:'Lanzamiento:',s4:'SEO técnico, analítica y A/B testing.', s5t:'Cuidado continuo:',s5:'mantenimiento y evoluciones.'},
    quote:{ title:'Solicita tu Propuesta',desc:'Cuéntanos qué necesitas y el rango de inversión que tienes en mente. Te responderé con una propuesta a medida.',
      open:'Abrir formulario',close:'Ocultar formulario', type:'Tipo de proyecto', types:{landing:'Landing',corp:'Web corporativa',ecom:'E-commerce',app:'Web App'},
      budget:'Rango de inversión estimado',speed:'Urgencia',speed_normal:'Normal',speed_express:'Exprés',
      desc_label:'Describe el proyecto',desc_ph:'Objetivos, funcionalidades clave, referentes visuales…',
      name:'Nombre',name_ph:'Nombre y apellidos',email:'Email',email_ph:'tu@empresa.com',
      privacy:'No mostramos precios aquí: valoramos cada proyecto y te enviamos la mejor propuesta posible.',
      send:'Enviar solicitud',prefill:'Me interesa ver más sobre', fill_name_email:'Introduce tu nombre y email para continuar.', no_desc:'(sin descripción)',
      mail_subject:'Solicitud de propuesta', mail_hi:'Hola, soy', mail_interested:'Estoy interesado en un proyecto de tipo', mail_budget:'Rango de inversión', mail_speed:'Urgencia', mail_desc:'Descripción',
      /* 👇 NOVES CLAUS PER AL H2 AMB DEGRADAT */
      title_plain:'Solicita',
      title_accent:'tu Propuesta'
    },
    footer:{tagline:'Creamos Experiencias Digitales Que Convierten y Perduran.',nav:'Navega',contact:'Contacto',location:'Barcelona — Remote first',rights:'Todos los derechos reservados'}
  },
  ca:{ ui:{menu:'Menú',scroll:'Desplaça'},
    cta:{services:'Descobreix els serveis',projects:'Veure projectes',quote:'Demanar Proposta',view_project:'Veure projecte'},
    nav:{services:'Serveis',projects:'Projectes',method:'Mètode',quote:'Proposta',contact:'Contacte'},
    hero:{
      title_prefix:'Disseny & Desenvolupament',
      dynamicWords:['Web a Mida','Ràpid ⚡','Accessible ♿','Optimitzat per SEO','Bonic i Eficaç'],
      subhead:'HTML, CSS, JS, SEO, manteniment i back-end. Rendiment, accessibilitat i màgia visual a cada píxel.',
      kpis:{
        performance:'Rendiment 90+ CWV',
        accessibility:'Accessibilitat AA/AAA',
        seo:'SEO tècnic a punt',
        custom:'100% a mida'
      }
    },
    services:{title:'Serveis',subtitle:'End-to-End',desc:'Solucions completes: del concepte al desplegament, amb rendiment top i SEO tècnic de base.',
      uiux:{title:'Disseny UI/UX',desc:'Interfícies clares, accessibles i amb identitat pròpia.',b1:'Design system',b2:'Prototipatge',b3:'Accessibilitat (WCAG)'},
      front:{title:'Front-end',desc:'HTML5, CSS3, ES6+, animacions pro i builds optimitzats.',b1:'Rendiment i Core Web Vitals',b2:'Animacions fluides',b3:'Responsive avançat'},
      back:{title:'Back-end',desc:'APIs segures, bases de dades i integracions.',b1:'Autenticació & seguretat',b2:'REST/GraphQL',b3:'Integracions a mida'},
      seo:{title:'SEO Tècnic',desc:'Arquitectura, schema, metadades i sitemaps.',b1:'On-page & tècnic',b2:'Analítica d’events',b3:'Estratègia de contingut'},
      maint:{title:'Manteniment',desc:'Monitoratge, actualitzacions i suport.',b1:'Uptime & alertes',b2:'Hardening bàsic',b3:'Backups automatitzats'},
      opt:{title:'Optimitzacions',desc:'Lazy-loading, code-splitting, compressions i CDN.',b1:'Auditories de rendiment',b2:'Core Web Vitals',b3:'Millores contínues'}
    },
    projects:{title:'Projectes',subtitle:'que Brillen',desc:'Un tastet visual del que podem crear junts.',
      items:{saas:'Landing altament conversiva amb animacions de producte.',ecom:'Arquitectura headless, pagespeed i conversions a tope.',corp:'Identitat sòlida i narrativa visual amb microinteraccions.',app:'Panell dinàmic amb gràfiques i temps real.'}},
    method:{title:'Mètode',subtitle:'clar',and:'i col·laboratiu', s1t:'Discovery:',s1:'objectius, públic i èxits mesurables.', s2t:'Disseny:',s2:'wireframes, UI, prototips.', s3t:'Construcció:',s3:'front-end / back-end i integracions.', s4t:'Llançament:',s4:'SEO tècnic, analítica i A/B testing.', s5t:'Cura contínua:',s5:'manteniment i evolucions.'},
    quote:{title:'Demana la teva proposta',desc:'Explica’ns què necessites i el rang d’inversió que tens al cap.',
      open:'Obrir formulari',close:'Tancar formulari', type:'Tipus de projecte', types:{landing:'Landing',corp:'Web corporativa',ecom:'E-commerce',app:'Web App'},
      budget:'Rang d’inversió estimat',speed:'Urgència',speed_normal:'Normal',speed_express:'Exprés',
      desc_label:'Descriu el projecte',desc_ph:'Objectius, funcionalitats clau, referents visuals…',
      name:'Nom',name_ph:'Nom i cognoms',email:'Email',email_ph:'tu@empresa.com',
      privacy:'No mostrem preus aquí: valorem cada projecte i t’enviem la millor proposta possible.',
      send:'Envia la sol·licitud',prefill:'M’interessa veure més sobre', fill_name_email:'Introdueix el teu nom i email per continuar.', no_desc:'(sense descripció)',
      mail_subject:'Sol·licitud de Proposta', mail_hi:'Hola, sóc', mail_interested:'Estic interessat en un projecte de tipus', mail_budget:'Rang d’inversió', mail_speed:'Urgència', mail_desc:'Descripció',
      /* 👇 NOVES CLAUS PER AL H2 AMB DEGRADAT */
      title_plain:'Demana',
      title_accent:'la teva Proposta'
    },
    footer:{tagline:'Creem Experiències Digitals que Converteixen i Perduren.',nav:'Navega',contact:'Contacte',location:'Barcelona — Remote first',rights:'Tots els drets reservats'}
  },
  en:{ ui:{menu:'Menu',scroll:'Scroll'},
    cta:{services:'Explore services',projects:'View projects',quote:'Request Proposal',view_project:'View project'},
    nav:{services:'Services',projects:'Projects',method:'Method',quote:'Proposal',contact:'Contact'},
    hero:{
      title_prefix:'Design & Development',
      dynamicWords:['Web, Bespoke','Fast ⚡','Accessible ♿','SEO-Ready','Beautiful & Effective'],
      subhead:'HTML, CSS, JS, SEO and back-end. Fast, accessible and delightful in every pixel.',
      kpis:{
        performance:'Performance 90+ CWV',
        accessibility:'Accessibility AA/AAA',
        seo:'Technical SEO ready',
        custom:'100% bespoke'
      }
    },
    services:{title:'Services',subtitle:'End-to-End',desc:'Complete solutions from concept to launch, with top performance and technical SEO.',
      uiux:{title:'UI/UX Design',desc:'Clear, accessible interfaces with a strong identity.',b1:'Design system',b2:'Prototyping',b3:'Accessibility (WCAG)'},
      front:{title:'Front-end',desc:'HTML5, CSS3, ES6+, pro animations & optimized builds.',b1:'Performance & Core Web Vitals',b2:'Fluid animations',b3:'Advanced responsive'},
      back:{title:'Back-end',desc:'Secure APIs, databases & integrations.',b1:'Auth & security',b2:'REST/GraphQL',b3:'Custom integrations'},
      seo:{title:'Technical SEO',desc:'Architecture, schema, metadata & sitemaps.',b1:'On-page & technical',b2:'Event analytics',b3:'Content strategy'},
      maint:{title:'Maintenance',desc:'Monitoring, updates & support.',b1:'Uptime & alerts',b2:'Basic hardening',b3:'Automated backups'},
      opt:{title:'Optimizations',desc:'Lazy-loading, code-splitting, compression & CDN.',b1:'Performance audits',b2:'Core Web Vitals',b3:'Continuous improvements'}
    },
    projects:{title:'Projects',subtitle:'that Shine',desc:'A visual taste of what we can build together.',
      items:{saas:'High-converting landing with product animations.',ecom:'Headless architecture with blazing speed.',corp:'Solid identity with microinteractions.',app:'Dynamic dashboard with real-time updates.'}},
    method:{title:'Method',subtitle:'clear',and:'and collaborative', s1t:'Discovery:',s1:'goals, audience and measurable success.', s2t:'Design:',s2:'wireframes, UI, prototypes.', s3t:'Build:',s3:'front-end / back-end and integrations.', s4t:'Launch:',s4:'technical SEO, analytics and A/B testing.', s5t:'Ongoing care:',s5:'maintenance and evolution.'},
    quote:{title:'Request your proposal',desc:'Tell us what you need and the budget range.',
      open:'Open form',close:'Hide form', type:'Project type', types:{landing:'Landing',corp:'Corporate website',ecom:'E-commerce',app:'Web App'},
      budget:'Estimated budget range',speed:'Timeline',speed_normal:'Standard',speed_express:'Express',
      desc_label:'Describe the project',desc_ph:'Goals, key features, visual references…',
      name:'Name',name_ph:'Full name',email:'Email',email_ph:'you@company.com',
      privacy:'We don’t show prices here: we assess each project and send the best possible proposal.',
      send:'Send request',prefill:'I’d like to see more about', fill_name_email:'Please enter your name and email to continue.', no_desc:'(no description)',
      mail_subject:'Proposal Request', mail_hi:'Hi, I’m', mail_interested:'I’m interested in a project of type', mail_budget:'Budget range', mail_speed:'Timeline', mail_desc:'Description',
      /* 👇 NEW KEYS FOR GRADIENT H2 */
      title_plain:'Request',
      title_accent:'your Proposal'
    },
    footer:{tagline:'We Craft Digital Experiences that Convert and Last.',nav:'Browse',contact:'Contact',location:'Barcelona — Remote first',rights:'All rights reserved'}
  }
};
const deepGet=(o,p)=>p.split('.').reduce((x,k)=>x?.[k],o);
const SUPPORTED_LANGS = new Set(['es','ca','en']);
let currentLang = localStorage.getItem('lang') || document.body.dataset.lang || 'es';
if(!SUPPORTED_LANGS.has(currentLang)) currentLang = 'es';
const t = (path)=> deepGet(I18N[currentLang], path) ?? path;

/* ========================================================================== */
/* PRELOADER — espera fonts i reserva amplada del H1 abans de treure's */
/* ========================================================================== */
(function preloader(){
  const el = $('#preloader'); if(!el) return;
  const pct = $('#prePct'); let p = 0, raf;
  const tick = ()=>{ p = Math.min(90, p + Math.random()*6 + 2); if(pct) pct.textContent = Math.floor(p); if(p<90) raf=requestAnimationFrame(tick); };
  raf = requestAnimationFrame(tick);

  async function fontsReady(){
    try{ if(document.fonts && document.fonts.ready) await document.fonts.ready; }catch(e){}
  }

  window.addEventListener('load', async () => {
    cancelAnimationFrame(raf);
    await fontsReady();
    await setDynamicWidth(currentLang); // reserva amplada del fragment dinàmic
    const to100 = () => {
      p += 2; if(pct) pct.textContent = Math.min(100, Math.floor(p));
      if(p < 100) requestAnimationFrame(to100);
      else { el.style.transition='opacity .6s ease'; el.style.opacity='0'; setTimeout(()=> el.remove(), 600); }
    };
    requestAnimationFrame(to100);
  });
})();

/* ========================================================================== */
/* HEADLINE estable (multiidioma) — sense salts */
/* ========================================================================== */
function scrambleOnce(el){
  if(!el) return;
  const final = el.textContent.trim(); if(!final) return;
  const chars = '█▓▒░/*<>[]#&$%?';
  let frame = 0, out = final.split('');
  const id = setInterval(()=>{
    out = out.map((ch,idx)=> idx < frame ? final[idx] : chars[(Math.random()*chars.length)|0]);
    el.textContent = out.join('');
    frame++;
    if(frame > final.length){ clearInterval(id); el.textContent = final; }
  }, 22);
}

function measureMaxWidth(el, words){
  const meas = document.createElement('span');
  const cs = getComputedStyle(el);
  meas.style.cssText = `position:absolute; visibility:hidden; white-space:nowrap; left:-9999px; top:-9999px; font-family:${cs.fontFamily}; font-size:${cs.fontSize}; font-weight:${cs.fontWeight}; letter-spacing:${cs.letterSpacing}`;
  document.body.appendChild(meas);
  let max = 0;
  for(const w of words){ meas.textContent = w; const wpx = meas.getBoundingClientRect().width; if(wpx > max) max = wpx; }
  document.body.removeChild(meas);
  return Math.ceil(max);
}
const dynWidthCache = {};

async function setDynamicWidth(lang){
  const head = $('#headline'); const dyn = $('#titleDynamic'); const pre = $('.headline-prefix');
  if(!dyn || !head || !pre) return;

  // Si és mòbil, forcem "stack" (dues línies estables)
  const isNarrow = window.matchMedia('(max-width:700px)').matches;
  head.classList.toggle('headline--stack', isNarrow);
  if(isNarrow){
    dyn.style.width='100%'; dyn.style.minWidth='0';
    return;
  }

  // Reserva amplada de la frase més llarga d'aquest idioma
  if(!dynWidthCache[lang]){
    const words = I18N[lang].hero.dynamicWords;
    dynWidthCache[lang] = measureMaxWidth(dyn, words);
  }
  const reserved = dynWidthCache[lang];
  dyn.style.width = reserved + 'px';
  dyn.style.minWidth = reserved + 'px';

  // Si prefix + dinàmic no caben, força "stack"
  const container = head.closest('.hero-inner') || head.parentElement;
  const avail = container?.clientWidth || head.clientWidth || window.innerWidth;
  const cs = getComputedStyle(head);
  const gapPx = parseFloat(cs.gap) || parseFloat(cs.columnGap) || 8;
  const total = pre.getBoundingClientRect().width + reserved + gapPx;
  const needStack = total > avail * 0.98;
  head.classList.toggle('headline--stack', needStack);

  if(needStack){
    dyn.style.width='100%'; dyn.style.minWidth='0';
  }
}

let typeTimer;
function typeCycle(el, words){
  let i=0, pos=0, del=false;
  clearTimeout(typeTimer);
  const step = ()=>{
    const w = words[i];
    el.textContent = w.slice(0,pos);
    if(!del && pos < w.length){ pos++; typeTimer = setTimeout(step, 46+Math.random()*22); }
    else if(!del && pos === w.length){ typeTimer = setTimeout(()=>{ del=true; step(); }, 1100); }
    else if(del && pos>0){ pos--; typeTimer = setTimeout(step, 28+Math.random()*18); }
    else { del=false; i=(i+1)%words.length; typeTimer = setTimeout(step, 200); }
  };
  step();
}

async function startHeadline(){
  const prefix = $('.headline-prefix'); const dyn = $('#titleDynamic');
  if(prefix) scrambleOnce(prefix);
  if(!dyn) return;
  try{ if(document.fonts && document.fonts.ready) await document.fonts.ready; }catch(e){}
  await setDynamicWidth(currentLang);
  typeCycle(dyn, I18N[currentLang].hero.dynamicWords);
}

/* ========================================================================== */
/* Idiomes — robust amb delegació d’events */
/* ========================================================================== */
function setLangUIState(lang){
  document.querySelectorAll('.lang').forEach(btn=>{
    const on = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;
}

async function applyI18n(lang){
  if(!SUPPORTED_LANGS.has(lang)) lang = 'es';
  currentLang = lang; localStorage.setItem('lang',lang);
  setLangUIState(lang);

  // Textos i placeholders
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = deepGet(I18N[lang], key);
    if(val != null) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    const val = deepGet(I18N[lang], key);
    if(val != null) el.setAttribute('placeholder', val);
  });

  // Botó formulari
  const qToggle = $('#quoteToggle'); const qForm = $('#quoteForm');
  if(qToggle && qForm){
    qToggle.textContent = qForm.classList.contains('is-collapsed') ? deepGet(I18N[lang],'quote.open') : deepGet(I18N[lang],'quote.close');
  }

  // Recalcular i arrencar titular
  await startHeadline();
}

// Delegació: cap listener es perd encara que re-renderitzem
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('button.lang');
  if(!btn) return;
  e.preventDefault();
  const lang = btn.dataset.lang || 'es';
  if(lang !== currentLang) applyI18n(lang);
});

// Inicialització
window.addEventListener('DOMContentLoaded', ()=> applyI18n(currentLang));

// Reajust si canvia la mida de finestra (o canvia la presència de barra scroll)
let resizeTimer;
window.addEventListener('resize', ()=> { clearTimeout(resizeTimer); resizeTimer = setTimeout(()=> setDynamicWidth(currentLang), 120); });

/* ========================================================================== */
/* Header / Nav */
/* ========================================================================== */
const body = document.body;
const hamburger = $('#hamburger');
const nav = $('#nav');
const navDim = $('#navDim');
const yearEl = $('#year'); if(yearEl) yearEl.textContent = new Date().getFullYear();

function toggleNav(open){
  const willOpen = open ?? !body.classList.contains('nav-open');
  body.classList.toggle('nav-open', willOpen);
  hamburger?.setAttribute('aria-expanded', String(willOpen));
  nav?.setAttribute('aria-hidden', String(!willOpen));
  navDim?.setAttribute('aria-hidden', String(!willOpen));
}
hamburger?.addEventListener('click', ()=> toggleNav());
navDim?.addEventListener('click', ()=> toggleNav(false));
document.addEventListener('keydown', e => { if(e.key==='Escape') toggleNav(false); });
document.addEventListener('click', (e)=>{ if(!body.classList.contains('nav-open')) return; if(!e.target.closest('.nav-overlay') && !e.target.closest('#hamburger')) toggleNav(false); });

/* ========================================================================== */
/* Smooth scroll amb offset de la capçalera */
/* ========================================================================== */
function smoothScrollTo(target){
  const headerH = $('.site-header')?.offsetHeight || 0;
  const top = (typeof target === 'number') ? target : target.getBoundingClientRect().top + window.scrollY - headerH - 12;
  window.scrollTo({ top, behavior:'smooth' });
}
document.addEventListener('click', (e)=>{
  const link = e.target.closest('a[href^="#"], .scroll-link'); if(!link) return;
  const href = link.getAttribute('href') || ''; if(!href.startsWith('#')) return;
  const tgt = document.querySelector(href); if(!tgt) return;
  e.preventDefault(); toggleNav(false); smoothScrollTo(tgt);
}, true);

/* ========================================================================== */
/* Reveals + glow scroll (inclou HERO KPI + ticker) */
/* ========================================================================== */
function initReveals(){
  const targets = [
    ...$$('.section-head'),
    ...$$('.service-card'),
    ...$$('.project-card'),
    $('.hero-ticker'),
    $('.hero-image'),
    ...$$('.hero-kpis .kpi'),
    $('.hero-media'),
    ...$$('.cta .btn'),
    $('.method-visual')
  ].filter(Boolean);

  targets.forEach(el=>{ el.classList.add('reveal'); el.style.opacity='0'; el.style.transform='translateY(24px)'; });
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); e.target.style.transition='opacity .7s ease, transform .7s ease'; e.target.style.opacity='1'; e.target.style.transform='none'; io.unobserve(e.target); } });
  },{ threshold:0.15 });
  targets.forEach(el=> io.observe(el));

  // Glow dinàmic als serveis (conic + blur)
  const cards = $$('.service-card');
  function updateGlow(){
    const vh = window.innerHeight;
    cards.forEach(card=>{
      const r = card.getBoundingClientRect();
      const prog = Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height)));
      card.style.setProperty('--glow-rot', (prog*360)+'deg');
      card.style.setProperty('--glow-opacity', (0.12 + prog*0.18).toFixed(2));
    });
  }
  updateGlow();
  window.addEventListener('scroll', ()=> requestAnimationFrame(updateGlow), { passive:true });
  window.addEventListener('resize', ()=> requestAnimationFrame(updateGlow));
}
initReveals();

/* ========================================================================== */
/* Tilt lleuger (sense llibreria) */
/* ========================================================================== */
(function initTilt(){
  $$('.tilt').forEach(el=>{
    el.style.transformStyle = 'preserve-3d';
    el.addEventListener('mousemove', (e)=>{
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width/2)) / r.width;
      const dy = (e.clientY - (r.top + r.height/2)) / r.height;
      el.style.transform = `rotateX(${-dy*6}deg) rotateY(${dx*8}deg)`;
    });
    el.addEventListener('mouseleave', ()=> el.style.transform = 'rotateX(0) rotateY(0)');
  });
})();

/* ========================================================================== */
/* Projects: scroll-snap + autoplay + controls (natiu) */
/* ========================================================================== */
(function initProjects(){
  const root = $('.projects-swiper'); if(!root) return;
  const track = root.querySelector('.swiper-wrapper');
  const prev = root.querySelector('.swiper-button-prev');
  const next = root.querySelector('.swiper-button-next');
  const step = ()=> (track.querySelector('.swiper-slide')?.getBoundingClientRect().width || 320) + 18;

  next.addEventListener('click', ()=> track.scrollBy({ left: step(), behavior:'smooth' }));
  prev.addEventListener('click', ()=> track.scrollBy({ left: -step(), behavior:'smooth' }));

  if(!prefersReduced){
    let autoplay = setInterval(()=> {
      track.scrollBy({ left: step(), behavior:'smooth' });
      if(track.scrollLeft + track.clientWidth >= track.scrollWidth - 5){ track.scrollTo({ left:0, behavior:'smooth' }); }
    }, 3000);
    ['pointerdown','wheel','touchstart'].forEach(ev=> track.addEventListener(ev, ()=> { clearInterval(autoplay); }, { once:true, passive:true }));
  }
})();

/* ========================================================================== */
/* Formulari: toggle + ENVIAMENT (endpoint o mailto) */
/* ========================================================================== */
const quoteForm = $('#quoteForm');
const quoteToggle = $('#quoteToggle');
const chipsType = $$('#type .chip');
const chipsBudget = $$('#budget .chip');
const chipsSpeed = $$('.chips [data-speed]');
let formState = { type:'landing', budget:'1-3k', speed:'normal' };

/* === CONFIGURA AQUI el teu endpoint (Formspree o similar) === */
const FORM_ENDPOINT = 'https://formspree.io/f/xeorzwpo'; // ✅ el teu endpoint
const MAILTO_TO = 'hello@utilix.dev';

function ensureStatusEl(){
  let el = $('#quoteMsg');
  if(!el){
    el = document.createElement('div');
    el.id = 'quoteMsg';
    el.className = 'hint-quiet';
    const estimate = $('.quote .estimate');
    if(estimate) estimate.appendChild(el);
    else quoteForm?.appendChild(el);
  }
  return el;
}

function expand(el){
  el.classList.remove('is-collapsed'); el.style.overflow='hidden';
  el.style.height='auto'; const h = el.scrollHeight+'px'; el.style.height='0px';
  requestAnimationFrame(()=>{ el.style.transition='height .45s cubic-bezier(.2,.8,.2,1), opacity .25s ease'; el.style.height=h; el.style.opacity='1'; });
  el.addEventListener('transitionend',()=>{ el.style.height='auto'; el.style.overflow='visible'; el.style.transition=''; },{once:true});
}
function collapse(el){
  el.style.overflow='hidden'; el.style.height = el.scrollHeight+'px';
  requestAnimationFrame(()=>{ el.style.transition='height .35s ease, opacity .2s ease'; el.style.height='0px'; el.style.opacity='0'; });
  el.addEventListener('transitionend',()=>{ el.classList.add('is-collapsed'); el.style.height=''; el.style.transition=''; },{once:true});
}
quoteToggle?.addEventListener('click', ()=>{
  const isCollapsed = quoteForm.classList.contains('is-collapsed');
  quoteToggle.setAttribute('aria-expanded', String(isCollapsed));
  quoteToggle.textContent = isCollapsed ? t('quote.close') : t('quote.open');
  if(isCollapsed){ expand(quoteForm); smoothScrollTo(quoteForm); } else { collapse(quoteForm); }
});
chipsType.forEach(chip=> chip.addEventListener('click',()=>{ chipsType.forEach(c=>c.classList.remove('selected')); chip.classList.add('selected'); formState.type = chip.dataset.type; }));
chipsBudget.forEach(chip=> chip.addEventListener('click',()=>{ chipsBudget.forEach(c=>c.classList.remove('selected')); chip.classList.add('selected'); formState.budget = chip.dataset.budget; }));
chipsSpeed.forEach(chip=> chip.addEventListener('click',()=>{ chipsSpeed.forEach(c=>c.classList.remove('selected')); chip.classList.add('selected'); formState.speed = chip.dataset.speed; }));
$$('.view-project').forEach(btn => btn.addEventListener('click', (e)=>{
  const name = e.currentTarget.dataset.project || '';
  if(quoteForm.classList.contains('is-collapsed')) expand(quoteForm);
  $('#desc').value = `${t('quote.prefill')} ${name}.`; quoteToggle.textContent = t('quote.close'); smoothScrollTo(quoteForm);
}));

quoteForm?.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const name = $('#name')?.value.trim();
  const email = $('#email')?.value.trim();
  const desc = $('#desc')?.value.trim() || t('quote.no_desc');
  const msgEl = ensureStatusEl();
  const btn = e.submitter || quoteForm.querySelector('button[type="submit"]');

  if(!name || !email){
    msgEl.textContent = t('quote.fill_name_email');
    msgEl.style.color = 'var(--warn)';
    return;
  }

  // Estat comú (subject + cos)
  const subject = `${t('quote.mail_subject')} — ${name}`;
  const bodyText = [
    `${t('quote.mail_hi')} ${name}.`,
    `${t('quote.mail_interested')} ${formState.type}.`,
    '',
    `${t('quote.mail_budget')}: ${formState.budget}`,
    `${t('quote.mail_speed')}: ${formState.speed}`,
    '',
    `${t('quote.mail_desc')}:`,
    desc
  ].join('\n');

  // Si hi ha endpoint -> fetch; si no, mailto fallback
  if(FORM_ENDPOINT){
    btn.disabled = true; btn.style.opacity = .7;
    msgEl.textContent = 'Enviando…';
    msgEl.style.color = 'inherit';

    try{
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept':'application/json', 'Content-Type':'application/json' },
        body: JSON.stringify({
          name, email,
          type: formState.type,
          budget: formState.budget,
          speed: formState.speed,
          description: desc,
          _subject: subject
        })
      });

      if(!res.ok){
        let errText = 'Error enviando el formulario';
        try{ const data = await res.json(); if(data?.errors?.length) errText = data.errors.map(e=>e.message).join(', '); }catch(_){}
        throw new Error(errText);
      }

      msgEl.textContent = '¡Solicitud enviada! Te responderé en breve.';
      msgEl.style.color = 'var(--accent)';

      // Reset visual
      quoteForm.reset();
      chipsType.forEach(c=>c.classList.remove('selected')); chipsType[0]?.classList.add('selected'); formState.type='landing';
      chipsBudget.forEach(c=>c.classList.remove('selected')); chipsBudget[1]?.classList.add('selected'); formState.budget='1-3k';
      chipsSpeed.forEach(c=>c.classList.remove('selected')); chipsSpeed[0]?.classList.add('selected'); formState.speed='normal';

    }catch(err){
      console.error(err);
      msgEl.textContent = 'No se pudo enviar. Prueba de nuevo o escríbeme a hello@utilix.dev';
      msgEl.style.color = 'var(--warn)';
    }finally{
      btn.disabled = false; btn.style.opacity = 1;
    }
  }else{
    // Fallback mailto
    const href = `mailto:${MAILTO_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}&cc=${encodeURIComponent(email)}`;
    window.location.href = href;
  }
});

/* ========================================================================== */
/* Magnètic suau als botons */
/* ========================================================================== */
$$('[data-magnetic]').forEach(el=>{
  const strength = 16;
  el.addEventListener('mousemove',(e)=>{
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX-(r.left+r.width/2))/strength}px, ${(e.clientY-(r.top+r.height/2))/strength}px)`;
  });
  el.addEventListener('mouseleave',()=>{ el.style.transform='translate(0,0)'; });
});
