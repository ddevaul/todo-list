import {ToDoItem, ProjectItem, todoList} from './model'
import {makeToDoItemView, makeProjectItemView, todoListView, createAddToDoItemButton} from './view'

function initialize(){
    localStorage.clear()
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

function loadProjects() {
    todoList.projects.forEach(project => {
        const temp = makeProjectItemView(project)
        todoListView.projectContainer.appendChild(temp.projectItemDiv)
        addProjectEventListeners(project, temp)
    })
    if (todoList.selectedProject){
        selectProject(todoList.selectedProject)
    } else {
        selectProject(todoList.projects[0])
    }
}

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

function saveToLocalStorage(){
    localStorage.setItem('projects', JSON.stringify(todoList.projects))
}

function loadItems(){
    while (todoListView.todoContainer.hasChildNodes()){
        todoListView.todoContainer.removeChild(todoListView.todoContainer.firstChild)
    }
    todoList.selectedProject.items = todoList.selectedProject.items.sort((a, b) => a.completed - b.completed)
    todoList.selectedProject.items.forEach(item => {
        const temp = makeToDoItemView(item)
        todoListView.todoContainer.appendChild(temp.todoItemDiv)
        addToDoItemEventHandlers(item, temp)
        })
    const add = createAddToDoItemButton()
    todoListView.todoContainer.appendChild(add)
    add.addEventListener('click', addItem)    
}

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
        itemView.completedButton.classList.toggle('completed-button-completed')
        itemView.todoItemDiv.classList.toggle('todo-item-completed')
        saveToLocalStorage()
        })
}

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

function addItem(){
    const item = new ToDoItem()
    todoList.selectedProject.items.push(item)
    const itemView = makeToDoItemView(item)
    todoListView.todoContainer.insertBefore(itemView.todoItemDiv, todoListView.todoContainer.lastChild)
    addToDoItemEventHandlers(item, itemView)
}

function deleteItem(item){
    const index = todoList.selectedProject.items.findIndex(i => i === item)
    todoList.selectedProject.items.splice(index, 1)
    const itemNode = todoListView.todoContainer.childNodes.item(index)
    todoListView.todoContainer.removeChild(itemNode)
}

function addProject(){
    const newProj = new ProjectItem()
    todoList.projects.unshift(newProj)
    const temp = makeProjectItemView(newProj) 
    temp.makeProjectEditable()
    todoListView.projectContainer.insertBefore(temp.projectItemDiv, todoListView.projectContainer.firstChild) // add this to the beginning
    addProjectEventListeners(newProj, temp)
    selectProject(newProj)
}

function deleteProject(project){
    const index = todoList.projects.findIndex(p => p === project)
    todoList.projects.splice(index, 1)
    const projectNode = todoListView.projectContainer.childNodes.item(index)
    todoListView.projectContainer.removeChild(projectNode)
    if (projectNode.classList.contains('project-item-selected')){
        todoList.selectedProject = null
        if (todoList.projects[0]){
            selectProject(todoList.projects[0])
        }
    }
}

initialize()

