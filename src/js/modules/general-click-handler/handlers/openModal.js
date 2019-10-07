const $ = require('jquery');

module.exports.openModal = function openModal(event) {
  event.preventDefault();
  $('.modal').fadeIn(300);
};
