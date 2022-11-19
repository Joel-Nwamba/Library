let libraryBook = [];
const form = document.getElementById("form-container")

class Book {
    constructor(title, author, pages) {
        this.title = title,
        this.author = author,
        this.pages = pages
    }
}


// display library book
// myLibrary[myLibrary.length - 1].title
function displayBook() {
    const bookContainer = document.getElementById("book-container");
    // Title of book
    const titleOfBook = document.createElement("p");
    titleOfBook.textContent = libraryBook[libraryBook.length -1].title;
    titleOfBook.classList.add("title-of-book")
    bookContainer.appendChild(titleOfBook);
    // Author
    const authorOfBook = document.createElement("p");
    authorOfBook.textContent = libraryBook[libraryBook.lenght -1].author;
    authorOfBook.classList.add("author-of-book");
    bookContainer.appendChild(authorOfBook);
    // Pages
    const numberOfPages = document.createElement("p");
    numberOfPages.textContent = libraryBook[libraryBook.length -1].pages;
    numberOfPages.classList.add("number-of-pages");
    bookContainer.appendChild(numberOfPages);
            
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


// function clearInput() {
//     const titleBook = document.getElementById("title");
//     const authorBook = document.getElementById("author");
//     const pageNumber = document.getElementById("pages");
//     titleBook.value = "";
//     authorBook.value = "";
//     pageNumber.value = "";
// }

form.addEventListener("submit", function(e) {
    e.preventDefault();
    addBookToLibrary();
    displayBook();
    form.reset();
});




