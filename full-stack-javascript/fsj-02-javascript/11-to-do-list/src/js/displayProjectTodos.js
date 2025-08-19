import { Element, Image } from "./element.js";
import editSVG from "../assets/images/edit.svg";
import removeSVG from "../assets/images/remove.svg";

export default function displayProjectTodos(project, mainContainer) {
  console.log("displayProjectTodos has been invoked!");
  console.log("the project that was passed is: ");
  console.log(project);
  console.log("the mainContainer that was passed is: ");
  console.log(mainContainer);

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
