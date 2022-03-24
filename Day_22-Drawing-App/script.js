// Bring canvas element from the DOM and create context
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Create variables
let size = 10;
let color = 'black';
let x;
let y;

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

// Call functions for sample drawings
drawCircle(300,550);
drawLine(0 , 50, 270, 500);