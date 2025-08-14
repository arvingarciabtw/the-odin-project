const books = [];

// -- SELECTING DOM ELEMENTS --
const booksContainer = document.querySelector(".books");
const newBookButton = document.querySelector(".btn-new-book");
const modal = document.querySelector("dialog");
const closeModalButton = document.querySelector("dialog .btn-close");

// -- FUNCTIONS --
function Book(title, author, pages, isRead, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = id;
}

function addBookToBooks(title, author, pages, isRead) {
  const id = self.crypto.randomUUID();
  const book = new Book(title, author, pages, isRead, id);
  books.push(book);
  return book;
}

function displayBooks() {
  for (const book of books) {
    // Book UI
    const bookElement = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const isRead = document.createElement("p");

    bookElement.classList.add("book");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    isRead.classList.add("is-read");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = "A " + book.pages + " page book by";
    isRead.textContent = book.isRead;
    bookElement.setAttribute("id", book.id);

    // bookElement.appendChild(isRead);
    bookElement.appendChild(title);
    bookElement.appendChild(pages);
    bookElement.appendChild(author);

    booksContainer.appendChild(bookElement);
  }
}

// -- EVENT LISTENERS --
newBookButton.addEventListener("click", () => {
  modal.showModal();
});

closeModalButton.addEventListener("click", () => {
  modal.close();
});

// -- LOG STATEMENTS FOR TESTING --
const book1 = addBookToBooks("Atomic Habits", "James Clear", 123, true);
const book2 = addBookToBooks("The Last Days of Socrates", "Plato", 267, false);
const book3 = addBookToBooks("Circe", "Madeline Miller", 381, false);

for (const book of books) {
  console.log(book);
}

displayBooks();
