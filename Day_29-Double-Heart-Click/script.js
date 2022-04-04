// Bring elements from the DOM
const image = document.querySelector('.image');
const numberOfLikes = document.querySelector('#numOfLikes');

let clickTime = 0;

// Create custom double click event instead of using default dblclick event 
image.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if((new Date().getTime() - clickTime) < 2000) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime;
    }
  }
});

// Heart Creation Function (when double click function is triggered)
const createHeart = (e) => {
  // Create heart element with its classes
  const heartIcon = document.createElement('i');
  heartIcon.classList.add('fa-solid');
  heartIcon.classList.add('fa-heart');

  // Get cursor click position relative to entire page
  const cursorX = e.clientX;
  const cursorY = e.clientY;

  // Get the distances between the image and left&top of the page
  const offsetLeft = e.target.offsetLeft;
  const offsetTop = e.target.offsetTop;

  // Cursor click position relative to the Image borders
  const insideX = cursorX - offsetLeft;
  const insideY = cursorY - offsetTop;

// Set heart icon position to cursor click point 
// (absolute position is given to Icon in css file)
  heartIcon.style.top = `${insideY}px`;
  heartIcon.style.left = `${insideX}px`;

  image.appendChild(heartIcon);

  // Remove created Heart element from the DOM
  setTimeout( () => heartIcon.remove(), 2000 );
}