import { elements } from "./views/base.js";
import AddTask from "./models/Add.js";
import * as addView from "./views/addView.js";

/**
 * GLOBAL STATE OF APP
 *
 */
const state = {};

const controlAddTask = () => {
  const taskTitle = elements.taskTitle.value;
  const textarea = elements.textarea.value;

  state.addTask = new AddTask(taskTitle, textarea);
};

elements.addBtn.addEventListener("click", () => {
  controlAddTask();
  addView.renderTask(state.addTask);
  console.log(state.addTask);
});

// const addTask = new AddTask(elements.taskTitle, elements.textarea);
