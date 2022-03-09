// Create variables to bring elements from the DOM
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

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

  updateBigCup();
}

function updateBigCup() {
  const fullSmallCups = document.querySelectorAll('.cup-small.full').length;
  const totalSmallCups = smallCups.length;

  if(fullSmallCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  }else{
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullSmallCups / totalSmallCups * 330}px`;
    percentage.innerText = `${fullSmallCups / totalSmallCups * 100}%`;
  }
  
  if(fullSmallCups === totalSmallCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  }else{
    remained.style.visibility = 'visible';
    remained.style.height = "39px";
    liters.innerText = `${2 - (250 * fullSmallCups / 1000)}L`;
  }
}