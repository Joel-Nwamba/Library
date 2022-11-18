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
function displayBook() {
    // for(let i = 0; i < libraryBook.length; i++) {
    //     const bookContainer = document.getElementById("book-container");
    //     // Title of book
    //     const titleOfBook = document.createElement("p");
    //     titleOfBook.textContent = libraryBook[i].title;
    //     titleOfBook.classList.add("title-of-book")
    //     bookContainer.appendChild(titleOfBook);
    //     // Author
    //     const authorOfBook = document.createElement("p");
    //     authorOfBook.textContent = libraryBook[i].author;
    //     authorOfBook.classList.add("author-of-book");
    //     bookContainer.appendChild(authorOfBook);
    //     // Pages
    //     const numberOfPages = document.createElement("p");
    //     numberOfPages.textContent = libraryBook[i].pages;
    //     numberOfPages.classList.add("number-of-pages");
    //     bookContainer.appendChild(numberOfPages);
    // }
    const bookContainer = document.getElementById("book-container");
    // Title of book
    const titleOfBook = document.createElement("p");
    titleOfBook.textContent = libraryBook[0].titleBook
    titleOfBook.classList.add("title-of-book")
    bookContainer.appendChild(titleOfBook);
    // Author
    const authorOfBook = document.createElement("p");
    authorOfBook.textContent = libraryBook[2].author;
    authorOfBook.classList.add("author-of-book");
    bookContainer.appendChild(authorOfBook);
    // Pages
    const numberOfPages = document.createElement("p");
    numberOfPages.textContent = libraryBook[3].pages;
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


function clearInput() {
    const titleBook = document.getElementById("title");
    const authorBook = document.getElementById("author");
    const pageNumber = document.getElementById("pages");
    titleBook.value = "";
    authorBook.value = "";
    pageNumber.value = "";
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    addBookToLibrary();
    displayBook();
    clearInput();
});




