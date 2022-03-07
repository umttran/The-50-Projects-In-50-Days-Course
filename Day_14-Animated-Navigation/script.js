// Create variables to bring elements from the DOM
const nav = document.getElementById('nav');
const btnToggle = document.getElementById('btnToggle');

// When the toggle button is clicked
btnToggle.addEventListener(('click'), () => nav.classList.toggle('active'));