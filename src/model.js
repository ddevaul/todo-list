class ToDoItem{
    constructor(){
        this.title = ""
        this.date = ""
        this.completed = false
        this.description = ""
        this.priority = ""
    }
}

class ProjectItem{
    constructor(){
        this.title = "Click to Edit New Project"
        this.items = []
    }
}

// IIFE because there's only one
const todoList = (function(){
    let selectedProject
    let projects = []    
    return {projects, selectedProject}
})()

export {ToDoItem, ProjectItem, todoList}