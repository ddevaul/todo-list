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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\nfunction initialize(){\n    const addItemHeaderButton = document.querySelector('#todos-add-button')\n    const addProjectButton = document.querySelector('#projects-add-button')\n    addItemHeaderButton.addEventListener('click', addItem)\n    addProjectButton.addEventListener('click', addProject) \n    if (!localStorage.getItem('projects')){\n        addProject()\n        addItem()\n    } else {\n        _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects = JSON.parse(localStorage.getItem('projects'))\n        loadProjects()\n    }\n}\n\nfunction loadProjects() {\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.forEach(project => {\n        const temp = (0,_view__WEBPACK_IMPORTED_MODULE_1__.makeProjectItemView)(project)\n        _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.appendChild(temp.projectItemDiv)\n        addProjectEventListeners(project, temp)\n    })\n    if (_model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject){\n        selectProject(_model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject)\n    } else {\n        selectProject(_model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects[0])\n    }\n}\n\nfunction addProjectEventListeners(project, projectView){\n    projectView.editButton.addEventListener('click', () => projectView.makeProjectEditable())\n    projectView.projectItemDiv.addEventListener('click', (e) => {\n        if (e.target.nodeName !== 'BUTTON'){\n            selectProject(project)\n        }\n    })\n    projectView.deleteButton.addEventListener('click', () => deleteProject(project))\n    projectView.doneEditingButton.addEventListener('click', () => {\n        projectView.makeProjectUneditable()\n        project.title = projectView.fixedTitle.textContent\n        saveToLocalStorage()\n    })  \n}\n\nfunction saveToLocalStorage(){\n    localStorage.setItem('projects', JSON.stringify(_model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects))\n}\n\nfunction loadItems(){\n    while (_view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.hasChildNodes()){\n        _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.removeChild(_view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.firstChild)\n    }\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items = _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items.sort((a, b) => a.completed - b.completed)\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items.forEach(item => {\n        const temp = (0,_view__WEBPACK_IMPORTED_MODULE_1__.makeToDoItemView)(item)\n        _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.appendChild(temp.todoItemDiv)\n        addToDoItemEventHandlers(item, temp)\n        })\n    const add = (0,_view__WEBPACK_IMPORTED_MODULE_1__.createAddToDoItemButton)()\n    _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.appendChild(add)\n    add.addEventListener('click', addItem)    \n}\n\nfunction addToDoItemEventHandlers(item, itemView){\n    itemView.deleteButton.addEventListener('click', () => {\n        deleteItem(item)\n        saveToLocalStorage()\n    })\n    \n    itemView.title.addEventListener('change', () => {\n        item.title = itemView.title.value\n        saveToLocalStorage()\n    })\n\n    itemView.description.addEventListener('change', () => {\n        item.description = itemView.description.value\n        saveToLocalStorage()\n    })\n\n    itemView.date.addEventListener('change', () => {\n        item.date = itemView.date.value\n        saveToLocalStorage()\n    })\n\n    itemView.completedButton.addEventListener('click', () => {\n        item.completed = !item.completed\n        itemView.completedButton.classList.toggle('completed-button-completed')\n        itemView.todoItemDiv.classList.toggle('todo-item-completed')\n        saveToLocalStorage()\n        })\n}\n\nfunction selectProject(project){\n    if (_model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject){\n        const index = _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.findIndex(p => p === _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject)\n        const node = _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.childNodes.item(index)\n        node.classList.remove('project-item-selected')\n    }\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject = project\n    const index = _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.findIndex(p => p === project)\n    const node = _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.childNodes.item(index)\n    node.classList.add('project-item-selected')            \n    loadItems()\n}\n\nfunction addItem(){\n    const item = new _model__WEBPACK_IMPORTED_MODULE_0__.ToDoItem()\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items.push(item)\n    const itemView = (0,_view__WEBPACK_IMPORTED_MODULE_1__.makeToDoItemView)(item)\n    _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.insertBefore(itemView.todoItemDiv, _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.lastChild)\n    addToDoItemEventHandlers(item, itemView)\n}\n\nfunction deleteItem(item){\n    const index = _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items.findIndex(i => i === item)\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject.items.splice(index, 1)\n    const itemNode = _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.childNodes.item(index)\n    _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer.removeChild(itemNode)\n}\n\nfunction addProject(){\n    const newProj = new _model__WEBPACK_IMPORTED_MODULE_0__.ProjectItem()\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.unshift(newProj)\n    const temp = (0,_view__WEBPACK_IMPORTED_MODULE_1__.makeProjectItemView)(newProj) \n    temp.makeProjectEditable()\n    _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.insertBefore(temp.projectItemDiv, _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.firstChild) // add this to the beginning\n    addProjectEventListeners(newProj, temp)\n    selectProject(newProj)\n}\n\nfunction deleteProject(project){\n    const index = _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.findIndex(p => p === project)\n    _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.splice(index, 1)\n    const projectNode = _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.childNodes.item(index)\n    _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer.removeChild(projectNode)\n    if (projectNode.classList.contains('project-item-selected')){\n        _model__WEBPACK_IMPORTED_MODULE_0__.todoList.selectedProject = null\n        if (_model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects[0]){\n            selectProject(_model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects[0])\n        }\n    }\n}\n\ninitialize()\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoItem\": () => /* binding */ ToDoItem,\n/* harmony export */   \"ProjectItem\": () => /* binding */ ProjectItem,\n/* harmony export */   \"todoList\": () => /* binding */ todoList\n/* harmony export */ });\nclass ToDoItem{\n    constructor(){\n        this.title = \"\"\n        this.date = \"\"\n        this.completed = false\n        this.description = \"\"\n    }\n}\n\nclass ProjectItem{\n    constructor(){\n        this.title = \"Click to Edit New Project\"\n        this.items = []\n    }\n}\n\nconst todoList = (function(){\n    let selectedProject\n    let projects = []    \n    return {projects, selectedProject}\n})()\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeToDoItemView\": () => /* binding */ makeToDoItemView,\n/* harmony export */   \"makeProjectItemView\": () => /* binding */ makeProjectItemView,\n/* harmony export */   \"todoListView\": () => /* binding */ todoListView,\n/* harmony export */   \"createAddToDoItemButton\": () => /* binding */ createAddToDoItemButton\n/* harmony export */ });\nfunction makeToDoItemView(todoItem) {\n    const todoItemDiv = document.createElement('div')\n    const completedButtonDiv = document.createElement('div')\n    completedButtonDiv.classList.add('completed-button-div')\n    const completedButton = document.createElement('button')\n    completedButton.classList.add('completed-button')\n    if (todoItem.completed === true){\n        completedButton.classList.add('completed-button-completed')\n        todoItemDiv.classList.add('todo-item-completed')\n\n    }\n    completedButtonDiv.appendChild(completedButton)\n    const titleDiv = document.createElement('div')\n    titleDiv.classList.add('task-title-div')\n    const title = document.createElement('input')\n    title.value = todoItem.title\n    titleDiv.classList.add('task-title-div')\n    title.classList.add('task-title')\n    titleDiv.appendChild(title)\n\n    const dateDiv = document.createElement('div')\n    dateDiv.classList.add('date-div')\n    const deleteButton = document.createElement('button')\n    deleteButton.textContent = \"delete\"\n    const date = document.createElement('input')\n    date.type = 'datetime-local'\n    date.classList.add('date-input')\n    date.value = todoItem.date\n    dateDiv.appendChild(date)\n    dateDiv.appendChild(deleteButton)\n\n    \n    const addNoteDiv = document.createElement('div')\n    addNoteDiv.classList.add('addnote-button-div')\n    const addNote = document.createElement('button')\n    addNote.classList.add('addnote-button')\n    addNote.addEventListener('click', () => {\n        description.classList.toggle('description-hidden')\n        description.classList.toggle('description-visible')\n\n    })\n    addNoteDiv.appendChild(addNote)\n    addNote.textContent = \"Add Description\"\n\n    const description = document.createElement('textarea')\n    description.classList.add('description-hidden')\n    description.value = todoItem.description\n\n    todoItemDiv.classList.add('todo-item')\n    todoItemDiv.appendChild(completedButtonDiv)\n    todoItemDiv.appendChild(titleDiv)\n    todoItemDiv.appendChild(dateDiv)\n    todoItemDiv.appendChild(addNoteDiv)\n    addNoteDiv.appendChild(description)\n\n    return {todoItemDiv, deleteButton, title, description, date, completedButton}\n}\n\nfunction makeProjectItemView(project){\n    const projectItemDiv = document.createElement('div')\n    const deleteButton = document.createElement('button')\n    const titleDiv = document.createElement('div')\n    const titleInput = document.createElement('input')\n    titleInput.classList.add('title')\n    const fixedTitle = document.createElement('div')\n    fixedTitle.textContent = project.title\n    titleDiv.appendChild(fixedTitle)\n    fixedTitle.classList.add('title')\n    const editButton = document.createElement('button')\n    editButton.classList.add('material-icons')\n    editButton.textContent = \"edit\"\n    deleteButton.classList.add('material-icons')\n    deleteButton.textContent = \"delete\"\n\n    projectItemDiv.classList.add('project-item')\n    titleDiv.classList.add('title-div')\n    \n    const buttonDiv = document.createElement('div')\n    buttonDiv.classList.add('button-div')\n    const doneEditingButton = document.createElement('button')\n    doneEditingButton.classList.add('material-icons')\n    doneEditingButton.textContent = \"check_circle\"\n    buttonDiv.appendChild(editButton)\n\n    projectItemDiv.appendChild(buttonDiv)\n    projectItemDiv.appendChild(titleDiv)\n\n    function makeProjectEditable(){\n        buttonDiv.removeChild(buttonDiv.firstChild)\n        buttonDiv.appendChild(deleteButton)\n        buttonDiv.appendChild(doneEditingButton)\n        titleDiv.removeChild(titleDiv.firstChild)\n        titleDiv.appendChild(titleInput)\n        titleInput.value = fixedTitle.textContent\n    }\n    function makeProjectUneditable(){\n        buttonDiv.removeChild(buttonDiv.firstChild)\n        buttonDiv.removeChild(buttonDiv.firstChild)\n        buttonDiv.appendChild(editButton)\n        titleDiv.removeChild(titleDiv.firstChild)\n        titleDiv.appendChild(fixedTitle)\n        fixedTitle.textContent = titleInput.value\n    }\n\n    return {projectItemDiv, deleteButton, editButton, doneEditingButton, \n        fixedTitle, makeProjectEditable, makeProjectUneditable}\n}\n\nconst todoListView = (function(){\n    const todoContainer = document.querySelector('#todos-container')\n    const projectContainer = document.querySelector('#projects-container')\n    return {todoContainer, projectContainer}\n})()\n\nfunction createAddToDoItemButton(){\n    const outerdiv = document.createElement('div')\n    const plusButton = document.createElement('button')\n    outerdiv.classList.add('add-todo-item-container')\n    plusButton.classList.add('add-todo-item-button')\n    plusButton.textContent = \"+ Add a New To Do Item\"\n    outerdiv.appendChild(plusButton)\n    return outerdiv\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/view.js?");

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