// Bring elements from the DOM
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('pw-length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

// Generate Password button event listener
generateEl.addEventListener('click', () => {
  // Requested password length info
  const length = lengthEl.value;
  // Requested password options info(return will be true or false)
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  // The return from the generatePassword function will be inserted to result element
  resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
});



// Random Character Generation Functions
// Lower Character
function randomLowerChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// Upper Character
function randomUpperChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// Number
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// Symbols from specific string
function randomSymbol() {
  const symbols = '!&%.,:;_-@#+-/*=';

  return symbols[Math.floor(Math.random() * symbols.length)]
}

// Used method source:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
// Character set source:
// https://www.w3schools.com/charsets/ref_html_ascii.asp

// End - Random Character Generation Functions
