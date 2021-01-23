import {AddProjectItem} from './addProjectItem'
import{ProjectItem} from  './projectItem'

const todoList = (function(){
    const todoContainer = document.querySelector('#todos-container')
    const projectContainer = document.querySelector('#projects-container')
    const projects = [new ProjectItem(),new ProjectItem()]    
    return {projects, todoContainer, projectContainer}
})()

export {todoList}