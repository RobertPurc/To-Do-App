import uniqid from "uniqid";

export default class Task {
  constructor() {
    this.taskArr = [];
    // this.title = title;
    // this.text = text;
  }

  taskObj(title, text) {
    const oneTask = {
      id: uniqid(),
      title,
      text,
    };
    this.taskArr.push(oneTask);
    return oneTask;
  }

  deleteTask(id) {
    //search for the index in Alltasks and then match id to the entered id
    const index = this.taskArr.findIndex((el) => el.id === id);
    this.taskArr.splice(index, 1);
  }
}
