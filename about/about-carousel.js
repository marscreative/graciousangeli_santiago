document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.destinations-cards');
  if (!container) {
    console.log('Destinations container not found');
    return;
  }

  const cards = container.querySelectorAll('.destination-card');
  if (!cards.length) {
    console.log('No destination cards found');
    return;
  }

  let currentIndex = 0;

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
});
