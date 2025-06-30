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
  const navLinks = document.querySelector('.nav-links');

  // New variables for slide
  let currentIndex = 0;
  const cards = container.querySelectorAll('.experience-card');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      hamburger.classList.toggle('toggle');
    });
  }
});
