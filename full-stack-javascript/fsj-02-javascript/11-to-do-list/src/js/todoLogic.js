import Todo from "./todos.js";
import Project from "./projects.js";
import log from "./logger.js";

export default function displayTodoLogic() {
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

  log("Chores are below:");
  chores.listOfTodos.forEach((chore) => {
    log(chore);
  });

  log("Coding stuff are below:");
  codingProject.listOfTodos.forEach((codingTask) => {
    log(codingTask);
  });

  learnHTML.editTodo(
    "learn intermediate HTML",
    "open intermediate HTML course",
    "2025-10-10",
    "high",
  );

  log("Edited the HTML to-do:");
  log(learnHTML);
  log("Coding stuff are below:");
  codingProject.listOfTodos.forEach((codingTask) => {
    log(codingTask);
  });

  codingProject.deleteTodo(learnHTML);

  log("Deleted the HTML to-do!");

  log("Coding stuff are below:");
  codingProject.listOfTodos.forEach((codingTask) => {
    log(codingTask);
  });

  log("But, the HTML todo still exists?");
  log(learnHTML);
}
