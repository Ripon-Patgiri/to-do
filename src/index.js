import Task from "./modules/task";

// For list button and list area functionality
const listBtn = document.getElementById("button-list");
const viewArea = document.getElementById("view-area");
const addTaskBtn = document.createElement("button");
const form = document.createElement("form");
const input = document.createElement("input");
const button = document.createElement("button");

listBtn.addEventListener("click", showFormForList());

addTaskBtn.addEventListener("click", showAddTaskinList());

// Array to store Task
let tasks = [];

function addTaskinList(description) {
  // Create a new task
  const task = new Task(description);
  

}

function showFormForList() {
  // create a button for adding the task

  addTaskBtn.type = "submit";
  addTaskBtn.textContent = "Add New Task";

  viewArea.appendChild(addTaskBtn);
}

function showAddTaskinList() {
  // create input elements

  input.type = "text";
  input.placeholder = "Enter a Task";

  // Create the submit button
  button.type = "submit";
  button.textContent = "Add Task";

  //   Add the input field and button to the form
  form.appendChild(input);
  form.appendChild(button);

  //   Add form to view area
  viewArea.appendChild(form);

  console.log("Completed function");
}
