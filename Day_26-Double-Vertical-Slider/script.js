// Bring elements from the DOM
const sliderContainer = document.querySelector('.slider-container');
const textSlide = document.querySelector('.text-slide');
const imageSlide = document.querySelector('.image-slide');
const downBtn = document.querySelector('.down-btn');
const upBtn = document.querySelector('.up-btn');

// Number of Slides
const slidesLength = imageSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

// Place the image of the first Text Slide on startup 
imageSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

// Event Listeners
upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => {
  changeSlide('down');
  if(isDownBtnClicked === false){
    showUpBtn();
  }
});

// To check if the Down Button is clicked
let isDownBtnClicked = false;

// Show the Up Button when the Down button is clicked for the first time
// This function will be triggered only once
function showUpBtn() {
  isDownBtnClicked = true;
  upBtn.style.opacity = '1';
  upBtn.style.pointerEvents = 'auto';
}

// Image Change Function
const changeSlide = (direction) => {
  // Get Height Info
  const sliderHeight = sliderContainer.clientHeight;

  // Button Conditions
  if(direction === "up") {
    activeSlideIndex++;
    if(activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if(direction === 'down') {
    activeSlideIndex--;
    if(activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  // Set Position of Text and Image
  textSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
  imageSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;

}