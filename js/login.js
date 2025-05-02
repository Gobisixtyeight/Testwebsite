
  const showLogin = document.getElementById('showLogin');
  const showRegister = document.getElementById('showRegister');
  const loginForm = document.querySelector('.login-form');
  const registerForm = document.querySelector('.register-form');
  const indicator = document.getElementById('toggleIndicator');

  showLogin.addEventListener('click', () => {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    showLogin.classList.add('active');
    showRegister.classList.remove('active');
    indicator.style.left = '0%';
  });

  showRegister.addEventListener('click', () => {
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    showRegister.classList.add('active');
    showLogin.classList.remove('active');
    indicator.style.left = '50%';
  });

