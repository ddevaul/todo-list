class AddProjectItem{
    constructor(todoList, todoContainer, projects){
        this.createNode(todoList, todoContainer, projects)

    }
    createNode(){
        const outerdiv = document.createElement('button')
        outerdiv.textContent = "+ Create New Project"
        return outerdiv
    }

}

export {AddProjectItem}