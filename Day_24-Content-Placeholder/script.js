// Create variables to bring elements from the DOM
const headers = document.querySelectorAll('.header');
const titles = document.querySelectorAll('.title');
const excerpts = document.querySelectorAll('.excerpt');
const profile_images = document.querySelectorAll('.profile-img');
const names = document.querySelectorAll('.name');
const dateElements = document.querySelectorAll('.date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

// User Profile Pictures
const profileImages = ['<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="profile-pic">',
'<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="profile-pic">',
'<img src="https://randomuser.me/api/portraits/women/65.jpg" alt="profile-pic">'];

// User Names
const allNames = ['Jane Doe', 'John Doe', 'Mary Jane'];

// Current Date Info
const months = ["Jun", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec"];
const time = new Date();
const month = time.getMonth();
const date = time.getDate();
const year = time.getFullYear();

// Function to show card content end of animation
function getData() {
  headers.forEach((header) => header.innerHTML = '<img src="https://source.unsplash.com/random/" alt=""/>');
  
  titles.forEach((title) => title.innerHTML = 'Lorem ipsum dolor sit amet');

  excerpts.forEach((excerpt) => excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis');
  
  profileImages.forEach((profileImg) => {
    const index = profileImages.indexOf(profileImg);

    profile_images[index].innerHTML = profileImages[index];
  });

  allNames.forEach((personName) => {
    const index = allNames.indexOf(personName);

    names[index].innerHTML = allNames[index];
  });

  dateElements.forEach((dateEl) => {
    dateEl.innerHTML = `${months[month]} ${date}, ${year}`;
  });
  
  // Remove classes to stop animation
  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

// setTimeout for Animation Duration
setTimeout(getData, 2500);