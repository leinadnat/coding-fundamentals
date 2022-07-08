const cat__card = document.querySelector('.cat__card')
const catImage = document.querySelector('.cat__card img')
const catName = document.querySelector('.cat__card h2')
const catDescription = document.querySelector('.cat__card p')
const catProfileUrl = document.querySelector('.cat__card a')
const catProfileBtn = document.querySelector('.cat__card a button')
const cat__section = document.querySelector('.cat__section')

const API_URL = 'https://api.thecatapi.com/v1/breeds';
fetch(API_URL)
.then(res => res.json())
.then(data => {
    
    let myData = data
    console.log(data)
    console.log(myData)
    // console.log(typeof data)
    // console.log(data[0])
    // console.log(data[0].image)
    // console.log(data[0].image.url)
    // console.log(catImage.currentSrc)

    // catImage.src = data[0].image.url
    // catName.innerText = data[0].name
    // catDescription.innerText = data[0].description
    // catProfileUrl.href = `profile/${data[0].id}`
    console.log()

    for (let i = 0; i < myData.length; i++) {
        if (!myData[i].image || myData[i].image.hasOwnProperty('url') === false) {
            let div = document.createElement('div');
            cat__section.appendChild(div)
            div.classList.add('cat__card')
            div.innerHTML = `
            <img src="https://via.placeholder.com/280x280">
            <h2 class="paddinglr">${myData[i].name}</h2>
            <p class="paddinglr">${myData[i].description}</p>
            <a href="profile/${myData[i].id}"><button>Profile</button></a>
            `
        console.log(i)

        } else {

            let div = document.createElement('div');
            cat__section.appendChild(div)
            div.classList.add('cat__card')
            div.innerHTML = `
            <img src="${myData[i].image.url}">
            <h2 class="paddinglr">${myData[i].name}</h2>
            <p class="paddinglr">${myData[i].description}</p>
            <a href="profile/${myData[i].id}"><button>Profile</button></a>
            `
    
        }
    }
    

})
.catch(err => {
    console.log(err)
})