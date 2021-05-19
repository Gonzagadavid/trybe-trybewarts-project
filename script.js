const btnLogin = document.getElementById('btn-login');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const regexEmail = /^[\w.-]+@\w+\.\w+$/g;
const regexSenha = /^\d{6}$/g;
const checkInfos = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function checkFormat(event) {
  event.preventDefault();
  if (!regexEmail.test(email.value) || !regexSenha.test(senha.value)) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

btnLogin.addEventListener('click', checkFormat);

function enabledAndDisabled(event) {
  btnSubmit.disabled = event.target.checked !== true;
}

checkInfos.addEventListener('change', enabledAndDisabled);

function countChar(event) {
  const result = 500 - event.target.value.length;
  counter.innerHTML = result;
}

textarea.addEventListener('input', countChar);
