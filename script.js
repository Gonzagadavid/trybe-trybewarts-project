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

const divText = document.createElement('div');
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const house = document.getElementById('house');
const inputEmail = document.getElementById('input-email');
const evaluationForm = document.getElementById('evaluation-form');

function createParagraph(text) {
  const p = document.createElement('p');
  p.innerHTML = text;
  divText.appendChild(p);
}

function insertMaterias(array) {
  let text = 'Matérias:';
  for (let index = 0; index < array.length; index += 1) {
    text += ` ${array[index].value}`;
    if (index !== array.length - 1) text += ',';
  }
  createParagraph(text);
}

function insertInfos(e) {
  e.preventDefault();
  const fullName = `Nome: ${firstName.value} ${lastName.value}`;
  createParagraph(fullName);
  createParagraph(`Email: ${inputEmail.value}`);
  createParagraph(`Casa: ${house.value}`);
  const family = document.querySelector('input[name="family"]:checked');
  createParagraph(`Família: ${family.value}`);
  const materias = document.querySelectorAll('input[name="content"]:checked');
  insertMaterias(materias);
  const rate = document.querySelector('input[name="rate"]:checked');
  createParagraph(`Avaliação: ${rate.value}`);
  createParagraph(`Observações: ${textarea.value}`);
  evaluationForm.innerHTML = '';
  evaluationForm.appendChild(divText);
}

btnSubmit.addEventListener('click', insertInfos);
