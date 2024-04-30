// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });

    // Add active class to the clicked link
    document.querySelectorAll('a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

// Highlight navigation links based on scroll position
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 50;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      const id = section.getAttribute('id');
      document.querySelectorAll('a').forEach(link => {
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
});
