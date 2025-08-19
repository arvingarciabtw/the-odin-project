import { allProjects } from "./todoLogic";

export default function setLocalStorage() {
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
}
