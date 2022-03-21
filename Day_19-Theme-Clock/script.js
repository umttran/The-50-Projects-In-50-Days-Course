// Create variables to bring elements from the DOM
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleBtn = document.querySelector('.toggle');

// Clock Needles Variables
const needleHour = document.querySelector(".needle.hour");
const needleMinute = document.querySelector(".needle.minute");
const needleSecond = document.querySelector(".needle.second");

// Day and Month Arrays
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jun", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec"];

// Clock Setting Function
function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time. getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Rotating the needles
  hourEl.style.transform = `translate(-50%, -100%) 
  rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)
  `;
  minuteEl.style.transform = `translate(-50%, -100%) 
  rotate(${scale(minutes, 0, 60, 0, 360)}deg)
  `;
  secondEl.style.transform = `translate(-50%, -100%) 
  rotate(${scale(seconds, 0, 60, 0, 360)}deg)
  `;
  
  // When the needles reach to 0 degree angle at the end of a full spin, prevent them from going backwards to the starting point
  needleHour.style.transition = `${hours === 0 ? "none" : "all 0.5s ease-in"}`
  needleMinute.style.transition = `${minutes === 0 ? "none" : "all 0.5s ease-in"}`
  needleSecond.style.transition = `${seconds === 0 ? "none" : "all 0.5s ease-in"}`

  // Display the time info
  timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} 
  <span class="ampm">${ampm}</span>`;
  
  // Display the date info
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// Scale Function to map a range of numbers to another range of numbers
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime, 1000);