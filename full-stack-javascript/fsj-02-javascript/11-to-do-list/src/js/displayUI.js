import { allProjects } from "./todoLogic";
import { Element } from "./element";
import "./addProject.js";
import displayProjectTodos from "./displayProjectTodos.js";
import addTask from "./addTask.js";

const projectsContainer = document.querySelector(".projects-container");
const mainContainer = document.querySelector("main");

function displayFirstProject(project) {
  mainContainer.innerHTML = "";
  addTask(project, mainContainer);
  displayProjectTodos(project, mainContainer);
}

export default function displayUI() {
  let isFirstProject = true;

  for (const project of allProjects) {
    // Display all projects in sidebar
    const projectEl = new Element("li", null, project.name).create();
    projectsContainer.appendChild(projectEl);

    projectEl.addEventListener("click", () => {
      mainContainer.innerHTML = "";

      addTask(project, mainContainer);
      displayProjectTodos(project, mainContainer);
    });

    if (isFirstProject) {
      displayFirstProject(project);
      isFirstProject = false;
    }
  }
}
