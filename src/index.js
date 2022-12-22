const listBtn = document.getElementById("button-list");
const viewArea = document.getElementById("view-area");
const addTaskBtn = document.createElement("button");

function showFormForList() {
  // create a button for adding the task
  
  addTaskBtn.type = "submit";
  addTaskBtn.textContent = "Add New Task";

  viewArea.appendChild(addTaskBtn);
}

listBtn.addEventListener("click", showFormForList());
addTaskBtn.addEventListener("click", () => {
  // Create form element
  const form = document.createElement("form");

  // create input elements
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter a Task";

  // Create the submit button
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Add Task";

  //   Add the input field and button to the form
  form.appendChild(input);
  form.appendChild(button);

  //   Add form to view area
  viewArea.appendChild(form);

  console.log("Completed function");
});
