document.addEventListener('DOMContentLoaded', () => {

  // ── Theme Toggle — dark=🌙, light=☀️ ────────────────
  const themeToggle = document.getElementById('themeToggle');
  const tIcon = document.querySelector('.t-icon');
  const body  = document.body;

  const saved = localStorage.getItem('theme');
  if (saved === 'light') { body.classList.add('light'); tIcon.textContent = '☀️'; }
  else { tIcon.textContent = '🌙'; }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    tIcon.textContent = body.classList.contains('light') ? '☀️' : '🌙';
    localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
  });

  // ── Cursor glow ──────────────────────────────────────
  const cg = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', e => { cg.style.left = e.clientX+'px'; cg.style.top = e.clientY+'px'; });

  // ── Navbar hide ───────────────────────────────────────
  const navbar = document.getElementById('navbar');
  let lastY = 0, ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        navbar.classList.toggle('hidden', y > lastY && y > 80);
        lastY = y; ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // ── Scroll Reveal ──────────────────────────────────────
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.06 });

  document.querySelectorAll(
    '.section-title,.section-title-center,.hero-text,.hero-eyebrow,.scroll-hint,' +
    '.projects-list,.tech-categories,.edu-list,.training-list,.cert-list,.contact-cards,' +
    '.whoami-content'
  ).forEach(el => { el.classList.add('reveal'); revObs.observe(el); });

  const staggerObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); staggerObs.unobserve(e.target); } });
  }, { threshold: 0.04 });
  ['projectsList','techCategories','eduList','trainingList','certList','contactCards'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.classList.add('reveal-stagger'); staggerObs.observe(el); }
  });

  // ── Active Nav ─────────────────────────────────────────
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');
  const secObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === e.target.id));
    });
  }, { threshold: 0.28 });
  sections.forEach(s => secObs.observe(s));

  navLinks.forEach(l => {
    l.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(l.getAttribute('href'))?.scrollIntoView({ behavior:'smooth' });
    });
  });

  // ── Counters ──────────────────────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.dataset.target), suffix = el.dataset.suffix || '';
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min((now-t0)/1600, 1), v = Math.round((1-Math.pow(1-p,3))*target);
      el.textContent = v+suffix;
      if (p<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  const heroObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { document.querySelectorAll('.stat-num').forEach(animateCounter); heroObs.disconnect(); } });
  }, { threshold: 0.5 });
  const hs = document.querySelector('.hero-stats');
  if (hs) heroObs.observe(hs);

  // ── Cert modal close ──────────────────────────────────
  const modal = document.getElementById('certModal');
  document.getElementById('certModalClose')?.addEventListener('click', () => modal.classList.remove('open'));
  modal?.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key==='Escape') modal?.classList.remove('open'); });

  // ── Project tilt ──────────────────────────────────────
  document.querySelectorAll('.project-item').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX-r.left)/r.width -.5)*5;
      const y = ((e.clientY-r.top) /r.height-.5)*-5;
      card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform=''; });
  });

  // ── Scroll hint fade ──────────────────────────────────
  const sh = document.querySelector('.scroll-hint');
  if (sh) window.addEventListener('scroll', () => { sh.style.opacity = window.scrollY>100?'0':'1'; }, { passive:true });

  // ── Sidebar photo scale ───────────────────────────────
  const photo = document.querySelector('.avatar-circle');
  window.addEventListener('scroll', () => {
    if (photo) photo.style.transform = `scale(${1-Math.min(window.scrollY*.00010,.06)})`;
  }, { passive:true });

});
