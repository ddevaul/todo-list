class ProjectItem{
    constructor(){

    }
    createNode(){
        const projectItemDiv = document.createElement('div')
        const deleteButton = document.createElement('button')
        const titleDiv = document.createElement('div')
        const editButton = document.createElement('button')
        editButton.classList.add('material-icons')
        editButton.textContent = "edit"
        deleteButton.classList.add('material-icons')
        deleteButton.textContent = "delete"
        


        projectItemDiv.classList.add('project-item')
        titleDiv.classList.add('title')
        deleteButton.classList.add('delete-button')
        editButton.classList.add('edit-button')
        projectItemDiv.appendChild(deleteButton)
        projectItemDiv.appendChild(editButton)
        projectItemDiv.appendChild(titleDiv)
        // todoItemOuter.appendChild(description)
        // outerdiv.appendChild(styleDivLeft)
        // outerdivExceptNotes.appendChild(description)
        // outerdiv.appendChild(styleDivRight)


        return projectItemDiv
    }
}
export {ProjectItem}