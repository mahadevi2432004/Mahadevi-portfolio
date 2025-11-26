// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle && navToggle.addEventListener('click', () => {
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = '';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.right = '16px';
    navLinks.style.top = '60px';
    navLinks.style.background = 'rgba(11,17,28,0.9)';
    navLinks.style.padding = '12px';
    navLinks.style.borderRadius = '10px';
  }
});

// Simple live clock for "Stylish Digital Clock" project box
function startClock() {
  const el = document.getElementById('demoClock');
  if (!el) return;
  function tick() {
    const d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    const ampm = hh >= 12 ? 'PM' : 'AM';
    const hh12 = ((hh + 11) % 12 + 1); // 12-hour format
    const pad = n => String(n).padStart(2, '0');
    el.textContent = `${pad(hh12)} : ${pad(mm)} : ${pad(ss)} ${ampm}`;
  }
  tick();
  setInterval(tick, 1000);
}
startClock();

// Simple intersection observer to animate progress bars when visible
const progressBars = document.querySelectorAll('.progress > div');
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // already have widths in inline style; animate by forcing reflow
      entry.target.style.transition = 'width 1s ease';
      entry.target.style.width = entry.target.style.width || '60%';
    }
  });
}, {threshold: 0.2});

progressBars.forEach(pb => {
  // progress widths are set in CSS inline style earlier (e.g. 90%) — read them or set defaults
  const w = pb.style.width || '60%';
  pb.style.width = '0%';
  pb.dataset.target = w;
  obs.observe(pb);
});

// When observed, expand to target
const pbObserver = new MutationObserver(() => {});
// Fallback: when page loads, animate to dataset target
window.addEventListener('load', () => {
  progressBars.forEach(pb => {
    const target = pb.dataset.target || pb.style.width || '70%';
    setTimeout(() => pb.style.width = target, 150);
  });
});
