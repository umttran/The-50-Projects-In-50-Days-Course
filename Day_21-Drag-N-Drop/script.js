const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Event Listeners for Start-End steps of Drag&Drop Process
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Event Listeners for other steps of Drag&Drop Process
for(const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Create functions for Drag and Drop Process
function dragStart() {
  // Append hold class
  this.className += ' hold';
  
  setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(evt) {
  // To stop the default behaviour of the dragover event
  evt.preventDefault();
}

function dragEnter(evt) {
  // To stop the default behaviour of the dragenter event
  evt.preventDefault();

  // Append hovered class
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';

  this.append(fill);
}
// END - Create functions for Drag and Drop Process