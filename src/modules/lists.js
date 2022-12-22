import Task from "./task";

// For list button and list area functionality
const listBtn = document.getElementById("button-list");
const viewArea = document.getElementById("view-area");
const addTaskBtn = document.createElement("button");
const form = document.createElement("form");
const input = document.createElement("input");
const button = document.createElement("button");
// Array to store Task
let tasks = [];

function addTaskinList(description) {
  // Create a new task
  const task = new Task(description);
  // Add Task to the Array
  tasks.push(task);
  // Update the Task list
  updateTaskList();
}

function updateTaskList() {
  // Clear the task list
  const taskList = document.createElement("div");
  taskList.classList.add("task-list");
  taskList.innerHTML = "";

  //   Add the tasks to the list
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.description;
    taskList.appendChild(li);
  });
}

form.addEventListener("submit", (event) => {
  // Prevent form submission
  event.preventDefault();

  // add a new task
  addTaskinList(input.value);

  // clear the input field
  input.value = "";
});

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
