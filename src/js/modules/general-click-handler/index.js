const { openModal } = require('./handlers/openModal');
const { closeModal } = require('./handlers/closeModal');

document.addEventListener('click', (event) => {
  let handlerTarget;

  handlerTarget = event.target.closest('.header__btn-feedback');
  if (handlerTarget) {
    return openModal.call(handlerTarget, event);
  }

  handlerTarget = event.target.closest('.modal__close-button') || event.target.closest('.modal');
  if (handlerTarget) {
    return closeModal.call(handlerTarget, event);
  }
});
