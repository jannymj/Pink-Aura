function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var menuToggle = document.querySelector('.menu-toggle');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}
