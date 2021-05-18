const btnLogin = document.getElementById('btn-login');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const regexEmail = /^[\w.-]+@\w+\.\w+$/g;
const regexSenha = /^\d{6}$/g;

function checkFormat(event) {
  event.preventDefault();
  if (!regexEmail.test(email.value) || !regexSenha.test(senha.value)) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

btnLogin.addEventListener('click', checkFormat);
