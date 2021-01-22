import {ToDoItem} from './todoItem'
import{ProjectItem} from  './projectItem'

const todoList = (function(){
    const todoContainer = document.querySelector('#todos-container')
    const projectContainer = document.querySelector('#projects-container')
    const projects = [new ProjectItem(todoContainer), new ProjectItem(todoContainer), new ProjectItem(todoContainer)]
    function initialize() {
        projects.forEach(project => {
            projectContainer.appendChild(project.node)
            project.node.addEventListener('click', () => project.loadItems(todoContainer, projects))
        })
        projects[0].loadItems(todoContainer, projects)
    }

    return {initialize}
})()


todoList.initialize()

