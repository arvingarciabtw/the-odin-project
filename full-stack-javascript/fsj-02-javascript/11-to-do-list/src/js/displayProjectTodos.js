import { format } from "date-fns";

import { Element, Image } from "./element.js";
import editSVG from "../assets/images/edit.svg";
import removeSVG from "../assets/images/remove.svg";
import editTodo from "./editTodo.js";
import deleteTodo from "./deleteTodo.js";

export default function displayProjectTodos(project, mainContainer) {
  mainContainer.innerHTML = "";

  for (const todo of project.listOfTodos) {
    const todoEl = new Element("div", "todo", null).create();
    const todoTopDiv = new Element("div", "todo-top-div", null).create();
    const todoTopRightDiv = new Element(
      "div",
      "todo-top-right-div",
      null,
    ).create();
    const todoMiddleDiv = new Element("div", "todo-middle-div", null).create();

    const editTodoButton = new Image("btn-edit-todo", editSVG).create();
    const removeTodoButton = new Image("btn-remove-todo", removeSVG).create();

    editTodoButton.addEventListener("click", () => {
      editTodo(todo, project, mainContainer);
    });

    removeTodoButton.addEventListener("click", () => {
      deleteTodo(project, todo, mainContainer);
    });

    const todoTitle = new Element("h4", "todo-title", todo.title).create();
    const todoDescription = new Element(
      "p",
      "todo-description",
      todo.description,
    ).create();
    const todoDueDate = new Element(
      "p",
      "todo-due-date",
      todo.dueDate,
    ).create();
    const todoPriority = new Element(
      "p",
      "todo-priority",
      todo.priority,
    ).create();

    todoTitle.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoDueDate.textContent = todo.dueDate;
    todoPriority.textContent = todo.priority;

    const formattedDate = format(todo.dueDate, "MMMM dd, yyyy");
    todoDueDate.textContent = formattedDate;

    if (todo.priority === "Low") {
      todoPriority.style.background = "#fdfd96";
      todoPriority.style.color = "#222222";
    } else if (todo.priority === "Medium") {
      todoPriority.style.background = "#ffb347";
      todoPriority.style.color = "#222222";
    } else if (todo.priority === "High") {
      todoPriority.style.background = "#ff6961";
      todoPriority.style.color = "#222222";
    }

    todoTopDiv.appendChild(todoTitle);
    todoTopDiv.appendChild(todoTopRightDiv);

    todoTopRightDiv.appendChild(editTodoButton);
    todoTopRightDiv.appendChild(removeTodoButton);

    todoMiddleDiv.appendChild(todoDueDate);
    todoMiddleDiv.appendChild(todoPriority);

    todoEl.appendChild(todoTopDiv);
    todoEl.appendChild(todoMiddleDiv);
    todoEl.appendChild(todoDescription);

    mainContainer.appendChild(todoEl);
  }
}
