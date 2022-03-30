// Bring elements from the DOM
const sliderContainer = document.querySelector('.slider-container');
const textSlide = document.querySelector('.text-slide');
const imageSlide = document.querySelector('.image-slide');
const downBtn = document.querySelector('.down-btn');
const upBtn = document.querySelector('.up-btn');

// Number of Slides
const slidesLength = imageSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

// Place the last text in the correct position
textSlide.style.top = `-${(slidesLength - 1) * 100}vh`;