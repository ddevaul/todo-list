import {AddToDoItem} from './addToDoItem'
import {ToDoItem, ProjectItem, todoList} from './model'
import {makeToDoItemView, makeProjectItemView, todoListView} from './view'



let selectedProject 
const todoContainer = todoListView.todoContainer
const projectContainer = todoListView.projectContainer
let projects = todoList.projects
const addItemHeaderButton = document.querySelector('#todos-add-button')
addItemHeaderButton.addEventListener('click', addItem)
const addProjectButton = document.querySelector('#projects-add-button')
addProjectButton.addEventListener('click', addProject)

function initialize() {
    projects.forEach(project => {
            const temp = makeProjectItemView()
            projectContainer.appendChild(temp)
            temp.addEventListener('click', () => selectProject(project))
            // project.deleteButton.addEventListener('click', () => deleteProject(project))
    })
    selectProject(projects[0])
}

function selectProject(project){
    if (selectedProject){
        const index = projects.findIndex(p => p === selectedProject)
        const node = projectContainer.childNodes.item(index)
        node.classList.remove('project-item-selected')
    }
    selectedProject = project
    console.log("selectedproject: " + project)
    const index = projects.findIndex(p => p === project)
    const node = projectContainer.childNodes.item(index)
    node.classList.add('project-item-selected')            
    loadItems()
}


function loadItems(){
    while (todoContainer.hasChildNodes()){
        todoContainer.removeChild(todoContainer.firstChild)
    }
    selectedProject.items.forEach(item => {
        const temp = makeToDoItemView(item)
        todoContainer.appendChild(temp)
        // item.delButton.addEventListener('click', () => deleteItem(item))
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

