function makeToDoItemView(todoItem) {
        const todoItemDiv = document.createElement('div')
    const completedButtonDiv = document.createElement('div')
    completedButtonDiv.classList.add('completed-button-div')
    const completedButton = document.createElement('button')
    completedButton.addEventListener('click', () => {
        completedButton.classList.toggle('completed-button-completed')
        todoItemDiv.classList.toggle('todo-item-completed')
    })
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
    const delButton = document.createElement('button')
    delButton.textContent = "delete"
    const dateInput = document.createElement('input')
    dateInput.type = 'datetime-local'
    dateInput.classList.add('date-input')
    dateInput.value = todoItem.date
    dateDiv.appendChild(dateInput)
    dateDiv.appendChild(delButton)

    
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

    return todoItemDiv
}

function makeProjectItemView(){
    const projectItemDiv = document.createElement('div')
    const deleteButton = document.createElement('button')
    const titleDiv = document.createElement('div')
    const editButton = document.createElement('button')
    editButton.classList.add('material-icons')
    editButton.textContent = "edit"
    deleteButton.classList.add('material-icons')
    deleteButton.textContent = "delete"

    projectItemDiv.classList.add('project-item')
    titleDiv.classList.add('title')
    deleteButton.classList.add('delete-button')
    editButton.classList.add('edit-button')
    projectItemDiv.appendChild(deleteButton)
    projectItemDiv.appendChild(editButton)
    projectItemDiv.appendChild(titleDiv)

    return projectItemDiv
}

const todoListView = (function(){
    const todoContainer = document.querySelector('#todos-container')
    const projectContainer = document.querySelector('#projects-container')
    return {todoContainer, projectContainer}
})()

export {makeToDoItemView, makeProjectItemView, todoListView}