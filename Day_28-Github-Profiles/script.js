// The root Github URL
const APIURL = 'https://api.github.com/users/';

// Bring elements from the DOM
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUserInfo('umttran');

// Function to fetch User data from Github
async function getUserInfo(username){

  try {
    const { data } = await axios(APIURL + username);
    
    createUserCard(data);
  } catch (error) {
    console.log(error);
  }

}

// Function to creatte User Card
function createUserCard(user) {
  const userCard = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}"
          alt="${user.name}-profile-picture" class="avatar">
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio ? user.bio : '<em style="font-size:12px">No Bio Added</em>'}</p>

        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos">
          <a href="#" class="repo">Repo 1</a>
          <a href="#" class="repo">Repo 2</a>
          <a href="#" class="repo">Repo 3</a>
        </div>
      </div>
    </div>
  `;

  main.innerHTML = userCard;
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