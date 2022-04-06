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

async function generateJoke() {

  const res = await fetch(jokeURL);
  const data = await res.json();
  let joke = data.joke;

  console.log(joke);
}