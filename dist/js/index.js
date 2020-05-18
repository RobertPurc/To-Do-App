import { elements } from "./views/base.js";
import AddTask from "./models/Add.js";
// import Delete from "./models/Delete.js";
import * as addView from "./views/addView.js";
import * as delView from "./views/deleteView.js";

/**
 * GLOBAL STATE OF APP
 *
 */
const state = {};
const allTasks = [];

const controlAddTask = () => {
  //Adding curr object to state
  const taskTitle = elements.taskTitle.value;
  const textarea = elements.textarea.value;
  state.addTask = new AddTask(taskTitle, textarea);
  /**
   * Group all task object for future
   */
  // const obj = new AddTask(taskTitle, textarea);
  // allTasks.push(obj);
};

elements.addBtn.addEventListener("click", () => {
  controlAddTask();
  //Redner Task
  addView.renderTask(state.addTask);
  console.log(state.addTask);
  console.log(allTasks);
  //TODO delete task
  delView.deleteTask();
});
