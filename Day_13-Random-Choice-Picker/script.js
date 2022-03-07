// Bring the tags element from the DOM
const tagsEl = document.getElementById('tags');

// Bring the text area element from the DOM
const textArea = document.getElementById('textarea');

// Focus on text area on page load
textArea.focus();

textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  // Check if the Enter is pressed
  if(e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10);

    randomSelect();
  }
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

// Random Selection Process
function randomSelect() {
  // Number of times it's going to highlight each one before it stops
  const times = 20;

  // Highlight random tags 
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighligtTag(randomTag)
    },100)

  }, 100);

  // Stop random highlighting and select a tag to highlight
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighligtTag(tag) {
  tag.classList.remove('highlight');
}
// End of Random Selection Process