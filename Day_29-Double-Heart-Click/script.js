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

  image.appendChild(heartIcon);
}