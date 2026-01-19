  window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    // Change 120 to whatever pixel value feels right (test on mobile/desktop)
    if (window.scrollY > 120) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });