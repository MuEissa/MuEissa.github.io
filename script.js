window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    document.querySelector('.layer-1').style.transform = `translateY(${scrollY * 0.25}px)`;
    document.querySelector('.layer-2').style.transform = `translateY(${scrollY * 0.5}px)`;
    document.querySelector('.layer-3').style.transform = `translateY(${scrollY * 0.75}px)`;
    document.querySelector('.layer-4').style.transform = `translateY(${scrollY * 0.3}px)`; // Clouds
    document.querySelector('.layer-5').style.transform = `translateY(${scrollY * 0.2}px)`; // Mountains
    
    document.querySelector('.rock-1').style.transform = `translateY(${400 - scrollY * 0.8}px)`;
    document.querySelector('.rock-2').style.transform = `translateY(${200 - scrollY * 0.6}px)`;
    document.querySelector('.rock-3').style.transform = `translateY(${500 - scrollY * 0.4}px)`;
    document.querySelector('.rock-4').style.transform = `translateY(${600 - scrollY * 0.5}px)`;
    document.querySelector('.rock-5').style.transform = `translateY(${600 - scrollY * 0.7}px)`;
    document.querySelector('.rock-6').style.transform = `translateY(${400 - scrollY * 0.7}px)`;
    document.querySelector('.rock-7').style.transform = `translateY(${600 - scrollY * 0.5}px)`;
    document.querySelector('.rock-8').style.transform = `translateY(${200 - scrollY * 0.2}px)`;
    document.querySelector('.rock-9').style.transform = `translateY(${200 - scrollY * 0.4}px)`;
});
