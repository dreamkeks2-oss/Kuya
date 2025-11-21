// Smooth scroll
function smoothScroll(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  const startY = window.pageYOffset;
  const targetY = target.getBoundingClientRect().top + startY;
  const distance = targetY - startY;
  const duration = 700;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = 0.5 - Math.cos(progress * Math.PI) / 2;
    window.scrollTo(0, startY + distance * ease);
    if (progress < 1) requestAnimationFrame(animation);
  }
  requestAnimationFrame(animation);
}

// Button Scroll
document.getElementById('btn-projects').addEventListener('click', () => {
  smoothScroll('#projects');
});

// Navbar links smooth scroll
document.querySelectorAll('.nav-links a, .nav-brand').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    smoothScroll(link.getAttribute('href'));
  });
});

// Scroll animation for panels
const panels = document.querySelectorAll('.panel');
function onScroll() {
  panels.forEach(panel => {
    const rect = panel.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) panel.classList.add('active');
  });
}
window.addEventListener('scroll', onScroll);
onScroll();
