// Bring the container of the color squares from the DOM
const container = document.getElementById('container');

const allColors = ['#f0f0f0', '#e13c3c', '#f264de', '#ac64f2', 
'#4544ff', '#44d8ff', '#44ff91', '#44ff4b', '#e2ff44', '#ffd544',
'#ff9e44', '#f98224', '#cd3131'];

const ALL_SQUARES = 1089;

for(i=0; i< ALL_SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  container.appendChild(square);
}

function setColor(square) {
  const color = getRandomColor();
 
  square.style.background = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function getRandomColor() {
  newColor = allColors[Math.floor(Math.random() * allColors.length)];

  return newColor;
}