// Create variables to bring elements from the DOM
const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

// Variable to count 0 to 100
let load = 0;

// Variable for setInterval method
let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  // Text in loadingText Div
  loadingText.innerText = `Headbang is loading ${load}%`

  // Set the loading text opacity from 1 to 0 as the load value goes from 0 to 100
  loadingText.style.opacity = scale(load, 0, 100, 1, 0)

  // Set image blur from 30 to 0 as the load value goes from 0 to 100
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}