'use strict';

const cards = document.querySelectorAll('.carousel__item');
const buttonSlideRight = document.querySelector('.carousel__btn_next');
const buttonSlideLeft = document.querySelector('.carousel__btn_prev');
const carousel = document.querySelector('.carousel');
carousel.style.transition = 'transform 1s';
let SliderCounter = 0;

buttonSlideRight.onclick = () => {
  if (SliderCounter <= -((cards.length - 1) * 800)) {
    return;
  }
  SliderCounter -= 800;
  carousel.style.transform = `translateX(${SliderCounter}px)`;
};

buttonSlideLeft.onclick = () => {
  if (SliderCounter >= 0) {
    return;
  }
  SliderCounter += 800;
  carousel.style.transform = `translateX(${SliderCounter}px)`;
};


