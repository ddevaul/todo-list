class ToDoItem{
    constructor(){
        this.node = this.createNode()
    }
    createNode(){
        const todoItemDiv = document.createElement('div')
        const completedButtonDiv = document.createElement('div')
        completedButtonDiv.classList.add('completed-button-div')
        const completedButton = document.createElement('button')
        completedButton.addEventListener('click', () => {
            completedButton.classList.toggle('completed-button-completed')
        })
        completedButton.classList.add('completed-button')
        completedButtonDiv.appendChild(completedButton)
        const titleDiv = document.createElement('div')
        titleDiv.classList.add('task-title-div')
        const title = document.createElement('input')
        titleDiv.classList.add('task-title-div')
        title.classList.add('task-title')
        titleDiv.appendChild(title)

        const dateDiv = document.createElement('div')
        dateDiv.classList.add('date-div')
        const delButton = document.createElement('button')
        this.delButton = delButton
        delButton.textContent = "delete"
        const dateInput = document.createElement('input')
        dateInput.type = 'datetime-local'
        dateInput.classList.add('date-input')
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

        todoItemDiv.classList.add('todo-item')
        todoItemDiv.appendChild(completedButtonDiv)
        todoItemDiv.appendChild(titleDiv)
        todoItemDiv.appendChild(dateDiv)
        todoItemDiv.appendChild(addNoteDiv)
        addNoteDiv.appendChild(description)

        return todoItemDiv
    }
}

export {ToDoItem}