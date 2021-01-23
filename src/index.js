import {AddToDoItem} from './addToDoItem'
import {todoList} from './todoList'
import {ToDoItem} from './todoItem'
import {ProjectItem} from './projectItem'


let selectedProject 
const todoContainer = todoList.todoContainer
const projectContainer = todoList.projectContainer
let projects = todoList.projects
const addItemHeaderButton = document.querySelector('#todos-add-button')
addItemHeaderButton.addEventListener('click', addItem)
const addProjectButton = document.querySelector('#projects-add-button')
addProjectButton.addEventListener('click', addProject)

function initialize() {
    projects.forEach(project => {
            projectContainer.appendChild(project.node)
            project.node.addEventListener('click', () => selectProject(project))
            project.deleteButton.addEventListener('click', () => deleteProject(project))
    })
    selectProject(projects[0])
}

function selectProject(project){
    if (selectedProject){
        selectedProject.node.classList.remove('project-item-selected')
    }
    selectedProject = project
    selectedProject.node.classList.add('project-item-selected')            
    loadItems()
}


function loadItems(){
    while (todoContainer.hasChildNodes()){
        todoContainer.removeChild(todoContainer.firstChild)
    }
    selectedProject.items.forEach(item => {
        todoContainer.appendChild(item.node)
        item.delButton.addEventListener('click', () => deleteItem(item))
    })
    const add = new AddToDoItem()
    todoContainer.appendChild(add.node)
    add.node.addEventListener('click', addItem)

    
}

function addItem(){
    selectedProject.items.push(new ToDoItem())
    todoContainer.removeChild(todoContainer.lastChild)
    loadItems()
}

function deleteItem(item){
    selectedProject.items = selectedProject.items.filter(i => {
        return i !== item
    })
    loadItems()
}

function addProject(){
    const newProj = new ProjectItem()
    projects.push(newProj)
    initialize()
}

function deleteProject(project){
    projects = projects.filter(p => {
        return p !== project
    })
    projectContainer.removeChild(project.node)
}

function clearProjects(){
    while (projectContainer.hasChildNodes){

    }
}

initialize()

