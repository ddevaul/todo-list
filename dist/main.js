/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\nconst db = firebase.firestore()\ninitialize()\ninitFirebaseAuth()\n// load projects from local storage. if there aren't any stored, create a \n// new project and add an item to it\nfunction initialize(){\n    const addItemHeaderButton = document.querySelector('#todos-add-button')\n    const signInButton = document.querySelector('#sign-in')\n    const signOutButton = document.querySelector('#sign-out')\n    signInButton.addEventListener('click', () => signIn())\n    signOutButton.addEventListener('click', () => signOut())\n    const addProjectButton = document.querySelector('#projects-add-button')\n    addItemHeaderButton.addEventListener('click', addItem)\n    addProjectButton.addEventListener('click', addProject) \n\n    \n    // if (!!localStorage.getItem('projects')){\n    //     todoList.projects = JSON.parse(localStorage.getItem('projects'))\n    //     loadProjects()} \n    if (true){\n        const docRef = db.collection('projects').doc('projects');\n        docRef.get().then((doc) => {\n            if (doc.data()) {\n                console.log(doc.data())\n                _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects = doc.data().text\n                loadProjects();\n\n            } else {\n                // doc.data() will be undefined in this case\n                console.log(\"No such document!\");\n            }\n        })\n        \n    }\n    else {} \n}\n\n// create an html element for each project and append it to the projectContainer\n// add event listeners to the project div\n// then select the first project which then highlights it and loads its items\nfunction loadProjects() {\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.forEach(project => {\n        const temp = (0,_view__WEBPACK_IMPORTED_MODULE_1__.makeProjectItemView)(project)\n        _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.appendChild(temp.projectItemDiv)\n        addProjectEventListeners(project, temp)\n    })\n    selectProject(_model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects[0])\n}\n\n// add event listeners for all of the buttons as well as the div itself\n// when the done editing button is done, save the todolist to local storage\nfunction addProjectEventListeners(project, projectView){\n    projectView.editButton.addEventListener('click', () => projectView.makeProjectEditable())\n    projectView.projectItemDiv.addEventListener('click', (e) => {\n        if (e.target.nodeName !== 'BUTTON'){\n            selectProject(project)\n        }\n    })\n    projectView.deleteButton.addEventListener('click', () => deleteProject(project))\n    projectView.doneEditingButton.addEventListener('click', () => {\n        projectView.makeProjectUneditable()\n        project.title = projectView.fixedTitle.textContent\n        saveToLocalStorage()\n    })  \n}\n\n// deselect currently selected project, when applicable, add selected styling\n// to the newly selected project, and load this project's todo items\nfunction selectProject(project){\n    if (_model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject){\n        const index = _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.findIndex(p => p === _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject)\n        const node = _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.childNodes.item(index)\n        node.classList.remove('project-item-selected')\n    }\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject = project\n    const index = _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.findIndex(p => p === project)\n    const node = _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.childNodes.item(index)\n    node.classList.add('project-item-selected')            \n    loadItems()\n}\n\n// creates a new project, adds it to the project array in the todolist model\n// creates a new html element for the new project, adds it to the beginning of\n// the project container, adds the requisite event listeners, and selects\n// the new project\nfunction addProject(){\n    const newProj = new _model__WEBPACK_IMPORTED_MODULE_0__.ProjectItem()\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.unshift(newProj)\n    const temp = (0,_view__WEBPACK_IMPORTED_MODULE_1__.makeProjectItemView)(newProj) \n    temp.makeProjectEditable()\n    _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.insertBefore(temp.projectItemDiv, _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.firstChild) \n    addProjectEventListeners(newProj, temp)\n    selectProject(newProj)\n}\n\n// remove the project from the project array, and remove the corresponding\n// node from the project container\nfunction deleteProject(project){\n    const index = _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.findIndex(p => p === project)\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.splice(index, 1)\n    const projectNode = _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.childNodes.item(index)\n    _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.removeChild(projectNode)\n    // if the deleted project was selected, try to select the first \n    // remaining project, otherwise leave selected project null\n    if (projectNode.classList.contains('project-item-selected')){\n        _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject = null\n        if (_model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects[0]){\n            selectProject(_model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects[0])\n        }\n    }\n}\n\n// this is called when a project is selected and it loads all the tasks for that\n// project into the todo container\nfunction loadItems(){\n    // clear the todo container\n    while (_view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.hasChildNodes()){\n        _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.removeChild(_view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.firstChild)\n    }\n    // put the higher priority tasks earlier in the array\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items = _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items.sort((a, b) => b.priority - a.priority)\n    // put completed tasks at the back of the array\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items = _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items.sort((a, b) => a.completed - b.completed)\n    // create and add html elements for each todo item, and add the right\n    // event handlers\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items.forEach(item => {\n        const temp = (0,_view__WEBPACK_IMPORTED_MODULE_1__.makeToDoItemView)(item)\n        _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.appendChild(temp.todoItemDiv)\n        addToDoItemEventHandlers(item, temp)\n        })\n    // adds the button below the tasks that adds a new task\n    const add = (0,_view__WEBPACK_IMPORTED_MODULE_1__.createAddToDoItemButton)()\n    _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.appendChild(add)\n    add.addEventListener('click', addItem)    \n}\n\n// adds event handlers for every button in the html todo item\nfunction addToDoItemEventHandlers(item, itemView){\n    itemView.deleteButton.addEventListener('click', () => {\n        deleteItem(item)\n        saveToLocalStorage()\n    })\n    \n    itemView.title.addEventListener('change', () => {\n        item.title = itemView.title.value\n        saveToLocalStorage()\n    })\n\n    itemView.description.addEventListener('change', () => {\n        item.description = itemView.description.value\n        saveToLocalStorage()\n    })\n    itemView.date.addEventListener('change', () => {\n        item.date = itemView.date.value\n        saveToLocalStorage()\n    })\n    itemView.completedButton.addEventListener('click', () => {\n        item.completed = !item.completed\n        itemView.toggleCompletedStyling()\n        saveToLocalStorage()\n        })\n\n    itemView.priority1.addEventListener('click', () => {\n        itemView.selectPriority(itemView.priority1)\n        item.priority = 1\n        saveToLocalStorage()\n    })\n    itemView.priority2.addEventListener('click', () => {\n        itemView.selectPriority(itemView.priority2)\n        item.priority = 2\n        saveToLocalStorage()\n    })\n    itemView.priority3.addEventListener('click', () => {\n        itemView.selectPriority(itemView.priority3)\n        item.priority = 3\n        saveToLocalStorage()\n    })\n    itemView.addNote.addEventListener('click', () => {\n        itemView.toggleDescription()\n    })\n}\n// create new todoItem, add it to the selected project's array of todoItems,\n// create a new html node based on this item, add it to the DOM before the \n// button that adds new todoItems, and add the right event handlers \nfunction addItem(){\n    const item = new _model__WEBPACK_IMPORTED_MODULE_0__.ToDoItem()\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items.push(item)\n    const itemView = (0,_view__WEBPACK_IMPORTED_MODULE_1__.makeToDoItemView)(item)\n    _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.insertBefore(itemView.todoItemDiv, _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.lastChild)\n    addToDoItemEventHandlers(item, itemView)\n}\n\n// deletes item from currently selected project's item array and removes\n// the corresponding node from the DOM\nfunction deleteItem(item){\n    const index = _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items.findIndex(i => i === item)\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items.splice(index, 1)\n    const itemNode = _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.childNodes.item(index)\n    _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.removeChild(itemNode)\n}\n\n// save all the projects in local storage as a string\nfunction saveToLocalStorage(){\n    localStorage.setItem('projects', JSON.stringify(_model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects))\n    saveProject()\n}\n\nfunction toggleButtons(hide, show){\n    hide.classList.remove('button-show');\n    hide.classList.add('button-hide');\n    show.classList.remove('button-hide');\n    show.classList.add('button-show');\n}\n\n\n// sign user in\nfunction signIn() {\n    // Sign into Firebase using popup auth & Google as the identity provider.\n    var provider = new firebase.auth.GoogleAuthProvider()\n    firebase.auth().signInWithPopup(provider)\n}\n\n// Signs-out of Friendly Chat.\nfunction signOut() {\n    // Sign out of Firebase.\n    firebase.auth().signOut()\n  } \n\n  \n  // Returns the signed-in user's profile pic URL.\n  function getProfilePicUrl() {\n    return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';\n  }\n  \n  // Returns the signed-in user's display name.\n  function getUserName() {\n    return firebase.auth().currentUser.displayName;\n  }\n  \n  // Returns true if a user is signed-in.\n  function isUserSignedIn() {\n      const user = firebase.auth().currentUser\n    return user;\n  }\n  // Adds a size to Google Profile pics URLs.\nfunction addSizeToGoogleProfilePic(url) {\n    if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {\n      return url + '?sz=150';\n    }\n    return url;\n  }\n\n  function authStateObserver(user) {\n    const signInButton = document.querySelector('#sign-in')\n    const signOutButton = document.querySelector('#sign-out')\n    const userPicElement = document.querySelector('#user-pic');\n    const userNameElement = document.querySelector('#username');\n    const userInfoElement = document.querySelector('#user-info');\n    if (user) { // User is signed in!\n      // Get the signed-in user's profile pic and name.\n      var profilePicUrl = getProfilePicUrl();\n      var userName = getUserName();\n\n      // Set the user's profile pic and name.\n      userPicElement.style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';\n      userNameElement.textContent = userName;\n    //   // Show user's profile\n      userNameElement.removeAttribute('hidden');\n      userInfoElement.removeAttribute('hidden');\n      userPicElement.classList.remove('user-info-hidden');\n      \n        toggleButtons(signInButton, signOutButton)\n    } else { // User is signed out!\n        toggleButtons(signOutButton, signInButton)\n        \n      // Hide user's profile\n            userNameElement.setAttribute('hidden', 'true');\n            userPicElement.setAttribute('hidden', 'true');\n            userPicElement.classList.add('user-info-hidden');\n  \n    }\n  }\n\n\n  // Saves a new message to your Cloud Firestore database.\nfunction saveProject() {\n    // Add a new message entry to the database.\n    return db.collection('projects').doc(\"projects\").set({\n      name: getUserName(),\n      text: JSON.parse(JSON.stringify(_model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects)),\n    }).catch(function(error) {\n      console.error('Error writing new message to database', error);\n    });\n  }\n\n  // Initiate Firebase Auth.\n  function initFirebaseAuth() {\n    // Listen to auth state changes.\n    firebase.auth().onAuthStateChanged(authStateObserver);\n  }\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoItem\": () => /* binding */ ToDoItem,\n/* harmony export */   \"ProjectItem\": () => /* binding */ ProjectItem,\n/* harmony export */   \"todoList\": () => /* binding */ todoList\n/* harmony export */ });\nclass ToDoItem{\n    constructor(){\n        this.title = \"\"\n        this.date = \"\"\n        this.completed = false\n        this.description = \"\"\n        this.priority = \"\"\n    }\n}\n\nclass ProjectItem{\n    constructor(){\n        this.title = \"Click to Edit New Project\"\n        this.items = []\n    }\n}\n\n// IIFE because there's only one\nconst todoList = (function(){\n    let selectedProject\n    let projects = []    \n    return {projects, selectedProject}\n})()\n\n\n\n//# sourceURL=webpack://todo-list/./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeToDoItemView\": () => /* binding */ makeToDoItemView,\n/* harmony export */   \"makeProjectItemView\": () => /* binding */ makeProjectItemView,\n/* harmony export */   \"todoListView\": () => /* binding */ todoListView,\n/* harmony export */   \"createAddToDoItemButton\": () => /* binding */ createAddToDoItemButton\n/* harmony export */ });\n// returns an html node with the right elements and styling\n// sets the values of the elements based upon the todoItem passed in as the \n// argument\nfunction makeToDoItemView(todoItem) {\n    // all html elements\n    const todoItemDiv = document.createElement('div') // element to be returned\n    const completedButtonDiv = document.createElement('div')\n    const completedButton = document.createElement('button')\n    const titleDiv = document.createElement('div')\n    const title = document.createElement('input')\n    const dateDiv = document.createElement('div')\n    const deleteButton = document.createElement('button')\n    const date = document.createElement('input')\n    const addNoteDiv = document.createElement('div')\n    const addNote = document.createElement('button')\n    const priorityDiv = document.createElement('div')\n    const priority1 = document.createElement('button')\n    const priority2 = document.createElement('button')\n    const priority3 = document.createElement('button')\n    const description = document.createElement('textarea')\n    // creating node list\n    completedButtonDiv.appendChild(completedButton)\n    dateDiv.appendChild(date)\n    dateDiv.appendChild(deleteButton)\n    titleDiv.appendChild(title)\n    addNoteDiv.appendChild(addNote)\n    priorityDiv.appendChild(priority1)\n    priorityDiv.appendChild(priority2)\n    priorityDiv.appendChild(priority3)\n    addNoteDiv.appendChild(priorityDiv)\n    addNoteDiv.appendChild(description)\n    // adds nodes to todoItemDiv, which is the node returned\n    todoItemDiv.appendChild(completedButtonDiv)\n    todoItemDiv.appendChild(titleDiv)\n    todoItemDiv.appendChild(dateDiv)\n    todoItemDiv.appendChild(addNoteDiv)\n    // adding styling to all the elements\n    todoItemDiv.classList.add('todo-item')\n    completedButtonDiv.classList.add('completed-button-div')\n    completedButton.classList.add('material-icons')    \n    completedButton.classList.add('completed-button')     \n    titleDiv.classList.add('task-title-div')\n    titleDiv.classList.add('task-title-div')\n    title.classList.add('task-title')\n    dateDiv.classList.add('date-div')\n    date.classList.add('date-input')\n    deleteButton.classList.add('material-icons')\n    addNoteDiv.classList.add('addnote-button-div')\n    addNote.classList.add('addnote-button')\n    addNote.classList.add('material-icons')\n    priorityDiv.classList.add('priorityDiv')  \n    description.classList.add('description-hidden')\n    // gives divs values stored in the todo item passed as argument\n    title.value = todoItem.title\n    date.value = todoItem.date\n    date.type = 'datetime-local'\n    description.value = todoItem.description\n    // giving buttons right icons\n    deleteButton.textContent = \"delete\"\n    addNote.textContent = \"arrow_drop_down\"\n    completedButton.textContent = \"check\"\n    priority1.textContent = \"!\"\n    priority2.textContent = \"!!\"\n    priority3.textContent = \"!!!\"\n    // if the todoItem was completed, add the right styling\n    if (todoItem.completed === true){\n        toggleCompletedStyling()\n    }\n    // styles the priority buttons based on the item passed in as the argument\n    // this item might be loaded from localStorage and might have had a \n    // priority assigned to it previously, which these if statements will \n    // return to it\n    if (todoItem.priority === 1){\n        selectPriority(priority1)\n    }\n    else if (todoItem.priority === 2){\n        selectPriority(priority2)\n    }\n    else if (todoItem.priority === 3){\n        selectPriority(priority3)\n    }\n    // highligths the priority button passed in as the argument\n    function selectPriority(priority){\n        if (priority === priority1){\n            priority1.classList.toggle('priority1')\n            priority2.classList.remove('priority2')\n            priority3.classList.remove('priority3')\n        }\n        else if (priority === priority2){\n            priority1.classList.remove('priority1')\n            priority2.classList.toggle('priority2')\n            priority3.classList.remove('priority3')\n\n        }\n        else {\n            priority1.classList.remove('priority1')\n            priority2.classList.remove('priority2')\n            priority3.classList.toggle('priority3')\n        }\n    }\n    // adds the styling for a completed task\n    function toggleCompletedStyling(){\n        completedButton.classList.toggle('completed-button-completed')\n        todoItemDiv.classList.toggle('completed')\n        title.classList.toggle('completed')\n        date.classList.toggle('completed')\n    }\n    // hides and unhides the description, triggered by the eventListener\n    // added to the addNote button\n    function toggleDescription() {\n        description.classList.toggle('description-hidden')\n        description.classList.toggle('description-visible')\n        if (addNote.textContent === \"arrow_drop_down\"){\n            addNote.textContent = \"arrow_drop_up\"\n        } else {\n            addNote.textContent = \"arrow_drop_down\"\n        }\n    }\n\n    return {todoItemDiv, deleteButton, title, description, date, \n        completedButton, priority1, priority2, priority3, addNote,\n        toggleCompletedStyling, selectPriority, toggleDescription}\n}\n// returns a node list with the right elements and styling for a project \nfunction makeProjectItemView(project){\n    // all the html elements needed\n    const projectItemDiv = document.createElement('div')\n    const deleteButton = document.createElement('button')\n    const titleDiv = document.createElement('div')\n    const titleInput = document.createElement('input')\n    const fixedTitle = document.createElement('div')\n    const editButton = document.createElement('button')\n    const buttonDiv = document.createElement('div')\n    const doneEditingButton = document.createElement('button')\n    // adding the elements to the node list\n    titleDiv.appendChild(fixedTitle)\n    buttonDiv.appendChild(editButton)\n    projectItemDiv.appendChild(buttonDiv)\n    projectItemDiv.appendChild(titleDiv) // node to be returned\n    // adding the right styling\n    projectItemDiv.classList.add('project-item')\n    titleDiv.classList.add('project-title-div')\n    titleInput.classList.add('project-title-input')\n    fixedTitle.classList.add('project-title-input')\n    editButton.classList.add('material-icons')\n    deleteButton.classList.add('material-icons')\n    buttonDiv.classList.add('button-div')\n    doneEditingButton.classList.add('material-icons')\n    // adding the right icons to the buttons\n    editButton.textContent = \"edit\"\n    deleteButton.textContent = \"delete\"\n    doneEditingButton.textContent = \"check_circle\"\n    // setting title to title of project passed as argument\n    fixedTitle.textContent = project.title\n    // changes the buttons to be a done editing and delete button, \n    // also makes the fixed title an input div\n    function makeProjectEditable(){\n        buttonDiv.removeChild(buttonDiv.firstChild)\n        buttonDiv.appendChild(deleteButton)\n        buttonDiv.appendChild(doneEditingButton)\n        titleDiv.removeChild(titleDiv.firstChild)\n        titleDiv.appendChild(titleInput)\n        titleInput.value = fixedTitle.textContent\n    }\n    // changes the done editing button and delete button to a single\n    // make edits button, also makes the input div just a fixed div\n    // displaying the input's value\n    function makeProjectUneditable(){\n        buttonDiv.removeChild(buttonDiv.firstChild)\n        buttonDiv.removeChild(buttonDiv.firstChild)\n        buttonDiv.appendChild(editButton)\n        titleDiv.removeChild(titleDiv.firstChild)\n        titleDiv.appendChild(fixedTitle)\n        fixedTitle.textContent = titleInput.value\n    }\n    return {projectItemDiv, deleteButton, editButton, doneEditingButton, \n        fixedTitle, makeProjectEditable, makeProjectUneditable}\n}\n// IIFE because there's only one\nconst todoListView = (function(){\n    const todoContainer = document.querySelector('#todos-container')\n    const projectContainer = document.querySelector('#projects-container')\n    return {todoContainer, projectContainer}\n})()\n// creates button that adds a new todo item to the DOM\nfunction createAddToDoItemButton(){\n    // html elements\n    const outerdiv = document.createElement('div')\n    const plusButton = document.createElement('button')\n    outerdiv.classList.add('add-todo-item-container')\n    // styling\n    plusButton.classList.add('add-todo-item-button')\n    plusButton.textContent = \"+ Add a New To Do Item\"\n    // create nodeList\n    outerdiv.appendChild(plusButton)\n    return outerdiv\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;