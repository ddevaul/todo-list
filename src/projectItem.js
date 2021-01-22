import {ToDoItem} from './todoItem'
import {AddToDoItem} from './addToDoItem'


class ProjectItem{
    constructor(todoContainer){
        this.items = [new ToDoItem(), new ToDoItem()]
        this.node = this.createNode(todoContainer)
    }
    createNode(){
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
    loadItems(todoContainer, projects){

        while (todoContainer.hasChildNodes()){
            todoContainer.removeChild(todoContainer.firstChild)
        }
        projects.forEach(project => project.node.classList.remove('project-item-selected'))
        this.items.forEach(item => {
            item.delButton.addEventListener('click', () => {
                this.items = this.items.filter(i => {
                    return i !== item
                })
                console.log(this.items)
                this.loadItems(todoContainer, projects)
            })
            todoContainer.appendChild(item.node)
        })
        this.node.classList.add("project-item-selected")
        const addButton = new AddToDoItem(this.items)
        addButton.node.addEventListener('click', () => {
            this.items.push(new ToDoItem())
            todoContainer.removeChild(todoContainer.lastChild)
            this.loadItems(todoContainer, projects)
        })
        todoContainer.appendChild(addButton.node)
    }
}

export {ProjectItem}
