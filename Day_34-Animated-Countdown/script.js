// Bring elements from the DOM
const numbers = document.querySelectorAll('.numbers span');
const counter = document.querySelector('.counter');
const replay = document.querySelector('.replay');
const replayBtn = document.getElementById('replay');

runAnimation();

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