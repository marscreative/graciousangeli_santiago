// Toggle mobile navigation menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth scroll for navigation links and continue button
const links = document.querySelectorAll('nav ul li a');
const continueBtn = document.getElementById('continueBtn');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.classList.remove('show');
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

continueBtn.addEventListener('click', () => {
  const ourStorySection = document.getElementById('our-story');
  if (ourStorySection) {
    ourStorySection.scrollIntoView({ behavior: 'smooth' });
  }
});
