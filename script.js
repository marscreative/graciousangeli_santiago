document.addEventListener('DOMContentLoaded', function () {
  // Auto slide for travel experience cards on mobile view
  const container = document.getElementById('experiences-cards');
  if (!container) {
    console.log('Experiences container not found');
    return;
  }

  let scrollAmount = 0;
  const card = container.querySelector('.experience-card');
  if (!card) {
    console.log('Experience card not found');
    return;
  }

  const style = window.getComputedStyle(container);
  const gap = parseInt(style.gap) || 0;
  const cardWidth = card.offsetWidth + gap;
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  function autoSlide() {
    if (window.innerWidth > 768) return; // Only run on mobile

    currentIndex++;
    if (currentIndex >= cards.length) {
      currentIndex = 0;
    }
    const scrollPosition = cards[currentIndex].offsetLeft;
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }

  setInterval(autoSlide, 3000);

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');

  // New variables for slide
  let currentIndex = 0;
  const cards = container.querySelectorAll('.experience-card');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
      hamburger.classList.toggle('toggle');
    });
  }

  // Highlight active nav link after header is loaded
  function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!navLinks.length) return;
    const currentPath = window.location.pathname.replace(/\\/g, '/');
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (
        href === currentPath ||
        (href.endsWith('index.html') && (currentPath === '/' || currentPath.endsWith('index.html')))
      ) {
        link.classList.add('active');
      }
    });
  }

  // If header is loaded dynamically, wait for it
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    const observer = new MutationObserver(() => {
      setActiveNavLink();
    });
    observer.observe(headerPlaceholder, { childList: true });
    // Also try to set immediately in case header is already present
    setActiveNavLink();
  } else {
    setActiveNavLink();
  }
});
