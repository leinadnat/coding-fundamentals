


const userSearch = document.getElementById('userSearch');
const getUser = document.getElementById('getUser');
const userAvatar = document.querySelector('.userAvatar')
const profile__name = document.querySelector('.profile__name')
const profile__description = document.querySelector('.profile__description')
const fetched__date = document.querySelector('.fetched__date')

getUser.addEventListener('click', searchUserInGit)
userSearch.value = '';

function searchUserInGit () {
  let url = 'https://api.github.com/users/' + userSearch.value
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    userAvatar.innerHTML = `<img src="${data.avatar_url}">`
    profile__name.innerHTML = data.name;
    profile__description.innerHTML = data.bio;
    let dateFormat = new Date(data.created_at).toDateString();
    fetched__date.innerHTML = `Joined at: ${dateFormat}`;
    console.log(newdate)
  })
  .catch(e => {
    console.log(e)
  })
}

