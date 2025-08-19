import Todo from "./todos.js";
import Project from "./projects.js";

const allProjects = [];

const htmlProject = new Project("HTML");
const cssProject = new Project("CSS");
const javascriptProject = new Project("JavaScript");

allProjects.push(htmlProject);
allProjects.push(cssProject);
allProjects.push(javascriptProject);

const todoHTML1 = new Todo(
  "Semantic HTML",
  "Learn about semantic HTML",
  "2025-08-22",
  "High",
);
const todoHTML2 = new Todo(
  "Emmet",
  "Study on how to use Emmet",
  "2025-09-11",
  "Low",
);
const todoHTML3 = new Todo(
  "Form Validation",
  "Read the MDN documentation on form validation",
  "2025-09-14",
  "High",
);

const todoCSS1 = new Todo(
  "Flexbox",
  "Study flexbox properties",
  "2025-08-29",
  "High",
);
const todoCSS2 = new Todo(
  "Grid",
  "Study on how to use CSS grid",
  "2025-09-19",
  "High",
);

const todoJS1 = new Todo(
  "Event Listeners",
  "Study on event listeners",
  "2025-09-20",
  "Low",
);
const todoJS2 = new Todo(
  "ES6 Modules",
  "Read articles about ES6 modules",
  "2025-09-28",
  "Medium",
);

htmlProject.addTodo(todoHTML1);
htmlProject.addTodo(todoHTML2);
htmlProject.addTodo(todoHTML3);

cssProject.addTodo(todoCSS1);
cssProject.addTodo(todoCSS2);

javascriptProject.addTodo(todoJS1);
javascriptProject.addTodo(todoJS2);

export { allProjects };
