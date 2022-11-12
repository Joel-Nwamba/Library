let libraryBook = [];
const submit = document.getElementById("submit");
const bookContainer = document.getElementById("book-container");
const form = document.getElementById("form-container")

// title.value;
// author.value;
// pages.value;



class Book {
    constructor(title, author, pages) {
        this.title = title,
        this.author = author,
        this.pages = pages
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

submit.addEventListener("submit", function(e) {
    e.preventDefault();
    addBookToLibrary();
});

addBookToLibrary()




