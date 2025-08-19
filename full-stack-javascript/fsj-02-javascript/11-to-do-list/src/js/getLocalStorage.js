import { allProjects } from "./todoLogic";
import Project from "./projects.js";
import Todo from "./todos.js";

export default function getLocalStorage() {
  const saved = localStorage.getItem("allProjects");
  console.log("The saved is:");
  console.log(saved);

  if (saved) {
    const savedData = JSON.parse(saved);
    console.log("The PARSED saved data is:");
    console.log(savedData);
    allProjects.length = 0;

    // Recreate Project instances
    savedData.forEach((projectData) => {
      const project = new Project(projectData.name);

      if (projectData.listOfTodos && projectData.listOfTodos.length > 0) {
        projectData.listOfTodos.forEach((todoData) => {
          const todo = new Todo(
            todoData.title,
            todoData.description,
            todoData.dueDate,
            todoData.priority,
          );

          project.addTodo(todo);
        });
      }

      allProjects.push(project);
    });
  }
  return allProjects;
}
