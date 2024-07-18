document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');

    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    const formLogin = document.getElementById('form-login');
    formLogin.addEventListener('submit', function(event) {
        event.preventDefault();
        
        document.getElementById('login-message').innerText = 'Inicio de sesión exitoso. Redirigiendo...';
        document.getElementById('login-message').style.color = 'green';

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });

    const formRegister = document.getElementById('form-register');
    formRegister.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullname = document.getElementById('fullname').value;
        const regEmail = document.getElementById('reg-email').value;
        const regPassword = document.getElementById('reg-password').value;
        console.log('Registrarse con:', fullname, regEmail, regPassword);
        document.getElementById('register-message').innerText = 'Registrando usuario...';
        setTimeout(() => {
            document.getElementById('register-message').innerText = '¡Registro exitoso! Ahora puedes iniciar sesión.';
        }, 1500);
    });
});
