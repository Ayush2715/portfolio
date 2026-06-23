// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// KPI count-up animation, triggered once when the strip enters view
const kpiStrip = document.getElementById('kpiStrip');

function animateKpi(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1100;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const value = target * eased;
    el.textContent = value.toFixed(decimals) + suffix;
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target.toFixed(decimals) + suffix;
    }
  }
  requestAnimationFrame(tick);
}

if (kpiStrip) {
  const numbers = kpiStrip.querySelectorAll('.kpi-number');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    numbers.forEach(el => {
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      el.textContent = target.toFixed(decimals) + (el.dataset.suffix || '');
    });
  } else if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          numbers.forEach(animateKpi);
          obs.disconnect();
        }
      });
    }, { threshold: 0.4 });
    observer.observe(kpiStrip);
  } else {
    numbers.forEach(animateKpi);
  }
}
