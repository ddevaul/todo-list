class ToDoItem{
    constructor(){
        this.title = "test"
        this.date = "2021-01-14T12:04"
        this.completed = false
        this.description = "asdfasdfasdfasdfasdf"
    }
}

class ProjectItem{
    constructor(){
        this.items = [new ToDoItem(), new ToDoItem()]
    }
}

const todoList = (function(){
    const projects = [new ProjectItem(),new ProjectItem()]    
    return {projects}
})()


export {ToDoItem, ProjectItem, todoList}