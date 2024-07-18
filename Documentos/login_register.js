document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');

    // Mostrar formulario de registro al hacer clic en "Regístrate"
    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    // Mostrar formulario de inicio de sesión al hacer clic en "Inicia Sesión"
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    // Función para enviar datos del formulario de inicio de sesión (simulado)
    const formLogin = document.getElementById('form-login');
    formLogin.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Mostrar mensaje de éxito
        document.getElementById('login-message').innerText = 'Inicio de sesión exitoso. Redirigiendo...';
        document.getElementById('login-message').style.color = 'green';

        // Redirigir al usuario a la página de inicio después de 2 segundos
        setTimeout(() => {
            window.location.href = 'index.html'; // Cambia 'index.html' por tu página de inicio
        }, 2000); // Espera 2 segundos antes de redirigir
    });

    // Función para enviar datos del formulario de registro (simulado)
    const formRegister = document.getElementById('form-register');
    formRegister.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario de registro
        const fullname = document.getElementById('fullname').value;
        const regEmail = document.getElementById('reg-email').value;
        const regPassword = document.getElementById('reg-password').value;
        console.log('Registrarse con:', fullname, regEmail, regPassword);
        document.getElementById('register-message').innerText = 'Registrando usuario...';
        setTimeout(() => {
            document.getElementById('register-message').innerText = '¡Registro exitoso! Ahora puedes iniciar sesión.';
            // Aquí podrías redirigir al usuario a la página de inicio de sesión o hacer alguna acción adicional
        }, 1500);
    });
});
