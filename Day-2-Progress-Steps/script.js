// Create variables to bring elements from the DOM
const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

// The variable will be used to know which step is active(like an index) 
let currentActive = 1;

nextBtn.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
})

prevBtn.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
})

// Function to update step circles status & progress bar
function update() {
  // Circle status
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    }
    else {
      circle.classList.remove("active");
    }
  })

  // Progress bar status
  // My solution:
  progress.style.width = ( (100 / (circles.length - 1) ) * (currentActive - 1) ) + "%";
  
  // Course solution:
  // const activeCircles = document.querySelectorAll(".active");
  // progress.style.width = (activeCircles.length - 1) / (circles.length - 1) * 100 + "%";
}
