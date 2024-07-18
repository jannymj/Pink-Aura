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
    setInterval(autoSlide, 4000); // Cambia de imagen cada 4 segundos
});
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id, name, price, image) {
    const product = cart.find(item => item.id === id);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

}
