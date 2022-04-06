// Bring elements from the DOM
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed-input');
// To generate random joke
const baseURL = "https://v2.jokeapi.dev/"
const categories = ["Programming", "Misc", "Pun", "Spooky",];
const params = [
    "blacklistFlags=nsfw,religious,racist,political,sexist,explicit",
    "type=single"
  ];

const jokeURL = (baseURL + "/joke/" + categories.join(",") + "?" + params.join("&"));

generateJoke();

// Generate random joke using Async/Await
async function generateJoke() {

  const res = await fetch(jokeURL);
  const data = await res.json();
  const joke = data.joke;
 
  // Index variable will be used for where we are in the text.
  // Text is going to be typing one by one.
  let index = 1;

  // Variable for typing speed
  let speed = 100 / speedEl.value;

  writeText();
  
  // Function to write the joke to HTML
  function writeText() {
    
    textEl.innerText = joke.slice(0, index);
    
    // To start over typing the joke again
    if(index == joke.length) {
      index = 0;
    }

    index++;

    setTimeout(writeText, speed);
  }

  console.log(joke);
}