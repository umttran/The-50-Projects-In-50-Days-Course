// The root Github URL
const APIURL = 'https://api.github.com/users/';

getUserInfo('umttran');

async function getUserInfo(username){

  try {
    const { data } = await axios(APIURL + username);
    
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  
}