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
    getUserRepos(username);
  } catch (error) { 
    if(error.response.status == 404){
      createErrorCard('User Not Found');
    }
  }

}

// Function to create User Card
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

// Function to fetch User Repos
async function getUserRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos');
    addReposToCard(data);
  } catch (error) { 
    createErrorCard('Error: Problem Fetching Repos');
  }
}

// Function to Add Repos to User Card
function addReposToCard(repos) {
  const reposElement = document.getElementById('repos');

  repos.slice(0, 5).forEach(repo => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;

    reposElement.appendChild(repoEl);
  })
}

// Function to create Error Card
function createErrorCard(message) {
  const errorCard = `
    <div class='card'>
      <h1>${message}</h1>
    </div>
  `;

  main.innerHTML = errorCard;
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