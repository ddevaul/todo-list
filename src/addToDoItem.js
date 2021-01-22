class AddToDoItem{
    constructor(){
        this.node = this.createNode()
    }
    createNode(){
        const outerdiv = document.createElement('div')
        const plusButton = document.createElement('button')
        outerdiv.classList.add('add-todo-item-container')
        plusButton.classList.add('add-todo-item-button')
        plusButton.textContent = "+ Add a New To Do Item"
        outerdiv.appendChild(plusButton)
        return outerdiv
    }
}

export {AddToDoItem}