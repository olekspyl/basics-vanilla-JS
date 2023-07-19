import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textEl = document.querySelector('textarea');
const KEY_FORM = 'feedback-form-state';
update();

formEl.addEventListener('input', throttle(onFormInput, 300));

function onFormInput(e) {
  const form = e.currentTarget.elements;
  const email = form.email.value;
  const message = form.message.value;

  const obj = {
    email,
    message,
  };

  localStorage.setItem(KEY_FORM, JSON.stringify(obj));
}

function update() {
  let parsed;
  try {
    parsed = JSON.parse(localStorage.getItem(KEY_FORM)) ?? {};
  } catch (error) {
    console.log(error.message);
  }
  textEl.value = parsed.message ?? '';
  inputEl.value = parsed.email ?? '';
}

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  formEl.reset();
  textEl.value = '';
  localStorage.clear();
}
