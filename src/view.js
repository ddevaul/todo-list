// returns an html node with the right elements and styling
// sets the values of the elements based upon the todoItem passed in as the 
// argument
function makeToDoItemView(todoItem) {
    // all html elements
    const todoItemDiv = document.createElement('div') // element to be returned
    const completedButtonDiv = document.createElement('div')
    const completedButton = document.createElement('button')
    const titleDiv = document.createElement('div')
    const title = document.createElement('input')
    const dateDiv = document.createElement('div')
    const deleteButton = document.createElement('button')
    const date = document.createElement('input')
    const addNoteDiv = document.createElement('div')
    const addNote = document.createElement('button')
    const priorityDiv = document.createElement('div')
    const priority1 = document.createElement('button')
    const priority2 = document.createElement('button')
    const priority3 = document.createElement('button')
    const description = document.createElement('textarea')
    // creating node list
    completedButtonDiv.appendChild(completedButton)
    dateDiv.appendChild(date)
    dateDiv.appendChild(deleteButton)
    titleDiv.appendChild(title)
    addNoteDiv.appendChild(addNote)
    priorityDiv.appendChild(priority1)
    priorityDiv.appendChild(priority2)
    priorityDiv.appendChild(priority3)
    addNoteDiv.appendChild(priorityDiv)
    addNoteDiv.appendChild(description)
    // adds nodes to todoItemDiv, which is the node returned
    todoItemDiv.appendChild(completedButtonDiv)
    todoItemDiv.appendChild(titleDiv)
    todoItemDiv.appendChild(dateDiv)
    todoItemDiv.appendChild(addNoteDiv)
    // adding styling to all the elements
    todoItemDiv.classList.add('todo-item')
    completedButtonDiv.classList.add('completed-button-div')
    completedButton.classList.add('material-icons')    
    completedButton.classList.add('completed-button')     
    titleDiv.classList.add('task-title-div')
    titleDiv.classList.add('task-title-div')
    title.classList.add('task-title')
    dateDiv.classList.add('date-div')
    date.classList.add('date-input')
    deleteButton.classList.add('material-icons')
    addNoteDiv.classList.add('addnote-button-div')
    addNote.classList.add('addnote-button')
    addNote.classList.add('material-icons')
    priorityDiv.classList.add('priorityDiv')  
    description.classList.add('description-hidden')
    // gives divs values stored in the todo item passed as argument
    title.value = todoItem.title
    date.value = todoItem.date
    date.type = 'datetime-local'
    description.value = todoItem.description
    // giving buttons right icons
    deleteButton.textContent = "delete"
    addNote.textContent = "arrow_drop_down"
    completedButton.textContent = "check"
    priority1.textContent = "!"
    priority2.textContent = "!!"
    priority3.textContent = "!!!"
    // if the todoItem was completed, add the right styling
    if (todoItem.completed === true){
        toggleCompletedStyling()
    }
    // styles the priority buttons based on the item passed in as the argument
    // this item might be loaded from localStorage and might have had a 
    // priority assigned to it previously, which these if statements will 
    // return to it
    if (todoItem.priority === 1){
        selectPriority(priority1)
    }
    else if (todoItem.priority === 2){
        selectPriority(priority2)
    }
    else if (todoItem.priority === 3){
        selectPriority(priority3)
    }
    // highligths the priority button passed in as the argument
    function selectPriority(priority){
        if (priority === priority1){
            priority1.classList.toggle('priority1')
            priority2.classList.remove('priority2')
            priority3.classList.remove('priority3')
        }
        else if (priority === priority2){
            priority1.classList.remove('priority1')
            priority2.classList.toggle('priority2')
            priority3.classList.remove('priority3')

        }
        else {
            priority1.classList.remove('priority1')
            priority2.classList.remove('priority2')
            priority3.classList.toggle('priority3')
        }
    }
    // adds the styling for a completed task
    function toggleCompletedStyling(){
        completedButton.classList.toggle('completed-button-completed')
        todoItemDiv.classList.toggle('completed')
        title.classList.toggle('completed')
        date.classList.toggle('completed')
    }
    // hides and unhides the description, triggered by the eventListener
    // added to the addNote button
    function toggleDescription() {
        description.classList.toggle('description-hidden')
        description.classList.toggle('description-visible')
        if (addNote.textContent === "arrow_drop_down"){
            addNote.textContent = "arrow_drop_up"
        } else {
            addNote.textContent = "arrow_drop_down"
        }
    }

    return {todoItemDiv, deleteButton, title, description, date, 
        completedButton, priority1, priority2, priority3, addNote,
        toggleCompletedStyling, selectPriority, toggleDescription}
}
// returns a node list with the right elements and styling for a project 
function makeProjectItemView(project){
    // all the html elements needed
    const projectItemDiv = document.createElement('div')
    const deleteButton = document.createElement('button')
    const titleDiv = document.createElement('div')
    const titleInput = document.createElement('input')
    const fixedTitle = document.createElement('div')
    const editButton = document.createElement('button')
    const buttonDiv = document.createElement('div')
    const doneEditingButton = document.createElement('button')
    // adding the elements to the node list
    titleDiv.appendChild(fixedTitle)
    buttonDiv.appendChild(editButton)
    projectItemDiv.appendChild(buttonDiv)
    projectItemDiv.appendChild(titleDiv) // node to be returned
    // adding the right styling
    projectItemDiv.classList.add('project-item')
    titleDiv.classList.add('project-title-div')
    titleInput.classList.add('project-title-input')
    fixedTitle.classList.add('project-title-input')
    editButton.classList.add('material-icons')
    deleteButton.classList.add('material-icons')
    buttonDiv.classList.add('button-div')
    doneEditingButton.classList.add('material-icons')
    // adding the right icons to the buttons
    editButton.textContent = "edit"
    deleteButton.textContent = "delete"
    doneEditingButton.textContent = "check_circle"
    // setting title to title of project passed as argument
    fixedTitle.textContent = project.title
    // changes the buttons to be a done editing and delete button, 
    // also makes the fixed title an input div
    function makeProjectEditable(){
        buttonDiv.removeChild(buttonDiv.firstChild)
        buttonDiv.appendChild(deleteButton)
        buttonDiv.appendChild(doneEditingButton)
        titleDiv.removeChild(titleDiv.firstChild)
        titleDiv.appendChild(titleInput)
        titleInput.value = fixedTitle.textContent
    }
    // changes the done editing button and delete button to a single
    // make edits button, also makes the input div just a fixed div
    // displaying the input's value
    function makeProjectUneditable(){
        buttonDiv.removeChild(buttonDiv.firstChild)
        buttonDiv.removeChild(buttonDiv.firstChild)
        buttonDiv.appendChild(editButton)
        titleDiv.removeChild(titleDiv.firstChild)
        titleDiv.appendChild(fixedTitle)
        fixedTitle.textContent = titleInput.value
    }
    return {projectItemDiv, deleteButton, editButton, doneEditingButton, 
        fixedTitle, makeProjectEditable, makeProjectUneditable}
}
// IIFE because there's only one
const todoListView = (function(){
    const todoContainer = document.querySelector('#todos-container')
    const projectContainer = document.querySelector('#projects-container')
    return {todoContainer, projectContainer}
})()
// creates button that adds a new todo item to the DOM
function createAddToDoItemButton(){
    // html elements
    const outerdiv = document.createElement('div')
    const plusButton = document.createElement('button')
    outerdiv.classList.add('add-todo-item-container')
    // styling
    plusButton.classList.add('add-todo-item-button')
    plusButton.textContent = "+ Add a New To Do Item"
    // create nodeList
    outerdiv.appendChild(plusButton)
    return outerdiv
}

export {makeToDoItemView, makeProjectItemView, todoListView, createAddToDoItemButton}