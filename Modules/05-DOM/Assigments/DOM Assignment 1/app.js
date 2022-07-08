const addButton = document.querySelector('.add__button')
const notificationMsg = document.querySelector('.notification')
const closeBtn = document.querySelector('.cta__button')
let popupStatus = 'false'

// addButton.addEventListener('click', e => {
//     e.stopPropagation()
//     console.log('Button Clicked')
//     notificationMsg.classList.add('show')

// })
addButton.addEventListener('click', openPopup)
closeBtn.addEventListener('click', closePopup)
document.addEventListener('click', closePopup)


function openPopup(activated) {
    activated.stopPropagation()
    console.log('Button Clicked')
    notificationMsg.classList.add('show')
}

function closePopup() {
    
    console.log('Clicked Closed Button')
    notificationMsg.classList.remove('show') 
    
}