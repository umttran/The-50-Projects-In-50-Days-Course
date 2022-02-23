// Create variables to bring elements from the DOM
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes)

checkBoxes()

function checkBoxes() {

  const triggerBottom = window.innerHeight / 7 * 4;

  boxes.forEach(box => {

    // To get the position of each boxes relative to the top
    const boxTop = box.getBoundingClientRect().top;

    // To show or hide images
    if(boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }

  })
}