// Create a variable to bring in toggles buttons
const toggles = document.querySelectorAll(".faq-toggle");

// To toggle active class for each FAQ item
 toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  })
}) 