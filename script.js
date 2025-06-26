document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  const mainContent = document.querySelector('main');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
  });

  // Optional: Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
    }
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Page transition animation on link click
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href !== '#' && !href.startsWith('#')) {
        e.preventDefault();
        if (mainContent) {
          mainContent.style.transition = 'opacity 0.5s ease';
          mainContent.style.opacity = 0;
        }
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });

  // Fade in main content on page load, only if not already hidden
  if (mainContent) {
    mainContent.style.opacity = 0;
    setTimeout(() => {
      mainContent.style.transition = 'opacity 0.5s ease';
      mainContent.style.opacity = 1;
    }, 10);
  }
});
