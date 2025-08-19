const addTaskButton = document.querySelector(".btn-add-task");
const dialogAddTask = document.querySelector(".dialog-add-task");
const closeDialogButton = document.querySelector(".btn-close-add-task");
const formAddTask = document.querySelector(".form-add-task");

// Form inputs
const inputTitle = document.querySelector(".input-title-add-task");
const inputDueDate = document.querySelector(".input-due-date-add-task");
const inputPriority = document.querySelector(".input-priority-add-task");
const inputDescription = document.querySelector(".input-description-add-task");

export default function displayAddTaskModal() {
  addTaskButton.addEventListener("click", () => {
    dialogAddTask.showModal();
    formAddTask.addEventListener("submit", (e) => {
      e.preventDefault();

      console.log("The title is:");
      console.log(inputTitle.value);
      console.log("The due date is:");
      console.log(inputDueDate.value);
      console.log("The priority is:");
      console.log(inputPriority.value);
      console.log("The description is:");
      console.log(inputDescription.value);

      const newTodo = new Todo(
        inputTitle.value,
        inputDescription.value,
        inputDueDate.value,
        inputPriority.value,
      );

      console.log("The new todo is:");
      console.log(newTodo);

      project.addTodo(newTodo);

      console.log("The project is");
      console.log(project);

      displayProjectTodos(project, mainContainer);

      dialogAddTask.close();
    });
  });

  closeDialogButton.addEventListener("click", () => {
    dialogAddTask.close();
  });
}
