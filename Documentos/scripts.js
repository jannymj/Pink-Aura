function toggleMenu() {
    function toggleMenu() {
        const mobileMenuList = document.querySelector('.mobile-menu-list');
        mobileMenuList.classList.toggle('show');
    }
    let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });
}

function moveSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}

function autoSlide() {
    moveSlide(1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(autoSlide, 3000); // Cambia de imagen cada 3 segundos
});

}
