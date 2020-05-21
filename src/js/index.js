import Task from "./models/AddTask";
import * as taskView from "./views/tasksView";
import { elements } from "./views/base";

const state = {};

// window.task = new Task();

// const allTasks = [];
//
state.task = new Task();
const controlTasks = () => {
  const title = elements.title.value;
  const text = elements.text.value;
  console.log(title);

  if (!title) {
    alert("uzupełnij tytuł");
  } else if (!text) {
    alert("uzupełnij text");
  } else {
    taskView.renderTask(state.task.taskObj(title, text));
  }
};

elements.addBtn.addEventListener("click", () => {
  controlTasks();
  console.log(state.task);
});
