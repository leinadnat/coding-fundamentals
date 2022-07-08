let randomQuote = document.querySelector('.quote__generated')
let refreshQuote = document.querySelector('.quote__refresh')
let quoteAuthor = document.querySelector('.quote__author')

window.addEventListener('load', changeQuote)
refreshQuote.addEventListener('click', changeQuote)


function changeQuote () {
    const API_URL = 'https://api.quotable.io/random'

    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
        randomQuote.innerHTML = data.content;
        quoteAuthor.innerHTML = data.author;
    })
    .catch((error) => console.log(error))
}





