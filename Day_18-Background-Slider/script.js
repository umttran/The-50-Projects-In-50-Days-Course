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

// Function to set active slide
function setActiveSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  })

  slides[activeSlide].classList.add('active');
}

// Event Listeners of Slider Arrows
prevBtn.addEventListener('click', () => {
  activeSlide++;

  if(activeSlide > slides.length-1) {
    activeSlide = 0;
  }

  console.log(activeSlide);
  setBgToBody();
  setActiveSlide();
});

nextBtn.addEventListener('click', () => {
  activeSlide--;

  if(activeSlide > slides.length-1) {
    activeSlide = 0;
  }else if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});
// End - Event Listeners of Slider Arrows