// safe DOM ready
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('nav .nav-links');

  if (!burger || !navLinks) return;

  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    burger.classList.toggle('open');
    navLinks.classList.toggle('show');
  });

  // Close menu when clicking a link (mobile)
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('show');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('show')) {
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('show');
    }
  });
});

