// Bring elements from the DOM
const numbers = document.querySelectorAll('.numbers span');
const counter = document.querySelector('.counter');
const replay = document.querySelector('.replay');
const replayBtn = document.getElementById('replayBtn');

runAnimation();

// Replay button functionality to reset and replay
function replayAnimation() {
  counter.classList.remove('hideEl');
  replay.classList.remove('showEl');

  numbers.forEach((number) => {
    number.classList.value = '';
  });

  numbers[0].classList.add('in');
}

function runAnimation() {
  numbers.forEach( (number, index) => {
    
    const lastIndex = numbers.length - 1;

    number.addEventListener('animationend', (e) => {
      if(e.animationName === 'goIn' && index!== lastIndex){
        number.classList.remove('in');
        number.classList.add('out');
      } else if (e.animationName === 'goOut' && number.nextElementSibling) {
        number.nextElementSibling.classList.add('in');
      }else {
        counter.classList.add('hideEl')
        replay.classList.add('showEl')
      }
    })

  })
}

// Event Listener for replay button
replayBtn.addEventListener('click', () => {
  replayAnimation();
  runAnimation();
})