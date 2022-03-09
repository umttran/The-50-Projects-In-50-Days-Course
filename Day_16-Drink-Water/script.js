// Create variables to bring elements from the DOM
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percenteage = document.getElementById('percenteage');
const remained = document.getElementById('remained');

// Add event listener to all small cups
smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => highlightCups(index))
})

// Highlight function - index become selected cup index for the function
function highlightCups(selectedIndex) {
  // If user selects a cup and clicks it again, empty that cup back
  if(smallCups[selectedIndex].classList.contains('full') && 
  !smallCups[selectedIndex].nextElementSibling?.classList.contains('full')) {
    selectedIndex--;
  }
  
  smallCups.forEach((cup, idx ) => {
    if(idx <= selectedIndex) {
      cup.classList.add('full');
    }
    else {
      cup.classList.remove('full');
    }
  })
}