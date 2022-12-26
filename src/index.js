const listsContainer = document.querySelector("[data-lists]"); // To select the lists container
const newListForm = document.querySelector("[data-new-list-form"); // Select the new list form
const newListInput = document.querySelector("[data-new-list-input"); // Selects the input area

let lists = [
  { id: 1, name: "name" },
  { id: 2, name: "todo" },
]; //variable to hold all of our lists

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === "") return;
  const list = createList(listName); // passing to a function to add the name to the list
  newListInput.value = null;
  lists.push(list);
  render();
});

function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function render() {
  // function to render items in the lists area
  clearElement(listsContainer); // passing to a function that clears the element.

  lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.classList.add("list-name");
    listElement.dataset.listId = list.id;
    listElement.innerText = list.name;
    listsContainer.appendChild(listElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
