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

eval("const listBtn = document.getElementById(\"button-list\");\r\nconst viewArea = document.getElementById(\"view-area\");\r\nconst addTaskBtn = document.createElement(\"button\");\r\n\r\nfunction showFormForList() {\r\n  // create a button for adding the task\r\n  \r\n  addTaskBtn.type = \"submit\";\r\n  addTaskBtn.textContent = \"Add New Task\";\r\n\r\n  viewArea.appendChild(addTaskBtn);\r\n}\r\n\r\nlistBtn.addEventListener(\"click\", showFormForList());\r\naddTaskBtn.addEventListener(\"click\", () => {\r\n  // Create form element\r\n  const form = document.createElement(\"form\");\r\n\r\n  // create input elements\r\n  const input = document.createElement(\"input\");\r\n  input.type = \"text\";\r\n  input.placeholder = \"Enter a Task\";\r\n\r\n  // Create the submit button\r\n  const button = document.createElement(\"button\");\r\n  button.type = \"submit\";\r\n  button.textContent = \"Add Task\";\r\n\r\n  //   Add the input field and button to the form\r\n  form.appendChild(input);\r\n  form.appendChild(button);\r\n\r\n  //   Add form to view area\r\n  viewArea.appendChild(form);\r\n\r\n  console.log(\"Completed function\");\r\n});\r\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

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