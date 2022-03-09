// Create variables to bring elements from the DOM
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percenteage = document.getElementById('percenteage');
const remained = document.getElementById('remained');

// Add event listener to all small cups
smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => highlightCups(index))
})

// Highlight function - index is selectedIndex for the function.
function highlightCups(selectedIndex) {
  smallCups.forEach((cup, idx ) => {
    if(idx <= selectedIndex) {
      cup.classList.add('full');
    }
    else {
      cup.classList.remove('full');
    }
  })
}