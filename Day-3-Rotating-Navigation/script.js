// Create variables to bring elements from the DOM
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

// Event Listeners
open.addEventListener("click", () => 
  container.classList.add("show-nav")
);

close.addEventListener("click", () => 
  container.classList.remove("show-nav")
);