import Task from "./models/AddTask";
import * as taskView from "./views/tasksView";
import { elements } from "./views/base";

const state = {};

// window.task = new Task();

// const allTasks = [];
//
state.task = new Task();
const controlAddTasks = () => {
  // console.log(title);
  const title = elements.title.value;
  const text = elements.text.value;
  if (!title) {
    alert("uzupełnij tytuł");
  } else if (!text) {
    alert("uzupełnij text");
  } else {
    const currTask = state.task.taskObj(title, text);
    taskView.renderTask(currTask);
  }
};

const getMatchesBtn = () => {
  // const doneBtn = document.querySelectorAll(".card__icon--done");

  const cards = document.querySelectorAll(".card");
  const cardsArr = Array.from(cards);
  //array from all present cards

  cardsArr.forEach((i) =>
    i.addEventListener("click", (e) => {
      const id = e.target.closest(".card").dataset.itemid;
      console.log(id);

      if (e.target.matches(".card__icon--done")) {
        console.log("kliknęto w ptaszek");
        state.task.deleteTask(id);
        taskView.deleteTask(id);
      }
    })
  );
  //for each element i add listener which gives each id of current cliced card
};

elements.addBtn.addEventListener("click", () => {
  controlAddTasks();
  getMatchesBtn();
  console.log(state.task);
});
