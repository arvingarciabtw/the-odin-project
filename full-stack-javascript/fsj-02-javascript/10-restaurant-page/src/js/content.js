import displayHome from "./home.js";
import displayMenu from "./menu.js";
import displayAbout from "./about.js";

const main = document.querySelector("main#content");
const homeButton = document.querySelector(".btn-home");
const menuButton = document.querySelector(".btn-menu");
const aboutButton = document.querySelector(".btn-about");

export default function displayContent() {
  main.appendChild(displayHome());

  homeButton.addEventListener("click", () => {
    main.innerHTML = "";
    homeButton.classList.add("active");
    menuButton.classList.remove("active");
    aboutButton.classList.remove("active");
    main.appendChild(displayHome());
  });

  menuButton.addEventListener("click", () => {
    main.innerHTML = "";
    menuButton.classList.add("active");
    homeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    main.appendChild(displayMenu());
  });

  aboutButton.addEventListener("click", () => {
    main.innerHTML = "";
    aboutButton.classList.add("active");
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    main.appendChild(displayAbout());
  });
}
