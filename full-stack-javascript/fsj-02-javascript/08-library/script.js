let books = [];

// -- SELECTING DOM ELEMENTS --
const booksContainer = document.querySelector(".books");
const newBookButton = document.querySelector(".btn-new-book");
const modal = document.querySelector("dialog");
const closeModalButton = document.querySelector("dialog .btn-close");
const form = document.querySelector("form");

// -- FUNCTIONS --
function Book(title, author, pages, isRead, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = id;

  if (isRead) {
    this.isRead = "Read";
  } else {
    this.isRead = "Not Read";
  }
}

Book.prototype.toggleReadStatus = function () {
  if (this.isRead === "Read") {
    this.isRead = "Not Read";
  } else {
    this.isRead = "Read";
  }
};

function addBookToBooks(title, author, pages, isRead) {
  const id = self.crypto.randomUUID();
  const book = new Book(title, author, pages, isRead, id);
  books.push(book);
  return book;
}

function displayBooks() {
  booksContainer.innerHTML = "";
  const COLOR_GREEN = "#67a55a";
  const COLOR_RED = "#ff6962";

  for (const book of books) {
    // Book UI
    const bookElement = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const isRead = document.createElement("p");
    const removeBookButton = document.createElement("button");
    const toggleReadButton = document.createElement("button");

    bookElement.classList.add("book");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    isRead.classList.add("is-read");
    removeBookButton.classList.add("btn-remove-book");
    removeBookButton.classList.add(book.id);
    toggleReadButton.classList.add("btn-toggle-read");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = "A " + book.pages + " page book by";
    isRead.textContent = book.isRead;
    removeBookButton.textContent = "×";
    bookElement.setAttribute("id", book.id);

    if (book.isRead === "Read") {
      toggleReadButton.style.backgroundColor = COLOR_GREEN;
    } else {
      toggleReadButton.style.backgroundColor = COLOR_RED;
    }

    bookElement.appendChild(toggleReadButton);
    bookElement.appendChild(removeBookButton);
    bookElement.appendChild(title);
    bookElement.appendChild(pages);
    bookElement.appendChild(author);

    booksContainer.appendChild(bookElement);
  }

  const removeBookButton = document.querySelectorAll(".btn-remove-book");
  const toggleReadButtons = document.querySelectorAll(".btn-toggle-read");

  for (let i = 0; i < removeBookButton.length; i++) {
    removeBookButton[i].addEventListener("click", (event) => {
      const parentID = event.target.parentNode.id;
      const bookToBeRemoved = document.getElementById(`${parentID}`);
      bookToBeRemoved.remove();
      books = books.filter((book) => book.id !== parentID);
      displayBooks();
    });
  }

  for (let i = 0; i < toggleReadButtons.length; i++) {
    toggleReadButtons[i].addEventListener("click", () => {
      if (books[i].isRead === "Read") {
        toggleReadButtons[i].style.backgroundColor = COLOR_RED;
        books[i].toggleReadStatus();
      } else {
        toggleReadButtons[i].style.backgroundColor = COLOR_GREEN;
        books[i].toggleReadStatus();
      }
    });
  }
}

// -- EVENT LISTENERS --
newBookButton.addEventListener("click", () => {
  modal.showModal();
});

closeModalButton.addEventListener("click", () => {
  modal.close();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleValue = document.querySelector(".title").value;
  const authorValue = document.querySelector(".author").value;
  const pagesValue = document.querySelector(".pages").value;
  let isReadValue = false;

  if (document.querySelector(".is-read").checked) {
    isReadValue = true;
  } else {
    isReadValue = false;
  }

  modal.close();

  addBookToBooks(titleValue, authorValue, pagesValue, isReadValue);
  displayBooks();
});

// -- PREPOPULATE BOOKS ARRAY --

const prepopulatedBooks = [
  [
    "Atomic Habits",
    "The Last Days of Socrates",
    "The Song of Achilles",
    "Tao Te Ching",
    1984,
    "Clean Code",
  ],
  [
    "James Clear",
    "Plato",
    "Madeline Miller",
    "Lao Tzu",
    "George Orwell",
    "Robert Martin",
  ],
  [320, 304, 416, 86, 328, 464],
  [true, false, false, true, true, false],
];

for (let i = 0; i < prepopulatedBooks[0].length; i++) {
  const title = prepopulatedBooks[0][i];
  const author = prepopulatedBooks[1][i];
  const pages = prepopulatedBooks[2][i];
  const isRead = prepopulatedBooks[3][i];

  addBookToBooks(title, author, pages, isRead);
}

displayBooks();
