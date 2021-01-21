import {ToDoItem} from './todoItem'


class ProjectItem{
    constructor(){
        this.items = [new ToDoItem(), new ToDoItem(), new ToDoItem()]
        this.node = this.createNode()
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

}

export {ProjectItem}