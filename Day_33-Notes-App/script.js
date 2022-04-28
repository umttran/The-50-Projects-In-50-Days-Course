// Bring add new note button from the DOM
const addButton = document.getElementById('add');

addButton.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
  <div class="tools">
    <button class="edit">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete">
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>

  <!-- When text edit mode is NOT active the text will show on 'main' div below. -->
  <!-- When text edit mode is NOT active textarea will be hidden. -->
  <!-- When text edit mode is ON 'main' div will be hidden and text area will visible -->
  <!-- The textarea will be used for text editing.-->
  <!-- If there is text, the textarea will be hidden -->

  <div class="main ${text ? '' : 'hidden'}"></div>
  <textarea class="${text ? 'hidden' : ''}"></textarea>
  `
  // Bring elements from the note element
  const deleteButton = note.querySelector('.delete');
  const editButton = note.querySelector('.edit');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  deleteButton.addEventListener('click', () => {
    note.remove();
  });

  // Switching between text edit mode and main div with Edit Button
  editButton.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  })


  document.body.appendChild(note);


}