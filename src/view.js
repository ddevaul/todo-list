function makeToDoItemView(todoItem) {
    const todoItemDiv = document.createElement('div')
    const completedButtonDiv = document.createElement('div')
    completedButtonDiv.classList.add('completed-button-div')
    const completedButton = document.createElement('button')
    completedButton.classList.add('completed-button')
    
    completedButtonDiv.appendChild(completedButton)
    completedButton.classList.toggle('material-icons')
    completedButton.textContent = "check"
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
    deleteButton.classList.add('material-icons')
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
    addNote.classList.add('material-icons')
    addNote.textContent = "arrow_drop_down"
    addNote.addEventListener('click', () => {
        description.classList.toggle('description-hidden')
        description.classList.toggle('description-visible')
        if (addNote.textContent === "arrow_drop_down"){
            addNote.textContent = "arrow_drop_up"
        } else {
            addNote.textContent = "arrow_drop_down"
        }

    })
    addNoteDiv.appendChild(addNote)
    const priorityDiv = document.createElement('div')
    const priority1 = document.createElement('button')
    const priority2 = document.createElement('button')
    const priority3 = document.createElement('button')
    priority1.textContent = "!"
    priority2.textContent = "!!"
    priority3.textContent = "!!!"
    priorityDiv.classList.add('priorityDiv')
    priorityDiv.appendChild(priority1)
    priorityDiv.appendChild(priority2)
    priorityDiv.appendChild(priority3)
    addNoteDiv.appendChild(priorityDiv)
    if (todoItem.priority === 1){
        selectPriority(priority1)
    }
    else if (todoItem.priority === 2){
        selectPriority(priority2)
    }
    else if (todoItem.priority === 3){
        selectPriority(priority3)
    }
    const description = document.createElement('textarea')
    description.classList.add('description-hidden')
    description.value = todoItem.description


    todoItemDiv.classList.add('todo-item')
    todoItemDiv.appendChild(completedButtonDiv)
    todoItemDiv.appendChild(titleDiv)
    todoItemDiv.appendChild(dateDiv)
    todoItemDiv.appendChild(addNoteDiv)
    addNoteDiv.appendChild(description)

    if (todoItem.completed === true){
        toggleCompletedStyling()
    }

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

    function toggleCompletedStyling(){
        completedButton.classList.toggle('completed-button-completed')
        todoItemDiv.classList.toggle('completed')
        title.classList.toggle('completed')
        date.classList.toggle('completed')

    }
    return {todoItemDiv, deleteButton, title, description, date, 
        completedButton, toggleCompletedStyling, priority1, priority2, priority3,
        selectPriority}
}

function makeProjectItemView(project){
    const projectItemDiv = document.createElement('div')
    const deleteButton = document.createElement('button')
    const titleDiv = document.createElement('div')
    const titleInput = document.createElement('input')
    titleInput.classList.add('title')
    const fixedTitle = document.createElement('div')
    fixedTitle.textContent = project.title
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

    function makeProjectEditable(){
        buttonDiv.removeChild(buttonDiv.firstChild)
        buttonDiv.appendChild(deleteButton)
        buttonDiv.appendChild(doneEditingButton)
        titleDiv.removeChild(titleDiv.firstChild)
        titleDiv.appendChild(titleInput)
        titleInput.value = fixedTitle.textContent
    }
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