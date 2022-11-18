let libraryBook = [];
const submit = document.getElementById("submit");
const form = document.getElementById("form-container");

// title.value;
// author.value;
// pages.value;

class Book {
  constructor(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages;
  }
}
//function to create element to avoid code repetition
function createElement(parentElement, element) {
    return parentElement.appendChild(document.createElement(element));
}
// display library book
function displayBook() {
  const bookContainer = document.getElementById("book-container");
  for (let i = 0; i < libraryBook.length; i++) {
    const bookGroups = createElement(bookContainer, 'div');
    console.log(bookGroups)
    bookGroups.classList.add("book-groups");
    // Title of book
    const titleOfBook = createElement(bookGroups, 'p');
    titleOfBook.textContent = libraryBook[i].title;
    // Author
    const authorOfBook = createElement(bookGroups, 'p')
    authorOfBook.textContent = libraryBook[i].author;
    // Pages
    const numberOfPages = createElement(bookGroups, 'p');
    numberOfPages.textContent = libraryBook[i].pages;
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
