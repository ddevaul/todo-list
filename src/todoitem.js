class todoItem{
    constructor(){
        this.name = "test"
       
    }
    createNode(){
        const outerdiv = document.createElement('div')
        const completed = document.createElement('button')
        completed.classList.add('completed-button')
        const title = document.createElement('input')
        title.classList.add('task-title')

        const date = document.createElement('div')
        date.textContent = "DATE"
        date.classList.add('date')
        
        const edit = document.createElement('button')
        edit.classList.add('edit-button')

        const addNote = document.createElement('button')
        addNote.classList.add('addnote-button')

        outerdiv.classList.add('todo-item')
        outerdiv.appendChild(completed)
        outerdiv.appendChild(title)
        outerdiv.appendChild(date)
        outerdiv.appendChild(edit)
        outerdiv.appendChild(addNote)
        return outerdiv;
    }
}

export {todoItem};