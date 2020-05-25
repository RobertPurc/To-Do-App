import Task from "./models/AddTask";
import * as taskView from "./views/tasksView";
import { elements } from "./views/base";

const state = {};
//Restore tasks from localStorage on page load
window.addEventListener("load", () => {
  state.task = new Task();
  state.task.readStorage();
  state.task.taskArr.forEach((task) => taskView.renderTask(task));
  getDoneBtn();

  // taskView.renderTask(currTask);
});
const controlAddTasks = () => {
  const title = elements.title.value;
  const text = elements.text.value;
  //simple validation
  if (!title) {
    alert("uzupełnij tytuł");
  } else if (!text) {
    alert("uzupełnij text");
  } else {
    //if everything is correct add to the taskObj
    const currTask = state.task.taskObj(title, text);
    taskView.renderTask(currTask);
  }
};

const getDoneBtn = () => {
  const cards = document.querySelectorAll(".card");
  const cardsArr = Array.from(cards);
  //array from all present cards

  cardsArr.forEach((i) =>
    i.addEventListener("click", (e) => {
      const id = e.target.closest(".card").dataset.itemid;

      if (e.target.matches(".card__done, .card__done *")) {
        state.task.deleteTask(id);
        taskView.deleteTask(id);
      }
    })
  );
  //for each element i add listener which gives each id of current cliced card
};

elements.addBtn.addEventListener("click", () => {
  controlAddTasks();
  getDoneBtn();
  //Test state console.log(state.task);
});
