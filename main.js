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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\nlet selectedProject \nconst todoContainer = _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.todoContainer\nconst projectContainer = _view__WEBPACK_IMPORTED_MODULE_1__.todoListView.projectContainer\nlet projects = _model__WEBPACK_IMPORTED_MODULE_0__.todoList.projects\nconst addItemHeaderButton = document.querySelector('#todos-add-button')\naddItemHeaderButton.addEventListener('click', addItem)\nconst addProjectButton = document.querySelector('#projects-add-button')\naddProjectButton.addEventListener('click', addProject)\n\nfunction loadProjects() {\n    projects.forEach(project => {\n            const temp = (0,_view__WEBPACK_IMPORTED_MODULE_1__.makeProjectItemView)()\n            projectContainer.appendChild(temp.projectItemDiv)\n            temp.editButton.addEventListener('click', () => makeProjectEditable(temp))\n            temp.projectItemDiv.addEventListener('click', (e) => {\n                if (e.target.nodeName !== 'BUTTON'){\n                    selectProject(project)\n                }\n            })\n            temp.deleteButton.addEventListener('click', () => deleteProject(project))\n            temp.doneEditingButton.addEventListener('click', () => makeProjectUneditable(temp))\n    })\n    selectProject(projects[0])\n}\n\nfunction loadItems(){\n    while (todoContainer.hasChildNodes()){\n        todoContainer.removeChild(todoContainer.firstChild)\n    }\n    selectedProject.items.forEach(item => {\n        const temp = (0,_view__WEBPACK_IMPORTED_MODULE_1__.makeToDoItemView)(item)\n        todoContainer.appendChild(temp.todoItemDiv)\n        temp.deleteButton.addEventListener('click', () => deleteItem(item))\n        temp.title.addEventListener('change', () => item.title = temp.title.value)\n        temp.description.addEventListener('change', () => item.description = temp.description.value)\n        temp.date.addEventListener('change', () => item.date = temp.date.value)\n        temp.completedButton.addEventListener('click', () => {\n            item.completed = !item.completed\n            temp.completedButton.classList.toggle('completed-button-completed')\n            temp.todoItemDiv.classList.toggle('todo-item-completed')\n            })\n        })\n    const add = (0,_view__WEBPACK_IMPORTED_MODULE_1__.createAddToDoItemButton)()\n    todoContainer.appendChild(add)\n    add.addEventListener('click', addItem)    \n}\n\nfunction selectProject(project){\n    if (selectedProject){\n        const index = projects.findIndex(p => p === selectedProject)\n        const node = projectContainer.childNodes.item(index)\n        node.classList.remove('project-item-selected')\n    }\n    selectedProject = project\n    const index = projects.findIndex(p => p === project)\n    const node = projectContainer.childNodes.item(index)\n    node.classList.add('project-item-selected')            \n    loadItems()\n}\n\nfunction addItem(){\n    const item = new _model__WEBPACK_IMPORTED_MODULE_0__.ToDoItem()\n    selectedProject.items.push(item)\n    const itemView = (0,_view__WEBPACK_IMPORTED_MODULE_1__.makeToDoItemView)(item)\n    todoContainer.insertBefore(itemView.todoItemDiv, todoContainer.lastChild)\n    itemView.deleteButton.addEventListener('click', () => deleteItem(item))\n}\n\nfunction deleteItem(item){\n    const index = selectedProject.items.findIndex(i => i === item)\n    selectedProject.items.splice(index, 1)\n    const itemNode = todoContainer.childNodes.item(index)\n    todoContainer.removeChild(itemNode)\n}\n\nfunction addProject(){\n    const newProj = new _model__WEBPACK_IMPORTED_MODULE_0__.ProjectItem()\n    projects.unshift(newProj) // add this to the beginning\n    const temp = (0,_view__WEBPACK_IMPORTED_MODULE_1__.makeProjectItemView)() \n    projectContainer.insertBefore(temp.projectItemDiv, projectContainer.firstChild) // add this to the beginning\n\n    temp.projectItemDiv.addEventListener('click', (e) => { \n        if (e.target.nodeName !== 'BUTTON'){\n            selectProject(newProj)\n        }\n    })\n    temp.deleteButton.addEventListener('click', () => deleteProject(newProj)) \n    selectProject(newProj)\n}\n\nfunction deleteProject(project){\n    const index = projects.findIndex(p => p === project)\n    projects.splice(index, 1)\n    const projectNode = projectContainer.childNodes.item(index)\n    projectContainer.removeChild(projectNode)\n    if (projectNode.classList.contains('project-item-selected')){\n        selectedProject = null\n        if (projects[0]){\n            selectProject(projects[0])\n        }\n    }\n}\n\nfunction makeProjectEditable(node){\n    node.buttonDiv.removeChild(node.buttonDiv.firstChild)\n    node.buttonDiv.appendChild(node.deleteButton)\n    node.buttonDiv.appendChild(node.doneEditingButton)\n    node.titleDiv.removeChild(node.titleDiv.firstChild)\n    node.titleDiv.appendChild(node.titleInput)\n    node.titleInput.value = node.fixedTitle.textContent\n\n}\n\nfunction makeProjectUneditable(node){\n    node.buttonDiv.removeChild(node.buttonDiv.firstChild)\n    node.buttonDiv.removeChild(node.buttonDiv.firstChild)\n    node.buttonDiv.appendChild(node.editButton)\n    node.titleDiv.removeChild(node.titleDiv.firstChild)\n    node.titleDiv.appendChild(node.fixedTitle)\n    node.fixedTitle.textContent = node.titleInput.value\n}\n\nloadProjects()\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoItem\": () => /* binding */ ToDoItem,\n/* harmony export */   \"ProjectItem\": () => /* binding */ ProjectItem,\n/* harmony export */   \"todoList\": () => /* binding */ todoList\n/* harmony export */ });\nclass ToDoItem{\n    constructor(){\n        this.title = \"test\"\n        this.date = \"2021-01-14T12:04\"\n        this.completed = false\n        this.description = \"asdfasdfasdfasdfasdf\"\n    }\n}\n\nclass ProjectItem{\n    constructor(){\n        this.items = [new ToDoItem(), new ToDoItem()]\n    }\n}\n\nconst todoList = (function(){\n    const projects = [new ProjectItem(), new ProjectItem(), new ProjectItem()]    \n    return {projects}\n})()\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeToDoItemView\": () => /* binding */ makeToDoItemView,\n/* harmony export */   \"makeProjectItemView\": () => /* binding */ makeProjectItemView,\n/* harmony export */   \"todoListView\": () => /* binding */ todoListView,\n/* harmony export */   \"createAddToDoItemButton\": () => /* binding */ createAddToDoItemButton\n/* harmony export */ });\nfunction makeToDoItemView(todoItem) {\n    const todoItemDiv = document.createElement('div')\n    const completedButtonDiv = document.createElement('div')\n    completedButtonDiv.classList.add('completed-button-div')\n    const completedButton = document.createElement('button')\n    completedButton.classList.add('completed-button')\n    if (todoItem.completed === true){\n        completedButton.classList.add('completed-button-completed')\n        todoItemDiv.classList.add('todo-item-completed')\n\n    }\n    completedButtonDiv.appendChild(completedButton)\n    const titleDiv = document.createElement('div')\n    titleDiv.classList.add('task-title-div')\n    const title = document.createElement('input')\n    title.value = todoItem.title\n    titleDiv.classList.add('task-title-div')\n    title.classList.add('task-title')\n    titleDiv.appendChild(title)\n\n    const dateDiv = document.createElement('div')\n    dateDiv.classList.add('date-div')\n    const deleteButton = document.createElement('button')\n    deleteButton.textContent = \"delete\"\n    const date = document.createElement('input')\n    date.type = 'datetime-local'\n    date.classList.add('date-input')\n    date.value = todoItem.date\n    dateDiv.appendChild(date)\n    dateDiv.appendChild(deleteButton)\n\n    \n    const addNoteDiv = document.createElement('div')\n    addNoteDiv.classList.add('addnote-button-div')\n    const addNote = document.createElement('button')\n    addNote.classList.add('addnote-button')\n    addNote.addEventListener('click', () => {\n        description.classList.toggle('description-hidden')\n        description.classList.toggle('description-visible')\n\n    })\n    addNoteDiv.appendChild(addNote)\n    addNote.textContent = \"Add Description\"\n\n    const description = document.createElement('textarea')\n    description.classList.add('description-hidden')\n    description.value = todoItem.description\n\n    todoItemDiv.classList.add('todo-item')\n    todoItemDiv.appendChild(completedButtonDiv)\n    todoItemDiv.appendChild(titleDiv)\n    todoItemDiv.appendChild(dateDiv)\n    todoItemDiv.appendChild(addNoteDiv)\n    addNoteDiv.appendChild(description)\n\n    return {todoItemDiv, deleteButton, title, description, date, completedButton}\n}\n\nfunction makeProjectItemView(){\n    const projectItemDiv = document.createElement('div')\n    const deleteButton = document.createElement('button')\n    const titleDiv = document.createElement('div')\n    const titleInput = document.createElement('input')\n    titleInput.classList.add('title')\n    const fixedTitle = document.createElement('div')\n    fixedTitle.textContent = \"asdf\"\n    titleDiv.appendChild(fixedTitle)\n    fixedTitle.classList.add('title')\n    const editButton = document.createElement('button')\n    editButton.classList.add('material-icons')\n    editButton.textContent = \"edit\"\n    deleteButton.classList.add('material-icons')\n    deleteButton.textContent = \"delete\"\n\n    projectItemDiv.classList.add('project-item')\n    titleDiv.classList.add('title-div')\n    \n    const buttonDiv = document.createElement('div')\n    buttonDiv.classList.add('button-div')\n    const doneEditingButton = document.createElement('button')\n    doneEditingButton.classList.add('material-icons')\n    doneEditingButton.textContent = \"check_circle\"\n    buttonDiv.appendChild(editButton)\n\n    projectItemDiv.appendChild(buttonDiv)\n    projectItemDiv.appendChild(titleDiv)\n\n    return {projectItemDiv, deleteButton, editButton, doneEditingButton, buttonDiv, titleDiv, titleInput, fixedTitle}\n}\n\nconst todoListView = (function(){\n    const todoContainer = document.querySelector('#todos-container')\n    const projectContainer = document.querySelector('#projects-container')\n    return {todoContainer, projectContainer}\n})()\n\nfunction createAddToDoItemButton(){\n    const outerdiv = document.createElement('div')\n    const plusButton = document.createElement('button')\n    outerdiv.classList.add('add-todo-item-container')\n    plusButton.classList.add('add-todo-item-button')\n    plusButton.textContent = \"+ Add a New To Do Item\"\n    outerdiv.appendChild(plusButton)\n    return outerdiv\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/view.js?");

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