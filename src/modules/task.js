export default class Task {
  // Class : a blueprint for creating objects. Objects created from class are called Instance of that class.
  constructor(description, isCompleted = false) {
    // called when a new instance of the class is created. i.e. an object is created.
    this.description = description; // this keyword refers to the current instance of the class.
    this.isCompleted = isCompleted;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  setCompletionStatus(isCompleted) {
    this.isCompleted = isCompleted;
  }

  getCompletionStatus() {
    return this.isCompleted;
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
