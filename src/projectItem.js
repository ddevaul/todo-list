import {ToDoItem} from './todoItem'
import {AddToDoItem} from './addToDoItem'


class ProjectItem{
    constructor(){
        this.items = [new ToDoItem(), new ToDoItem()]
        // this.node = this.createNode()
        // this.deleteButton
    }
    // createNode(){
        
    // }
    // loadItems(todoContainer, projects){

    //     while (todoContainer.hasChildNodes()){
    //         todoContainer.removeChild(todoContainer.firstChild)
    //     }
    //     projects.forEach(project => project.node.classList.remove('project-item-selected'))
    //     this.items.forEach(item => {
    //         item.delButton.addEventListener('click', () => {
    //             tlhis.items = this.items.filter(i => {
    //                 return i !== item
    //             })
    //             console.log(this.items)
    //             this.loadItems(todoContainer, projects)
    //         })
    //         todoContainer.appendChild(item.node)
    //     })
    //     this.node.classList.add("project-item-selected")
    //     const addButton = new AddToDoItem(this.items)
    //     addButton.node.addEventListener('click', () => {
    //         this.items.push(new ToDoItem())
    //         todoContainer.removeChild(todoContainer.lastChild)
    //         this.loadItems(todoContainer, projects)
    //     })
    //     todoContainer.appendChild(addButton.node)
    // }
}

export {ProjectItem}
