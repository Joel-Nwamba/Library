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


// display library book
function displayBook() {
        const bookGroup = document.createElement("div");
        const title = document.createElement("h1");
        title.textContent = "Title";
        const author = document.createElement("h1");
        author.textContent = "Author";
        const page = document.createElement("h1");
        page.textContent = "Page";

        for(let i = 0; i < libraryBook.length; i++) {
            const titleOfBook = document.createElement("p");
            titleOfBook.textContent = libraryBook[i].titleBook;
            const authorOfBook = document.createElement("p");
            authorOfBook.textContent = libraryBook[i].authorBook
            const pageOfBook = document.createElement("p");
            pageOfBook.textContent = libraryBook[i].pageNumber
            // Create class name
            bookGroup.classList.add("book-group");
            title.classList.add("title-book");
            author.classList.add("author-book");
            page.classList.add("page-book");
            titleOfBook.classList.add("title-of-book");
            authorOfBook.classList.add("author-of-book");
            pageOfBook.classList.add("page-of-book");
            // Append child
            bookGroup.appendChild(title);
            bookGroup.appendChild(author);
            bookGroup.appendChild(page);
            bookGroup.appendChild(titleOfBook);
            bookGroup.appendChild(authorOfBook);
            bookGroup.appendChild(pageOfBook);
            bookContainer.appendChild(bookGroup);
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

form.addEventListener("submit", function(e) {
    e.preventDefault();
    addBookToLibrary();
    clearInput();
    displayBook();
});




