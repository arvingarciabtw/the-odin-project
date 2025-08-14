const books = [];

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

// -- LOG STATEMENTS FOR TESTING --
const book1 = addBookToBooks("Atomic Habits", "James Clear", 123, true);
const book2 = addBookToBooks("The Last Days of Socrates", "Plato", 267, false);
const book3 = addBookToBooks("Circe", "Madeline Miller", 381, false);

for (const book of books) {
  console.log(book);
}
