export default class Task { // Class : a blueprint for creating objects. Objects created from class are called Instance of that class.
  constructor(name, dueDate = "No Date") { // called when a new instance of the class is created. i.e. an object is created.
    this.name = name;  // this keyword refers to the current instance of the class.
    this.dueDate = dueDate;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }
}

// Example usage
// const task = new Task('Finish homework');
// console.log(task.getName()); // prints 'Finish homework'
// console.log(task.getDate()); // prints 'No Date'

// task.setName('Complete project');
// console.log(task.getName()); // prints 'Complete project'

// task.setDate('Tomorrow');
// console.log(task.getDate()); // prints 'Tomorrow'

