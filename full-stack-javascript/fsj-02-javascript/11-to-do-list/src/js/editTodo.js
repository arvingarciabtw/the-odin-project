import displayProjectTodos from "./displayProjectTodos";

const dialog = document.querySelector(".dialog-edit-task");
const closeDialogButton = document.querySelector(".btn-close-edit-task");
const form = document.querySelector(".form-edit-task");

const title = document.querySelector(".input-title-edit-task");
const dueDate = document.querySelector(".input-due-date-edit-task");
const priority = document.querySelector(".input-priority-edit-task");
const description = document.querySelector(".input-description-edit-task");

let currentTodo = null;
let currentProject = null;
let currentMainContainer = null;

closeDialogButton.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  currentTodo.editTodo(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
  );

  displayProjectTodos(currentProject, currentMainContainer);
  dialog.close();
  form.reset();
});

export default function editTodo(todo, project, mainContainer) {
  dialog.showModal();
  currentTodo = todo;
  currentProject = project;
  currentMainContainer = mainContainer;

  title.value = todo.title;
  dueDate.value = todo.dueDate;
  priority.value = todo.priority;
  description.value = todo.description;
}
