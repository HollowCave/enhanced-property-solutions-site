// Navigation Menu on mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});


// FAQ page accordions
const buttons = document.querySelectorAll('.accordion-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const content = button.nextElementSibling;
    const isOpen = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.accordion-item').forEach(i => {
      const c = i.querySelector('.accordion-content');
      if (i.classList.contains('active')) {
        // Animate close smoothly
        c.style.maxHeight = c.scrollHeight + 'px'; // start from current height
        // Force reflow so transition happens
        void c.offsetHeight;
        c.style.maxHeight = '0px'; // then collapse
        i.classList.remove('active');
      }
    });

    if (!isOpen) {
      item.classList.add('active');
      // Open with animation
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

// Recalculate height on resize
window.addEventListener('resize', () => {
  document.querySelectorAll('.accordion-item.active .accordion-content').forEach(content => {
    content.style.maxHeight = content.scrollHeight + 'px';
  });
});