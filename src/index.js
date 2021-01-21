import {ToDoItem} from './todoItem'
import{ProjectItem} from  './projectItem'

const todoList = (function(){
    const todoContainer = document.querySelector('#todos-container')
    const projectContainer = document.querySelector('#projects-container')
    const projects = [new ProjectItem(), new ProjectItem(), new ProjectItem()]
    function initialize() {
        projects.forEach(project => projectContainer.appendChild(project.node))
        projects[0].items.forEach(item => todoContainer.appendChild(item.node))
        projects[0].node.classList.add('project-item-selected')
    }

    return {initialize}
})()


todoList.initialize()

