const root = document.querySelector("html");
const toggler = document.querySelector(".theme-toggle");
const toggleIcon = document.querySelector(".theme-toggle-icon");

if (localStorage.getItem("theme") === "dark") {
  root.classList.add("dark");
} else {
  root.classList.remove("dark");
}

toggler.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

const menu = document.querySelector(".menu-button");
const closeModal = document.querySelector(".close-modal-button");
const modal = document.querySelector(".modal");

menu.addEventListener("click", () => {
  if (modal.style.display === "grid") {
    modal.style.display = "none";
  } else {
    modal.style.display = "grid";
  }
});

closeModal.addEventListener("click", () => {
  if (modal.style.display === "grid") {
    modal.style.display = "none";
  } else {
    modal.style.display = "grid";
  }
});
