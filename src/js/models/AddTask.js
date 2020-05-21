import uniqid from "uniqid";

export default class AddTask {
  constructor() {
    this.allTasks = [];
  }

  addOneTask(title, text) {
    const task = {
      id: uniqid(),
      title,
      text,
    };

    this.allTasks.push(task);
    return task;
  }

  deleteTask(id) {
    //search for the index in Alltasks and then match id to the entered id
    const index = this.allTasks.findIndex((el) => el.id === id);
    this.allTasks.splice(index, 1);
  }
}
