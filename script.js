const btnLogin = document.getElementById('btn-login');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const regexEmail = /^[\w.-]+@\w+\.\w+$/g;
const regexSenha = /^\d{6}$/g;
const checkInfos = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const containerContent = document.getElementById('container-content');
const containerRate = document.getElementById('container-rate');
const containerFamily = document.getElementById('container-family');

function createLabel(id, text) {
  const label = document.createElement('label');
  label.htmlFor = id;
  label.className = 'form-check-label';
  label.innerHTML = text;
  return label;
}

function createInput(type, name, value) {
  const input = document.createElement('input');
  input.type = type;
  input.value = value;
  input.name = name;
  input.id = `input-${input.value.toLowerCase()}`;
  input.className = `form-check-input ${name === 'content' ? 'subject' : ''}`;
  return input;
}

function createChecks(type, name, arrayValues, elementParent) {
  for (let index = 0; index < arrayValues.length; index += 1) {
    const input = createInput(type, name, arrayValues[index]);
    const label = createLabel(input.id, arrayValues[index]);
    const div = document.createElement('div');
    div.className = `form-check ${name === 'rate' ? 'form-check-inline' : ''}`;
    div.appendChild(input);
    div.appendChild(label);
    elementParent.appendChild(div);
  }
}
const arrayFamily = ['Frontend', 'Backend', 'FullStack'];
createChecks('radio', 'family', arrayFamily, containerFamily);

const arrayContent = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
createChecks('checkbox', 'content', arrayContent, containerContent);

const arrayRate = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
createChecks('radio', 'rate', arrayRate, containerRate);

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
  createParagraph(`Nome: ${firstName.value} ${lastName.value}`);
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
