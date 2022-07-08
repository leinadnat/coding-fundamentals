const myName = document.querySelector('.myName');
const myAge = document.querySelector('.myAge');
const myHobbies = document.querySelector('.myHobbies');
const fetchMe = document.querySelector('.fetchMe');

fetchMe.addEventListener('click', getMyData);

function getMyData () {
    let url = 'https://api.github.com/gists/6c95db2579fdbbedb5feee88f8803887'
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let myData = JSON.parse(data.files['me.json'].content)
        myName.innerHTML = `Name: ${myData.name}`;
        myAge.innerHTML = `Age: ${myData.age}`;
        
        myData.hobbies.forEach((item) => {
            let li = document.createElement('li');
            li.innerText = item;
            myHobbies.appendChild(li);
            console.log(item)
        })
        
        
    })
    .catch(error => {
        console.log(error)
    })
}