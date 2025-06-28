document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  const mainContent = document.querySelector('main');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('active');
    });
  }

  // Optional: Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (hamburger && navLinks && !hamburger.contains(e.target) && !navLinks.contains(e.target)) {
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

  // Page transition animation on link click (no flicker, smooth fade)
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href !== '#' && !href.startsWith('#')) {
        e.preventDefault();
        if (mainContent && mainContent.style.opacity !== '0') {
          mainContent.style.transition = 'opacity 0.3s cubic-bezier(.25,.8,.25,1)';
          mainContent.style.opacity = 0;
          setTimeout(() => {
            window.location.href = href;
          }, 300);
        } else {
          window.location.href = href;
        }
      }
    });
  });

  // Fade in main content on page load, only if not already hidden
  if (mainContent) {
    mainContent.style.opacity = 0;
    requestAnimationFrame(() => {
      mainContent.style.transition = 'opacity 0.3s cubic-bezier(.25,.8,.25,1)';
      mainContent.style.opacity = 1;
    });
  }

  // Button ripple effect
  document.querySelectorAll('.btn-primary, .service-card a, .about-card a, .contact-list a').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const circle = document.createElement('span');
      circle.className = 'ripple';
      const rect = btn.getBoundingClientRect();
      circle.style.left = (e.clientX - rect.left) + 'px';
      circle.style.top = (e.clientY - rect.top) + 'px';
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
});
