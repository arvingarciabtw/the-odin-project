import displayProjectTodos from "./displayProjectTodos";
import setLocalStorage from "./setLocalStorage.js";

const dialog = document.querySelector(".dialog-delete-task");
const closeDialogButton = document.querySelector(".btn-close-delete-task");
const form = document.querySelector(".form-delete-task");

let currentTodo = null;
let currentProject = null;
let currentMainContainer = null;

closeDialogButton.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  currentProject.deleteTodo(currentTodo);
  setLocalStorage();
  displayProjectTodos(currentProject, currentMainContainer);
  setLocalStorage();

  displayProjectTodos(currentProject, currentMainContainer);
  dialog.close();
  form.reset();
});

export default function deleteTodo(project, todo, mainContainer) {
  dialog.showModal();
  currentTodo = todo;
  currentProject = project;
  currentMainContainer = mainContainer;
}
