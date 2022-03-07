// Bring the tags element from the DOM
const tagsEl = document.getElementById('tags');

// Bring the text area element from the DOM
const textArea = document.getElementById('textarea');

// Focus on text area on page load
textArea.focus();

textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
})

function createTags(input) {
  // Filter is used -> Tags can't be empty 
  // Map is used to trim any white space of each input
  const tags = input.split(',')
  .filter(tag => tag.trim() !== '')
  .map(tag => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;

    tagsEl.appendChild(tagEl);
  })
}