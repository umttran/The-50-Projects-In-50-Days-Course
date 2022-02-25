// Create variables to bring elements from the DOM
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// Hover to left side
left.addEventListener("mouseenter", () => 
  container.classList.add("hover-left")
)
left.addEventListener("mouseleave", () => 
  container.classList.remove("hover-left")
)

// Hover to right side
right.addEventListener("mouseenter", () => 
  container.classList.add("hover-right")
)
right.addEventListener("mouseleave", () => 
  container.classList.remove("hover-right")
)