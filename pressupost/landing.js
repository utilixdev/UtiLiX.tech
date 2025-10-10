/* ====== Landing – integració amb el teu projecte (versió neta) ====== */

document.addEventListener('DOMContentLoaded', () => {
  /* 1) HERO → enllaços cap a la web “oficial” o a index.html en local */
  const isLocal =
    location.protocol === 'file:' ||
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1';

  const hrefServicios = isLocal ? 'index.html#serveis'   : '/#serveis';
  const hrefProyectos = isLocal ? 'index.html#projectes' : '/#projectes';

  const ctaServicios = document.getElementById('ctaServicios');
  const ctaProyectos = document.getElementById('ctaProyectos');
  if (ctaServicios) ctaServicios.setAttribute('href', hrefServicios);
  if (ctaProyectos) ctaProyectos.setAttribute('href', hrefProyectos);

  /* 2) Any al footer */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* 3) Plans: commutador que només ressalta la targeta escollida (sense trencar el grid) */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('#planSwitch .chip');
  if (!btn) return;

  const plan = btn.dataset.plan;

  // estat visual dels “chips”
  document.querySelectorAll('#planSwitch .chip').forEach(b => {
    const on = b === btn;
    b.classList.toggle('selected', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
  });

  // targetes (no s’amaguen, només es ressalta la triada)
  document.querySelectorAll('.plan-card').forEach(card => {
    const match = card.dataset.plan === plan;
    card.style.outline = match ? '2px solid var(--accent)' : '1px solid var(--surface-2)';
    card.style.boxShadow = match ? '0 18px 50px rgba(0,0,0,.14)' : 'var(--shadow-1)';
    card.style.transform = match ? 'translateY(-2px)' : 'translateY(0)';
  });

  // scroll suau fins a la targeta activa (opcional)
  const active = document.querySelector(`.plan-card[data-plan="${plan}"]`);
  if (active) {
    const headerH = document.querySelector('.site-header')?.offsetHeight || 0;
    const top = active.getBoundingClientRect().top + window.scrollY - headerH - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  }
});

/* 4) FAQ accessible amb transició suau (només un manejador) */
document.addEventListener('click', (e) => {
  const q = e.target.closest('.faq-q');
  if (!q) return;

  const wrap = q.parentElement;
  const a = wrap.querySelector('.faq-a');
  if (!a) return;

  const open = q.getAttribute('aria-expanded') === 'true';
  q.setAttribute('aria-expanded', open ? 'false' : 'true');

  if (!open) {
    // Obrim amb animació
    a.hidden = false;               // perquè es pugui mesurar
    a.style.overflow = 'hidden';
    a.style.maxHeight = '0px';
    requestAnimationFrame(() => {
      a.style.transition = 'max-height .35s ease';
      a.style.maxHeight = a.scrollHeight + 'px';
    });
  } else {
    // Tanquem amb animació i després ocultem
    a.style.overflow = 'hidden';
    a.style.maxHeight = a.scrollHeight + 'px';
    requestAnimationFrame(() => {
      a.style.transition = 'max-height .3s ease';
      a.style.maxHeight = '0px';
    });
    a.addEventListener('transitionend', () => {
      a.hidden = true;
      a.style.transition = '';
      a.style.maxHeight = '';
      a.style.overflow = '';
    }, { once: true });
  }
});
