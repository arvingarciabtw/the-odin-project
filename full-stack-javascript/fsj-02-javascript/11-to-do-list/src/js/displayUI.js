import { allProjects } from "./todoLogic";
import addProject from "./addProject.js";
import displayProjectTodos from "./displayProjectTodos.js";

const projectsContainer = document.querySelector(".projects-container");
const mainContainer = document.querySelector("main");

export default function displayUI() {
  for (const project of allProjects) {
    // Display all projects in sidebar
    const projectEl = document.createElement("li");
    projectEl.textContent = project.name;
    projectsContainer.appendChild(projectEl);

    // Display all todos based on project clicked
    projectEl.addEventListener("click", () => {
      mainContainer.innerHTML = "";
      displayProjectTodos(project, mainContainer);
    });
  }

  addProject();
}
