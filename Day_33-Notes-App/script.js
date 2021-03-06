// Bring add new note button from the DOM
const addButton = document.getElementById('add');

addButton.addEventListener('click', () => addNewNote());

// Fetch notes text data from local storage if excist
const notes = JSON.parse(localStorage.getItem('notes'));

// Send stored notes text data to the function
if(notes) {
  notes.forEach(note => {
    addNewNote(note);
  })
}

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
  <div class="tools">
    <div class="edit-mode">Edit Mode</div>
    <div>
      <button class="edit">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button class="delete">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
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

  // If there are stored notes text, add them to main and textarea elements
  textArea.value = text;
  main.innerHTML = marked.parse(text);

  deleteButton.addEventListener('click', () => {
    note.remove();

    updateLocalStorage();
  });

  // Switching between text edit mode and main div with Edit Button
  editButton.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');

    editModeInfo();
  })

  // Add the text written in textarea in edit mode to main div as content
  // Let user to be able to use the Markdown rules in text
  textArea.addEventListener('input', (e) => {
    // The destructuring to pull out the value from e.target
    const { value } = e.target;

    main.innerHTML = marked.parse(value);

    updateLocalStorage();
  })

  // Show or hide edit mode info text
  function editModeInfo() {
    const tools = note.querySelector('.tools');
    const editModeInfo = tools.querySelector('.edit-mode');

    textArea.classList.contains('hidden') ? 
    editModeInfo.style.visibility = 'hidden' : 
    editModeInfo.style.visibility = 'visible';
  }

  // Add note element to the body
  document.body.appendChild(note);

}

function updateLocalStorage() {
  const notesText = document.querySelectorAll('textarea');

  const notes = [];

  // Get each notes text and add them to the notes array
  notesText.forEach(note => notes.push(note.value));

  // Add notes array to the local storage with the key 'notes'
  localStorage.setItem('notes', JSON.stringify(notes));
}