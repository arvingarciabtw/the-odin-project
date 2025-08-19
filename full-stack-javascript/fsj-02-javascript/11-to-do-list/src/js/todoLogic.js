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
const todoHTML4 = new Todo(
  "Accessibility Best Practices",
  "Learn about ARIA attributes and screen reader compatibility",
  "2025-08-25",
  "High",
);
const todoHTML5 = new Todo(
  "HTML5 APIs",
  "Study Web Storage, Geolocation, and Canvas APIs",
  "2025-09-05",
  "Medium",
);
const todoHTML6 = new Todo(
  "Meta Tags and SEO",
  "Learn about meta tags for SEO and social media sharing",
  "2025-09-12",
  "Medium",
);
const todoHTML7 = new Todo(
  "Progressive Web Apps",
  "Understand PWA manifest files and service workers",
  "2025-09-25",
  "Low",
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
const todoCSS3 = new Todo(
  "CSS Animations",
  "Create smooth transitions and keyframe animations",
  "2025-09-01",
  "Medium",
);
const todoCSS4 = new Todo(
  "Responsive Design",
  "Master media queries and mobile-first approach",
  "2025-09-08",
  "High",
);
const todoCSS5 = new Todo(
  "CSS Variables",
  "Learn custom properties and theming with CSS variables",
  "2025-09-15",
  "Medium",
);
const todoCSS6 = new Todo(
  "CSS Preprocessors",
  "Study Sass/SCSS syntax and features",
  "2025-09-22",
  "Low",
);
const todoCSS7 = new Todo(
  "CSS Architecture",
  "Learn BEM methodology and CSS organization patterns",
  "2025-09-30",
  "Medium",
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
const todoJS3 = new Todo(
  "Async JavaScript",
  "Master Promises, async/await, and fetch API",
  "2025-09-10",
  "High",
);
const todoJS4 = new Todo(
  "DOM Manipulation",
  "Practice selecting, creating, and modifying DOM elements",
  "2025-09-15",
  "High",
);
const todoJS5 = new Todo(
  "Array Methods",
  "Study map, filter, reduce, and other array methods",
  "2025-09-25",
  "Medium",
);
const todoJS6 = new Todo(
  "Error Handling",
  "Learn try-catch blocks and debugging techniques",
  "2025-10-02",
  "Medium",
);
const todoJS7 = new Todo(
  "Local Storage",
  "Implement data persistence with localStorage and sessionStorage",
  "2025-10-08",
  "Low",
);

htmlProject.addTodo(todoHTML1);
htmlProject.addTodo(todoHTML2);
htmlProject.addTodo(todoHTML3);
htmlProject.addTodo(todoHTML4);
htmlProject.addTodo(todoHTML5);
htmlProject.addTodo(todoHTML6);
htmlProject.addTodo(todoHTML7);

cssProject.addTodo(todoCSS1);
cssProject.addTodo(todoCSS2);
cssProject.addTodo(todoCSS3);
cssProject.addTodo(todoCSS4);
cssProject.addTodo(todoCSS5);
cssProject.addTodo(todoCSS6);
cssProject.addTodo(todoCSS7);

javascriptProject.addTodo(todoJS1);
javascriptProject.addTodo(todoJS2);
javascriptProject.addTodo(todoJS3);
javascriptProject.addTodo(todoJS4);
javascriptProject.addTodo(todoJS5);
javascriptProject.addTodo(todoJS6);
javascriptProject.addTodo(todoJS7);

export { allProjects };
