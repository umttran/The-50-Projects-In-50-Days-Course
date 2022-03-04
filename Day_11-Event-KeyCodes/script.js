// Create a variable to bring #insert div
const insert = document.getElementById('insert');

// Add Event Listener to run when key is pressed 
// Print key information dynamically in HTML
window.addEventListener('keydown', (e) => {
  insert.innerHTML =
  `
    <div class="key">
      ${e.key === ' ' ? 'Space' : e.key}
      <small>event.key</small>
    </div>

    <div class="key">
      ${e.keyCode}
      <small>event.keyCode</small>
    </div>

    <div class="key">
      ${e.code}
      <small>event.code</small>
    </div>
  `
})