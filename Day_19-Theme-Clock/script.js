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