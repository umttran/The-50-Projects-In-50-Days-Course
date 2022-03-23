const buttons = document.querySelectorAll('.rippleBtn');

buttons.forEach(button => {
  button.addEventListener('click', function(e){
    // Coordinates of the clicked point relative to the entire viewport
    const x = e.clientX;
    const y = e.clientY;

    // Coordinates of the button starter points on X and Y axis
    const buttonLeft = e.target.offsetLeft;
    const buttonTop = e.target.offsetTop;

    // Coordinates of the clicked point relative to the button itself
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    
    console.log(xInside, yInside);

    const circle = document.createElement('span');
    circle.classList.add('circle');

    // Assign the coordinates of the clicked point of the button to the circle class
    circle.style.left = xInside + 'px';
    circle.style.top = yInside + 'px';

    this.appendChild(circle);

    // Remove the element from the DOM after click effect 
    setTimeout(() => {
      circle.remove();
    }, 500); 
  })
})