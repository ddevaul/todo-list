import {ToDoItem, ProjectItem, todoList} from './model'
import {makeToDoItemView, makeProjectItemView, todoListView, createAddToDoItemButton} from './view'

initialize()

// load projects from local storage. if there aren't any stored, create a 
// new project and add an item to it
function initialize(){
    const addItemHeaderButton = document.querySelector('#todos-add-button')
    const addProjectButton = document.querySelector('#projects-add-button')
    addItemHeaderButton.addEventListener('click', addItem)
    addProjectButton.addEventListener('click', addProject) 
    if (!localStorage.getItem('projects')){
        addProject()
        addItem()
    } else {
        todoList.projects = JSON.parse(localStorage.getItem('projects'))
        loadProjects()
    }
}

// create an html element for each project and append it to the projectContainer
// add event listeners to the project div
// then select the first project which then highlights it and loads its items
function loadProjects() {
    todoList.projects.forEach(project => {
        const temp = makeProjectItemView(project)
        todoListView.projectContainer.appendChild(temp.projectItemDiv)
        addProjectEventListeners(project, temp)
    })
    selectProject(todoList.projects[0])
}

// add event listeners for all of the buttons as well as the div itself
// when the done editing button is done, save the todolist to local storage
function addProjectEventListeners(project, projectView){
    projectView.editButton.addEventListener('click', () => projectView.makeProjectEditable())
    projectView.projectItemDiv.addEventListener('click', (e) => {
        if (e.target.nodeName !== 'BUTTON'){
            selectProject(project)
        }
    })
    projectView.deleteButton.addEventListener('click', () => deleteProject(project))
    projectView.doneEditingButton.addEventListener('click', () => {
        projectView.makeProjectUneditable()
        project.title = projectView.fixedTitle.textContent
        saveToLocalStorage()
    })  
}

// deselect currently selected project, when applicable, add selected styling
// to the newly selected project, and load this project's todo items
function selectProject(project){
    if (todoList.selectedProject){
        const index = todoList.projects.findIndex(p => p === todoList.selectedProject)
        const node = todoListView.projectContainer.childNodes.item(index)
        node.classList.remove('project-item-selected')
    }
    todoList.selectedProject = project
    const index = todoList.projects.findIndex(p => p === project)
    const node = todoListView.projectContainer.childNodes.item(index)
    node.classList.add('project-item-selected')            
    loadItems()
}

// creates a new project, adds it to the project array in the todolist model
// creates a new html element for the new project, adds it to the beginning of
// the project container, adds the requisite event listeners, and selects
// the new project
function addProject(){
    const newProj = new ProjectItem()
    todoList.projects.unshift(newProj)
    const temp = makeProjectItemView(newProj) 
    temp.makeProjectEditable()
    todoListView.projectContainer.insertBefore(temp.projectItemDiv, todoListView.projectContainer.firstChild) 
    addProjectEventListeners(newProj, temp)
    selectProject(newProj)
}

// remove the project from the project array, and remove the corresponding
// node from the project container
function deleteProject(project){
    const index = todoList.projects.findIndex(p => p === project)
    todoList.projects.splice(index, 1)
    const projectNode = todoListView.projectContainer.childNodes.item(index)
    todoListView.projectContainer.removeChild(projectNode)
    // if the deleted project was selected, try to select the first 
    // remaining project, otherwise leave selected project null
    if (projectNode.classList.contains('project-item-selected')){
        todoList.selectedProject = null
        if (todoList.projects[0]){
            selectProject(todoList.projects[0])
        }
    }
}

// this is called when a project is selected and it loads all the tasks for that
// project into the todo container
function loadItems(){
    // clear the todo container
    while (todoListView.todoContainer.hasChildNodes()){
        todoListView.todoContainer.removeChild(todoListView.todoContainer.firstChild)
    }
    // put the higher priority tasks earlier in the array
    todoList.selectedProject.items = todoList.selectedProject.items.sort((a, b) => b.priority - a.priority)
    // put completed tasks at the back of the array
    todoList.selectedProject.items = todoList.selectedProject.items.sort((a, b) => a.completed - b.completed)
    // create and add html elements for each todo item, and add the right
    // event handlers
    todoList.selectedProject.items.forEach(item => {
        const temp = makeToDoItemView(item)
        todoListView.todoContainer.appendChild(temp.todoItemDiv)
        addToDoItemEventHandlers(item, temp)
        })
    // adds the button below the tasks that adds a new task
    const add = createAddToDoItemButton()
    todoListView.todoContainer.appendChild(add)
    add.addEventListener('click', addItem)    
}

// adds event handlers for every button in the html todo item
function addToDoItemEventHandlers(item, itemView){
    itemView.deleteButton.addEventListener('click', () => {
        deleteItem(item)
        saveToLocalStorage()
    })
    
    itemView.title.addEventListener('change', () => {
        item.title = itemView.title.value
        saveToLocalStorage()
    })

    itemView.description.addEventListener('change', () => {
        item.description = itemView.description.value
        saveToLocalStorage()
    })
    itemView.date.addEventListener('change', () => {
        item.date = itemView.date.value
        saveToLocalStorage()
    })
    itemView.completedButton.addEventListener('click', () => {
        item.completed = !item.completed
        itemView.toggleCompletedStyling()
        saveToLocalStorage()
        })

    itemView.priority1.addEventListener('click', () => {
        itemView.selectPriority(itemView.priority1)
        item.priority = 1
        saveToLocalStorage()
    })
    itemView.priority2.addEventListener('click', () => {
        itemView.selectPriority(itemView.priority2)
        item.priority = 2
        saveToLocalStorage()
    })
    itemView.priority3.addEventListener('click', () => {
        itemView.selectPriority(itemView.priority3)
        item.priority = 3
        saveToLocalStorage()
    })
    itemView.addNote.addEventListener('click', () => {
        itemView.toggleDescription()
    })
}
// create new todoItem, add it to the selected project's array of todoItems,
// create a new html node based on this item, add it to the DOM before the 
// button that adds new todoItems, and add the right event handlers 
function addItem(){
    const item = new ToDoItem()
    todoList.selectedProject.items.push(item)
    const itemView = makeToDoItemView(item)
    todoListView.todoContainer.insertBefore(itemView.todoItemDiv, todoListView.todoContainer.lastChild)
    addToDoItemEventHandlers(item, itemView)
}

// deletes item from currently selected project's item array and removes
// the corresponding node from the DOM
function deleteItem(item){
    const index = todoList.selectedProject.items.findIndex(i => i === item)
    todoList.selectedProject.items.splice(index, 1)
    const itemNode = todoListView.todoContainer.childNodes.item(index)
    todoListView.todoContainer.removeChild(itemNode)
}

// save all the projects in local storage as a string
function saveToLocalStorage(){
    localStorage.setItem('projects', JSON.stringify(todoList.projects))
}


