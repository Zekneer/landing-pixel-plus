const $ = require('jquery');

module.exports.closeModal = function closeModal(event) {
  if (event.target !== this && !this.classList.contains('modal__close-button')) return;
  $('.modal').fadeOut(300);
};
