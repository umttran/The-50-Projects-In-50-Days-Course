// The root Github URL
const APIURL = 'https://api.github.com/users/';

// Bring elements from the DOM
const form = document.getElementById('form');
const search = document.getElementById('search');

getUserInfo('umttran');

async function getUserInfo(username){

  try {
    const { data } = await axios(APIURL + username);
    
    console.log(data);
  } catch (error) {
    console.log(error);
  }

}

// Form Event Listener
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = search.value;

  if(user) {
    getUserInfo(user);

    search.value = '';
  }
})