const loginForm = document.querySelector('.wrapper:first-of-type');
const registerForm = document.querySelector('.wrapper:last-of-type');

const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link a');

registerForm.style.display = 'none';

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    registerForm.style.display = 'block';
});

