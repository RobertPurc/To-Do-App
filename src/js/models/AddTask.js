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
}

// export default class AddTask {
//   constructor() {
//     this.tasks = [];
//   }

//   addOneTask(title, text) {
//     const task = {
//       id: uniqid(),
//       title,
//       text,
//     };

//     this.tasks.push(task);
//     return task;
//   }

//   deleteTask(id) {
//     //search for the index in Alltasks and then match id to the entered id
//     const index = this.tasks.findIndex((el) => el.id === id);
//     this.tasks.splice(index, 1);
//   }
// }
