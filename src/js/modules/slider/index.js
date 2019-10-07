const $ = require('jquery');

let slideInterval = setInterval(nextSlide, 4000);

$('.slider__next').click(() => {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4000);
  nextSlide();
});

$('.slider__prev').click(() => {
  clearInterval(slideInterval);
  slideInterval = setInterval(prevSlide, 4000);
  prevSlide();
});

function nextSlide() {
  const currentImage = $('.slider__slide_active');
  const currentImageIndex = $('.slider__slide_active').index();
  const nextImageIndex = currentImageIndex + 1;
  const nextImage = $('.slider__slide').eq(nextImageIndex);
  currentImage.removeClass('slider__slide_active');

  if (nextImageIndex == $('.slider__slide:last').index() + 1) {
    $('.slider__slide:first').addClass('slider__slide_active');
  } else {
    nextImage.addClass('slider__slide_active');
  }
}

function prevSlide() {
  const currentImage = $('.slider__slide_active');
  const currentImageIndex = $('.slider__slide_active').index();
  const prevImageIndex = currentImageIndex - 1;
  const prevImage = $('.slider__slide').eq(prevImageIndex);
  currentImage.removeClass('slider__slide_active');

  if (prevImageIndex < 0) {
    $('.slider__slide:last').addClass('slider__slide_active');
  } else {
    prevImage.addClass('slider__slide_active');
  }
}
