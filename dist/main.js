/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const listsContainer = document.querySelector(\"[data-lists]\"); // To select the lists container\r\nconst newListForm = document.querySelector(\"[data-new-list-form\"); // Select the new list form\r\nconst newListInput = document.querySelector(\"[data-new-list-input\"); // Selects the input area\r\nconst deleteListButon = document.querySelector(\"[data-delete-list-button]\");\r\nconst listDisplayContainer = document.querySelector(\r\n  \"[data-list-display-container]\"\r\n);\r\nconst listTitleElement = document.querySelector(\"[data-list-title]\");\r\nconst listCountElement = document.querySelector(\"[data-list-count]\");\r\nconst tasks = document.querySelector(\"[data-tasks]\");\r\n\r\nconst LOCAL_STORAGE_LIST_KEY = \"task.lists\";\r\nconst LOCAL_STORAGE_SELECTED_LIST_ID_KEY = \"tasks.selectedListId\";\r\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []; //variable to hold all of our lists\r\nlet selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);\r\n\r\nlistsContainer.addEventListener(\"click\", (e) => {\r\n  if (e.target.tagName.toLowerCase() === \"li\") {\r\n    selectedListId = e.target.dataset.listId;\r\n  }\r\n  saveAndRender();\r\n});\r\n\r\nnewListForm.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  const listName = newListInput.value;\r\n  if (listName == null || listName === \"\") return;\r\n  const list = createList(listName); // passing to a function to add the name to the list\r\n  newListInput.value = null;\r\n  lists.push(list);\r\n  saveAndRender();\r\n});\r\n\r\ndeleteListButon.addEventListener(\"click\", () => {\r\n  lists = lists.filter((list) => list.id != selectedListId);\r\n  selectedListId = null;\r\n  saveAndRender();\r\n});\r\n\r\nfunction createList(name) {\r\n  return { id: Date.now().toString(), name: name, tasks: [] };\r\n}\r\n\r\nfunction saveAndRender() {\r\n  save();\r\n  render();\r\n}\r\n\r\nfunction save() {\r\n  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));\r\n  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);\r\n}\r\n\r\nfunction render() {\r\n  // function to render items in the lists area\r\n  clearElement(listsContainer); // passing to a function that clears the element.\r\n  renderList();\r\n\r\n  const selectedList = lists.find((list) => list.id === selectedListId);\r\n  if (selectedListId == null) {\r\n    listDisplayContainer.style.display = \"none\";\r\n  } else {\r\n    listDisplayContainer.style.display = \"\";\r\n    listTitleElement.innerText = selectedList.name;\r\n    renderTaskCount(selectedList);\r\n    clearElement(tasks);\r\n    renderTasks(selectedList);\r\n  }\r\n}\r\n\r\nfunction renderTasks(selectedList) {\r\n  \r\n}\r\n\r\nfunction renderTaskCount(selectedList) {\r\n  const incompleteTaskCount = selectedList.tasks.filter(\r\n    (task) => !task.complete\r\n  ).length;\r\n  const taskString = incompleteTaskCount === 1 ? \"task\" : \"tasks\";\r\n  listCountElement.innerText = ` ${incompleteTaskCount} ${taskString} remaining`;\r\n}\r\n\r\nfunction renderList() {\r\n  lists.forEach((list) => {\r\n    const listElement = document.createElement(\"li\");\r\n    listElement.classList.add(\"list-name\");\r\n    listElement.dataset.listId = list.id;\r\n    listElement.innerText = list.name;\r\n    if (list.id === selectedListId) {\r\n      listElement.classList.add(\"active-list\");\r\n    }\r\n    listsContainer.appendChild(listElement);\r\n  });\r\n}\r\n\r\nfunction clearElement(element) {\r\n  while (element.firstChild) {\r\n    element.removeChild(element.firstChild);\r\n  }\r\n}\r\n\r\nrender();\r\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;