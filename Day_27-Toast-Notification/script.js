// Bring elements from the DOM
const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Toast Notification One',
  'Toast Notification Two',
  'Toast Notification Three',
  'Toast Notification Four',
  'Toast Notification Five',
  'Toast Notification Six'
]

// Button Event Listener
button.addEventListener('click', () => createNotification());

function createNotification() {
  const newNotification = document.createElement('div');
  newNotification.classList.add('toast');

  newNotification.innerText = getRandomNotification();

  toasts.appendChild(newNotification);

  setTimeout(() => {
    newNotification.remove();
  }, 3000)
}

function getRandomNotification() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}