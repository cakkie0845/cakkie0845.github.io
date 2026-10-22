(() => {
  document.documentElement.classList.add('js');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('.headline, .hero-bottom, .about-grid, .interest-heading, .interest, .life-content');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold: 0.08});
    targets.forEach((el, i) => { el.classList.add('reveal'); if(i < 3) el.style.transitionDelay = `${i * 110}ms`; observer.observe(el); });
  }
  if (window.gsap && !reduced) {
    gsap.from('.red-void', {opacity:0, scaleY:.76, transformOrigin:'center', duration:1.5, delay:.2, ease:'power2.out'});
    gsap.from('.header > *', {y:-12, opacity:0, duration:.8, stagger:.12, ease:'power2.out'});
  }
  let frame = false;
  function progress() {
    const distance = document.documentElement.scrollHeight - innerHeight;
    document.querySelector('.progress').style.transform = `scaleX(${distance > 0 ? scrollY / distance : 0})`;
    frame = false;
  }
  addEventListener('scroll', () => { if(!frame) { frame = true; requestAnimationFrame(progress); } }, {passive:true});
  addEventListener('resize', progress); progress();
  document.querySelectorAll('.interest').forEach(detail => detail.addEventListener('toggle', () => {
    if(detail.open) document.querySelectorAll('.interest').forEach(other => { if(other !== detail) other.open = false; });
  }));
  const flash = document.querySelector('.flash');
  let flashTimer;
  document.querySelector('.camera-art').addEventListener('click', () => {
    if(reduced) return;
    flash.classList.remove('shot'); void flash.offsetWidth; flash.classList.add('shot');
    clearTimeout(flashTimer); flashTimer = setTimeout(() => flash.classList.remove('shot'), 500);
  });
  const beat = document.querySelector('.beat-button'), field = document.querySelector('.rhythm-art');
  let beatTimer;
  beat.addEventListener('click', () => {
    field.classList.add('hit'); document.querySelector('.beat-feedback').textContent = '♪';
    clearTimeout(beatTimer); beatTimer = setTimeout(() => { field.classList.remove('hit'); document.querySelector('.beat-feedback').textContent = ''; }, 220);
  });
  beat.addEventListener('keydown', e => { if(e.code === 'Space') e.preventDefault(); });
  beat.addEventListener('keyup', e => { if(e.code === 'Space') { e.preventDefault(); beat.click(); } });
})();
