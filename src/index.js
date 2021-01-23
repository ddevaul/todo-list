import {ToDoItem, ProjectItem, todoList} from './model'
import {makeToDoItemView, makeProjectItemView, todoListView, createAddToDoItemButton} from './view'



let selectedProject 
const todoContainer = todoListView.todoContainer
const projectContainer = todoListView.projectContainer
let projects = todoList.projects
const addItemHeaderButton = document.querySelector('#todos-add-button')
addItemHeaderButton.addEventListener('click', addItem)
const addProjectButton = document.querySelector('#projects-add-button')
addProjectButton.addEventListener('click', addProject)

function loadProjects() {
    projects.forEach(project => {
            const temp = makeProjectItemView()
            projectContainer.appendChild(temp.projectItemDiv)
            temp.projectItemDiv.addEventListener('click', (e) => {
                if (e.target.nodeName !== 'BUTTON'){
                    selectProject(project)
                }
            })
            temp.deleteButton.addEventListener('click', () => deleteProject(project))
    })
    selectProject(projects[0])
}

function loadItems(){
    while (todoContainer.hasChildNodes()){
        todoContainer.removeChild(todoContainer.firstChild)
    }
    selectedProject.items.forEach(item => {
        const temp = makeToDoItemView(item)
        todoContainer.appendChild(temp.todoItemDiv)
        temp.deleteButton.addEventListener('click', () => deleteItem(item))
        temp.title.addEventListener('change', () => item.title = temp.title.value)
        temp.description.addEventListener('change', () => item.description = temp.description.value)
        temp.date.addEventListener('change', () => item.date = temp.date.value)
        temp.completedButton.addEventListener('click', () => {
            item.completed = !item.completed
            temp.completedButton.classList.toggle('completed-button-completed')
            temp.todoItemDiv.classList.toggle('todo-item-completed')
            })
        })
    const add = createAddToDoItemButton()
    todoContainer.appendChild(add)
    add.addEventListener('click', addItem)    
}

function selectProject(project){
    if (selectedProject){
        const index = projects.findIndex(p => p === selectedProject)
        const node = projectContainer.childNodes.item(index)
        node.classList.remove('project-item-selected')
    }
    selectedProject = project
    const index = projects.findIndex(p => p === project)
    const node = projectContainer.childNodes.item(index)
    node.classList.add('project-item-selected')            
    loadItems()
}


function addItem(){
    const item = new ToDoItem()
    selectedProject.items.push(item)
    const itemView = makeToDoItemView(item)
    todoContainer.insertBefore(itemView.todoItemDiv, todoContainer.lastChild)
    itemView.deleteButton.addEventListener('click', () => deleteItem(item))
}

function deleteItem(item){
    const index = selectedProject.items.findIndex(i => i === item)
    selectedProject.items.splice(index, 1)
    const itemNode = todoContainer.childNodes.item(index)
    todoContainer.removeChild(itemNode)
}

function addProject(){
    const newProj = new ProjectItem()
    projects.unshift(newProj) // add this to the beginning
    const temp = makeProjectItemView() 
    projectContainer.insertBefore(temp.projectItemDiv, projectContainer.firstChild) // add this to the beginning

    temp.projectItemDiv.addEventListener('click', (e) => { 
        if (e.target.nodeName !== 'BUTTON'){
            selectProject(newProj)
        }
    })
    temp.deleteButton.addEventListener('click', () => deleteProject(newProj)) 
    selectProject(newProj)
}

function deleteProject(project){
    const index = projects.findIndex(p => p === project)
    projects.splice(index, 1)
    const projectNode = projectContainer.childNodes.item(index)
    projectContainer.removeChild(projectNode)
    if (projectNode.classList.contains('project-item-selected')){
        selectedProject = null
        if (projects[0]){
            selectProject(projects[0])
        }
    }
}

function clearProjects(){
    while (projectContainer.hasChildNodes){

    }
}

loadProjects()

