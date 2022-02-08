// Select all elements with class "panel"
const panels = document.querySelectorAll(".panel");

// Remove class "active" from all elements with class "panel" & Add class "active" to selected element
panels.forEach( (panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  })
});

// Function to remove all classes "active"
function removeActiveClasses () {
  panels.forEach(panel => {
    panel.classList.remove("active");
  })
}