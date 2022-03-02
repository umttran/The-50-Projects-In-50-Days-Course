// Create variables to bring elements from the DOM
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// To get another joke when button is clicked 
jokeBtn.addEventListener('click', generateJoke)

generateJoke();

// Generate random joke using Async/Await
async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}


// Generate random joke using with Fetch API 
// function generateJoke() {
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   };

//   fetch('https://icanhazdadjoke.com', config)
//   .then(res => res.json())
//   .then(data => {
//     jokeEl.innerHTML = data.joke;
//   });
// }