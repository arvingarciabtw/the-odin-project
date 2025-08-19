import displayProjectTodos from "./displayProjectTodos";
import Todo from "./todos";

const addTaskButton = document.querySelector(".btn-add-task");
const dialogAddTask = document.querySelector(".dialog-add-task");
const formAddTask = document.querySelector(".form-add-task");
const closeDialogButton = document.querySelector(".btn-close-add-task");
const inputTitle = document.querySelector(".input-title-add-task");
const inputDueDate = document.querySelector(".input-due-date-add-task");
const inputPriority = document.querySelector(".input-priority-add-task");
const inputDescription = document.querySelector(".input-description-add-task");

let currentProject = null;
let currentMainContainer = null;

// Set up button listener ONCE when module loads
addTaskButton.addEventListener("click", () => {
  dialogAddTask.showModal();
});

// Set up form listener ONCE when module loads
formAddTask.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!currentProject || !currentMainContainer) return;

  const newTodo = new Todo(
    inputTitle.value,
    inputDescription.value,
    inputDueDate.value,
    inputPriority.value,
  );

  currentProject.addTodo(newTodo);
  displayProjectTodos(currentProject, currentMainContainer);
  dialogAddTask.close();
  formAddTask.reset();
});

closeDialogButton.addEventListener("click", () => {
  dialogAddTask.close();
});

export default function addTask(project, mainContainer) {
  currentProject = project;
  currentMainContainer = mainContainer;
}
