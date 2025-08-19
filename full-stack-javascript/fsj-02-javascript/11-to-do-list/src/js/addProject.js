import { allProjects } from "./todoLogic";
import displayUI from "./displayUI.js";
import Project from "./projects.js";

const projectsContainer = document.querySelector(".projects-container");
const addProjectButton = document.querySelector(".btn-add-project");
const dialogAddProject = document.querySelector(".dialog-add-project");
const formAddProject = document.querySelector(".form-add-project");
const inputAddProject = document.querySelector(".input-add-project");
const closeDialogAddProject = document.querySelector(".btn-close-add-project");

addProjectButton.addEventListener("click", () => {
  dialogAddProject.showModal();
});

closeDialogAddProject.addEventListener("click", () => {
  dialogAddProject.close();
});

formAddProject.addEventListener("submit", (e) => {
  e.preventDefault();
  allProjects.push(new Project(inputAddProject.value));
  dialogAddProject.close();
  projectsContainer.innerHTML = "";
  displayUI();
  formAddProject.reset();
});
