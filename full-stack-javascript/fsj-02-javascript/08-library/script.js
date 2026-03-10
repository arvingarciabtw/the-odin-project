/*
  --- THEME TOGGLE ---
*/
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

/*
  --- MOBILE MENU ---
*/
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

/*
  --- LIBRARY ---
*/
let library = [];
let bookToDelete = null;

const libraryEl = document.querySelector(".library");

if (localStorage.getItem("library")) {
  library = JSON.parse(localStorage.getItem("library"));

  let temp = [];

  for (const book of library) {
    const reconstructedBook = new Book(
      book.title,
      book.author,
      book.pages,
      book.isRead,
    );
    temp.push(reconstructedBook);
  }

  library = temp;
} else {
  addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "180", true);
  addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "281", true);
  addBookToLibrary("1984", "George Orwell", "328", false);
  addBookToLibrary("Brave New World", "Aldous Huxley", "311", false);
  addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "277", true);
  addBookToLibrary("Of Mice and Men", "John Steinbeck", "112", true);
  addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "310", false);
  addBookToLibrary("Fahrenheit 451", "Ray Bradbury", "158", false);
  addBookToLibrary("Animal Farm", "George Orwell", "112", true);
  addBookToLibrary("The Alchemist", "Paulo Coelho", "208", false);
}

displayLibrary();

function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.toggleStatus = function () {
  this.isRead = !this.isRead;
};

function addBookToLibrary(title, author, pages, isRead) {
  library.push(new Book(title, author, pages, isRead));
  localStorage.setItem("library", JSON.stringify(library));
}

function displayLibrary() {
  for (const book of library) {
    const bookEl = document.createElement("div");
    const titleEl = document.createElement("h1");
    const authorEl = document.createElement("p");
    const pagesEl = document.createElement("p");
    const isReadEl = document.createElement("button");
    const deleteBookTrigger = document.createElement("button");
    const detailsWrapper = document.createElement("div");
    const buttonsWrapper = document.createElement("div");
    const deleteBookModal = document.querySelector(".delete-book-modal");

    titleEl.textContent = book.title;
    authorEl.textContent = book.author;
    pagesEl.textContent = `A ${book.pages} page book by`;
    isReadEl.textContent = book.isRead ? "Read" : "Unread";
    deleteBookTrigger.textContent = "Delete";

    detailsWrapper.appendChild(pagesEl);
    detailsWrapper.appendChild(authorEl);

    buttonsWrapper.appendChild(isReadEl);
    buttonsWrapper.appendChild(deleteBookTrigger);

    bookEl.appendChild(titleEl);
    bookEl.appendChild(detailsWrapper);
    bookEl.appendChild(buttonsWrapper);

    bookEl.dataset.id = book.id;

    libraryEl.appendChild(bookEl);

    deleteBookTrigger.addEventListener("click", () => {
      bookToDelete = book;
      deleteBookModal.style.display = "block";
    });

    isReadEl.addEventListener("click", () => {
      book.toggleStatus();
      localStorage.setItem("library", JSON.stringify(library));
      clearLibraryDOM();
      displayLibrary();
    });

    const closeDeleteModal = document.querySelector("#close-delete-book-modal");

    closeDeleteModal.addEventListener("click", () => {
      if (deleteBookModal.style.display === "block") {
        deleteBookModal.style.display = "none";
      }
    });
  }
}

const deleteBookBtn = document.querySelector("#delete-book-btn");
const deleteBookModal = document.querySelector(".delete-book-modal");

deleteBookBtn.addEventListener("click", () => {
  if (!bookToDelete) return;

  library = library.filter((currBook) => currBook.id !== bookToDelete.id);
  localStorage.setItem("library", JSON.stringify(library));

  bookToDelete = null;
  deleteBookModal.style.display = "none";

  clearLibraryDOM();
  displayLibrary();
});

function clearLibraryDOM() {
  libraryEl.innerHTML = "";
}

// New book modal
const newBookBtn = document.querySelector("#new-book-btn");
const newBookModal = document.querySelector(".create-book-modal");
const newBookForm = document.querySelector("#create-book-form");
const closeNewBookBtn = document.querySelector("#close-create-book-modal");

newBookBtn.addEventListener("click", () => {
  if (
    newBookModal.style.display === "none" ||
    newBookModal.style.display === ""
  ) {
    newBookModal.style.display = "block";
  }
});

closeNewBookBtn.addEventListener("click", () => {
  if (newBookModal.style.display === "block") {
    newBookModal.style.display = "none";
  }
});

newBookForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const titleEl = document.querySelector("#title");
  const authorEl = document.querySelector("#author");
  const pagesEl = document.querySelector("#pages");
  const isReadEl = document.querySelector("#is-read");

  addBookToLibrary(
    titleEl.value,
    authorEl.value,
    pagesEl.value,
    isReadEl.checked,
  );

  newBookModal.style.display = "none";

  titleEl.value = "";
  authorEl.value = "";
  pagesEl.value = "";
  isReadEl.checked = false;

  clearLibraryDOM();
  displayLibrary();
});
