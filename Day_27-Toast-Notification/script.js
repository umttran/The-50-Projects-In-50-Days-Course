// Bring elements from the DOM
const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

// Notification Messages
const messages = [
  'Toast Notification One',
  'Toast Notification Two',
  'Toast Notification Three',
  'Toast Notification Four',
  'Toast Notification Five',
  'Toast Notification Six'
];

// Notification Types
const types = [
  'info', 'success', 'error', 'warning', 'dark'
];

// Button Event Listener
button.addEventListener('click', () => createNotification());

// Function to create new random notification with a random type
function createNotification() {
  const newNotification = document.createElement('div');
  newNotification.classList.add('toast');
  
  // Generate random notification message
  newNotification.innerText = getRandomNotification();

  // Give that message a random notification type
  newNotification.classList.add(getRandomType());

  toasts.appendChild(newNotification);

  setTimeout(() => {
    newNotification.remove();
  }, 3000)
}

// Random Notification Message Function 
function getRandomNotification() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}
// Random Notification Type Function
function getRandomType() {
  const randomIndex = Math.floor(Math.random() * types.length);
  return types[randomIndex];
}