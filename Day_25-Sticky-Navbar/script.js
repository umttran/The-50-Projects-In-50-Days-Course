// Bring Navbar from the DOM
const nav = document.querySelector('.nav');

window.addEventListener('scroll', styleNav);

function styleNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}