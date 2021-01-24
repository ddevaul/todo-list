function makeToDoItemView(todoItem) {
    const todoItemDiv = document.createElement('div')
    const completedButtonDiv = document.createElement('div')
    completedButtonDiv.classList.add('completed-button-div')
    const completedButton = document.createElement('button')
    completedButton.classList.add('completed-button')
    if (todoItem.completed === true){
        completedButton.classList.add('completed-button-completed')
        todoItemDiv.classList.add('todo-item-completed')

    }
    completedButtonDiv.appendChild(completedButton)
    const titleDiv = document.createElement('div')
    titleDiv.classList.add('task-title-div')
    const title = document.createElement('input')
    title.value = todoItem.title
    titleDiv.classList.add('task-title-div')
    title.classList.add('task-title')
    titleDiv.appendChild(title)

    const dateDiv = document.createElement('div')
    dateDiv.classList.add('date-div')
    const deleteButton = document.createElement('button')
    deleteButton.textContent = "delete"
    const date = document.createElement('input')
    date.type = 'datetime-local'
    date.classList.add('date-input')
    date.value = todoItem.date
    dateDiv.appendChild(date)
    dateDiv.appendChild(deleteButton)

    
    const addNoteDiv = document.createElement('div')
    addNoteDiv.classList.add('addnote-button-div')
    const addNote = document.createElement('button')
    addNote.classList.add('addnote-button')
    addNote.addEventListener('click', () => {
        description.classList.toggle('description-hidden')
        description.classList.toggle('description-visible')

    })
    addNoteDiv.appendChild(addNote)
    addNote.textContent = "Add Description"

    const description = document.createElement('textarea')
    description.classList.add('description-hidden')
    description.value = todoItem.description

    todoItemDiv.classList.add('todo-item')
    todoItemDiv.appendChild(completedButtonDiv)
    todoItemDiv.appendChild(titleDiv)
    todoItemDiv.appendChild(dateDiv)
    todoItemDiv.appendChild(addNoteDiv)
    addNoteDiv.appendChild(description)

    return {todoItemDiv, deleteButton, title, description, date, completedButton}
}

function makeProjectItemView(){
    const projectItemDiv = document.createElement('div')
    const deleteButton = document.createElement('button')
    const titleDiv = document.createElement('div')
    const titleInput = document.createElement('input')
    titleInput.classList.add('title')
    const fixedTitle = document.createElement('div')
    fixedTitle.textContent = "asdf"
    titleDiv.appendChild(fixedTitle)
    fixedTitle.classList.add('title')
    const editButton = document.createElement('button')
    editButton.classList.add('material-icons')
    editButton.textContent = "edit"
    deleteButton.classList.add('material-icons')
    deleteButton.textContent = "delete"

    projectItemDiv.classList.add('project-item')
    titleDiv.classList.add('title-div')
    
    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('button-div')
    const doneEditingButton = document.createElement('button')
    doneEditingButton.classList.add('material-icons')
    doneEditingButton.textContent = "check_circle"
    buttonDiv.appendChild(editButton)

    projectItemDiv.appendChild(buttonDiv)
    projectItemDiv.appendChild(titleDiv)

    return {projectItemDiv, deleteButton, editButton, doneEditingButton, buttonDiv, titleDiv, titleInput, fixedTitle}
}

const todoListView = (function(){
    const todoContainer = document.querySelector('#todos-container')
    const projectContainer = document.querySelector('#projects-container')
    return {todoContainer, projectContainer}
})()

function createAddToDoItemButton(){
    const outerdiv = document.createElement('div')
    const plusButton = document.createElement('button')
    outerdiv.classList.add('add-todo-item-container')
    plusButton.classList.add('add-todo-item-button')
    plusButton.textContent = "+ Add a New To Do Item"
    outerdiv.appendChild(plusButton)
    return outerdiv
}

export {makeToDoItemView, makeProjectItemView, todoListView, createAddToDoItemButton}