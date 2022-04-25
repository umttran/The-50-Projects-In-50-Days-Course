// Bring elements from the DOM
const options = document.querySelectorAll('.option');
const goodOption = document.getElementById('good');
const cheapOption = document.getElementById('cheap');
const fastOption = document.getElementById('fast');

options.forEach(option => option.addEventListener('change', (e) => 
editUserSelection(e.target) ));

function editUserSelection(chosenOption) {
  if(goodOption.checked && cheapOption.checked && fastOption.checked) {
    if(goodOption === chosenOption) {
      fastOption.checked = false;
    }
    
    if(cheapOption === chosenOption) {
      goodOption.checked = false;
    }

    if(fastOption === chosenOption) {
      cheapOption.checked = false;
    }
  }
}