import "./styles.css";
import Todo from "./js/todos";
import Project from "./js/projects";

const chores = new Project("Chores");
const codingProject = new Project("Coding");

const toWashDishes = new Todo(
  "wash dishes",
  "need to wash the dishes",
  "2025-08-30",
  "high",
);
const toSweepFloor = new Todo(
  "sweep floor",
  "gonna sweep the floor",
  "2025-08-21",
  "medium",
);

const learnHTML = new Todo(
  "learn html",
  "open HTML TOP course",
  "2025-08-22",
  "high",
);

const learnCSS = new Todo(
  "learn css",
  "open CSS TOP course",
  "2025-09-03",
  "low",
);

const learnJS = new Todo(
  "learn js",
  "open JS TOP course",
  "2025-09-17",
  "high",
);

chores.addTodo(toWashDishes);
chores.addTodo(toSweepFloor);

codingProject.addTodo(learnHTML);
codingProject.addTodo(learnCSS);
codingProject.addTodo(learnJS);

console.log("Chores are below:");
chores.listOfTodos.forEach((chore) => {
  console.log(chore);
});

console.log("Coding stuff are below:");
codingProject.listOfTodos.forEach((codingTask) => {
  console.log(codingTask);
});

learnHTML.editTodo(
  "learn intermediate HTML",
  "open intermediate HTML course",
  "2025-10-10",
  "high",
);

console.log("Edited the HTML to-do:");
console.log(learnHTML);
console.log("Coding stuff are below:");
codingProject.listOfTodos.forEach((codingTask) => {
  console.log(codingTask);
});
