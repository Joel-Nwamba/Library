let libraryBook = [];
const submit = document.getElementById("submit");
const form = document.getElementById("form-container");
const body = document.querySelector("body");

// title.value;
// author.value;
// pages.value;

class Book {
  constructor(title, author, pages) {
    (this.title = title), (this.author = author), (this.pages = pages);
  }
}

// display library book
function displayBook() {
  const bookContainer = document.getElementById("book-container");
  for (let i = 0; i < libraryBook.length; i++) {
    const bookGroups = document.createElement("div");
    bookGroups.classList.add("book-groups");
    bookContainer.appendChild(bookGroups);
    // Title of book
    const titleOfBook = document.createElement("p");
    titleOfBook.textContent = libraryBook[i].title;
    bookGroups.appendChild(titleOfBook);
    // Author
    const authorOfBook = document.createElement("p");
    authorOfBook.textContent = libraryBook[i].author;
    bookGroups.appendChild(authorOfBook);
    // Pages
    const numberOfPages = document.createElement("p");
    numberOfPages.textContent = libraryBook[i].pages;
    bookGroups.appendChild(numberOfPages);
  }
}

function addBookToLibrary() {
  // Add coresponding values for uses input
  const titleBook = document.getElementById("title").value;
  const authorBook = document.getElementById("author").value;
  const pageNumber = document.getElementById("pages").value;
  // The users input value
  const newBook = new Book(titleBook, authorBook, pageNumber);
  // Push the user input to the libraryBook
  libraryBook.push(newBook);
  console.log(libraryBook);
}

function clearInput() {
  const titleBook = document.getElementById("title");
  const authorBook = document.getElementById("author");
  const pageNumber = document.getElementById("pages");
  titleBook.value = "";
  authorBook.value = "";
  pageNumber.value = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addBookToLibrary();
  displayBook();
  clearInput();
});
