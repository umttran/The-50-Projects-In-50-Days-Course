// Bring elements from the DOM
const images = document.getElementById('images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const img = document.querySelectorAll('#images img');

// Index of displayed image
let index = 0;

// To keep slides running
let interval = setInterval(run, 2000)

function run() {
  index++;
  changeImage();
}

function changeImage() {
  // To return to the first image after the last image is displayed
  if (index > img.length - 1) {
    index = 0;
  } 
  // If the prev button is pressed on the first photo(index=0), it will go to the last photo.
  else if (index < 0) {
    index = img.length -1;
  }
  
  images.style.transform = `translateX(${-index * 480}px)`
}

// Button Event Listeners
nextBtn.addEventListener('click', () => {
  index++;
  changeImage();
})

prevBtn.addEventListener('click', () => {
  index--;
  changeImage();
})
// END - Button Event Listeners

