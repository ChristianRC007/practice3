$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
  dots: true,
  slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slider__button--left" aria-label="Previous" type="button"><svg><use href="./images/sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button class="slider__button--right" aria-label="Next" type="button"><svg><use href="./images/sprite.svg#icon-arrow-right"></use></svg></button>'
  });
});