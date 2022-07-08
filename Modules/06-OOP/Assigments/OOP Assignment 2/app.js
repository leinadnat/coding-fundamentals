// Import prompt sync to ask for player input
const prompt = require('prompt-sync')()
let userResponse = ''
let todoList = []
function displayMenu () {

    console.log(`
    ---------TODO APP---------
    1   View todo list
    2   Add todo task
    3   Edit todo task
    4   Toggle complete
    5   Delete task
    6   Quit app
    `)

    userResponse = prompt('Enter 1/2/3/4/5/6: ')

    console.log(`
    \n
    \n
    \n
    `)
    
}

function displayTodoList () {
    if (todoList.length === 0) {
        console.log('The todo list is empty')
    } else {
    for (let i = 0; i < todoList.length; i++) {
        console.log(todoList[i].join(' '))
        
    } 
}   
}

function addTask () {
    taskItem = prompt('What task item would you like to add? ')
    index = todoList.length + 1
    todoList.push([index,taskItem])
}
function editTask () {
    selectedTaskItem = prompt('Which task item would you like to edit? Enter the number: ')
    replaceTaskItem = prompt('What to replace the task item with? ')
    todoList[selectedTaskItem - 1][1] = replaceTaskItem
}
function deleteTask () {
    selectedTaskItem = prompt('Which task item would you like to delete? Enter the number: ')
    todoList.splice(selectedTaskItem - 1,1)
    for (let i = 0; i < todoList.length; i++) {
        todoList[i][0] = i + 1
    }

}
function completedTask () {
    selectedTaskItem = prompt('Which task item would you like to make complete? Enter the number: ')
    todoList[selectedTaskItem - 1][1] += ' Completed'

}

function startTodoApp() {
    isActive = true;
    displayMenu()

    while (isActive) {
    
    if (userResponse === '1') {
        displayTodoList()
        displayMenu()
    }
    if (userResponse === '2') {
        displayTodoList()
        addTask()
        displayMenu()
    }
    if (userResponse === '3') {
        displayTodoList()
        editTask()
        displayMenu()
    }
    if (userResponse === '4') {
        displayTodoList()
        completedTask()
        displayMenu()
    }

    if (userResponse === '5') {
        displayTodoList()
        deleteTask()
        displayMenu()
    }

    if (userResponse === '6') {
        isActive = false;
        console.log('Good bye!')
    }
    }

}
startTodoApp()