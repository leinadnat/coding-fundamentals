// Import prompt sync to ask for player input
const prompt = require('prompt-sync')()
let userResponse = ''
let calendarList = []
function displayMenu () {

    console.log(`
    ---------CALENDAR APP---------
    1   View calendar list
    2   Add calendar item
    3   Edit calendar item
    4   Cancel calendar item
    5   Quit calendar
    `)

    userResponse = prompt('Enter 1/2/3/4/5: ')

    console.log(`
    \n
    \n
    \n
    `)
    
}

function displayCalendarList () {
    if (calendarList.length === 0) {
        console.log('Your calendar is empty')
    } else {
    for (let i = 0; i < calendarList.length; i++) {
        console.log(calendarList[i].join(' '))
        
    } 
}   
}

function addEvent () {
    calendarEvent = prompt('What event would you like to add? ')
    eventTime = prompt('What time is the event? eg. 8:00pm ')
    index = calendarList.length + 1
    calendarList.push([index,calendarEvent,eventTime])
}
function editEvent () {
    selectedEventItem = prompt('Which reminder would you like to edit? Enter the number: ')
    replaceEventItem = prompt('What to replace the task item with? ')
    replaceEventTime = prompt('Enter a new event time (if needed): ')
    calendarList[selectedEventItem - 1][1] = replaceEventItem
    if (replaceEventTime !== "") {
    calendarList[selectedEventItem - 1][2] = replaceEventTime   
    }

}
function deleteEvent () {
    selectedEventItem = prompt('Which task item would you like to delete? Enter the number: ')
    calendarList.splice(selectedEventItem - 1,1)
    for (let i = 0; i < calendarList.length; i++) {
        calendarList[i][0] = i + 1
    }

}

function startCalendarApp() {
    isActive = true;
    displayMenu()

    while (isActive) {
    
    if (userResponse === '1') {
        displayCalendarList()
        displayMenu()
    }
    if (userResponse === '2') {
        displayCalendarList()
        addEvent()
        displayMenu()
    }
    if (userResponse === '3') {
        displayCalendarList()
        editEvent()
        displayMenu()
    }

    if (userResponse === '4') {
        displayCalendarList()
        deleteEvent()
        displayMenu()
    }

    if (userResponse === '5') {
        isActive = false;
        console.log('Good bye!')
    }
    }

}
startCalendarApp()
