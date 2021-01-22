import {ToDoItem} from './todoItem'

class ProjectItem{
    constructor(todoContainer){
        this.items = [new ToDoItem()]
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
        this.items.forEach(item => todoContainer.appendChild(item.node))
        this.node.classList.add("project-item-selected")
    }
}

export {ProjectItem}