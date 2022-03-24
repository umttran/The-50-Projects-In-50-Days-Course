// Bring canvas element from the DOM and create context
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Bring toolbox elements from the DOM
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

// Create variables
let size = 10;
let color = 'black';
let x;
let y;
let isPressed = false; // To check if the mouse is pressed or not

// When the mouse is pressed
canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  // Assign the cursor positions
  x = e.offsetX;
  y = e.offsetY;
})

// When the mouse is released
canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  // Assign the cursor positions
  x = undefined;
  y = undefined;
})

// When the cursor moves while mouse is pressed
canvas.addEventListener('mousemove', (e) => {
  if(isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
})

// Circle Drawing Function
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#:~:text=ctx.arc(75%2C%2075%2C%2050%2C%200%2C%20Math.PI%20*%202%2C%20true)%3B
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// Straight Line Drawing Function 
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2; 
  // Multiply lineWidth by 2 to make the line the same thickness as the circle
  ctx.stroke();
}

// Toolbox Elements Event Listeners
// Increase Button
increaseBtn.addEventListener('click', () => {
  size += 5;

  if(size >50) {
    size = 50;
  }
  
  updateSizeInfo();
});

// Decrease Button
decreaseBtn.addEventListener('click', () => {
  size -= 5;

  if(size < 5) {
    size = 5;
  }

  updateSizeInfo();
});

// Update Size Info on Toolbox
function updateSizeInfo() {
  sizeEL.innerText = size;
};

// Color Change
colorEl.addEventListener('change', (e) => {
  color = e.target.value;
});

// Clear Drawing
clearEl.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
});
// END - Toolbox Elements Event Listeners