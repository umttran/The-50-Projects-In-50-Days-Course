// Variables to bring counter elements from the DOM
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    // To change data-target type to number, prepend '+'
    const target = +counter.getAttribute('data-target');

    // To change innerText type of counter to number, prepend '+'
    const counterValue = +counter.innerText;
    
    const increment = target / 200;

    if( counterValue < target) {
      counter.innerText = `${Math.ceil(counterValue + increment)}`

      setTimeout(updateCounter, 1);
    }

  }

  updateCounter();
})