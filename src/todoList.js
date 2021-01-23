import{ProjectItem} from  './projectItem'

const todoList = (function(){
    const projects = [new ProjectItem(),new ProjectItem()]    
    return {projects}
})()

export {todoList}