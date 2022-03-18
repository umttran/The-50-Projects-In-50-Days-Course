// Create variables to bring elements from the DOM
const body = document.body;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// A variable to show initial slide and
// then will be used to know which slide we are on
let activeSlide = 0;

// Call the function to set background-image to body
setBgToBody();

// To set the background image to the body according to the active slide image
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}