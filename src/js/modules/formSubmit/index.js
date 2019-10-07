function verifyEmail(email) {
  return email.match(/.+@.+\..+/i);
}

function verifyName(name) {
  return name.length;
}

function verifyTel(tel) {
  return tel.length;
}

const form = document.querySelector('.form.modal__form');
const { email, name, tel } = form;

function submit(event) {
  event.preventDefault();
  const errorItems = form.querySelectorAll('.form__input_error');
  errorItems.forEach((errorItem) => {
    errorItem.classList.remove('form__input_error');
    errorItem.placeholder = '';
  });
  const errors = [];

  if (!verifyEmail(email.value)) errors.push(email);
  if (!verifyName(name.value)) errors.push(name);
  if (!verifyTel(tel.value)) errors.push(tel);

  if (!errors.length) {
    form.submit();
  } else {
    errors.forEach((input) => {
      input.classList.add('form__input_error');
      input.placeholder = 'Это поле обязательно для заполнения';
    });
  }
}

form.addEventListener('submit', submit);
