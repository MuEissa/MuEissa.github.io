// JavaScript
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelector('.background').style.transform = `translateY(${scrollY * 0.5}px)`;
    document.querySelector('.midground').style.transform = `translateY(${scrollY * 0.3}px)`;
    document.querySelector('.foreground').style.transform = `translateY(${scrollY * 0.1}px)`;
    // Add more interactive effects here
  });
