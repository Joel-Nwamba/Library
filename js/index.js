let myLibrary = [];

const titleBook = document.getElementById("title");
const authorBook = document.getElementById("author");
const statusBook = document.getElementById("status");
const submit = document.getElementById("submit");
const bookContainer = document.getElementById("book-container");



class Book {
    constructor(title, author, page) {
        this.title = title,
        this.author = author,
        this.page = page
    }
}

submit.addEventListener("click", function(event) {
    if(titleBook.value === "" || authorBook === "" || statusBook.value === "") {
        return;
    }
    if(titleBook.value && authorBook.value && statusBook.value) {
        addBookToLibrary()
        event.preventDefault()
    }
    titleBook.value = ""
    authorBook.value = ""
    statusBook.value = ""
})

function addBookToLibrary() {
    for(let i=0; i < myLibrary.length; i++ ) {
        // Create new tags
        const groupBooks = document.createElement("div");
        const title = document.createElement("p");
        const author = document.createElement("p");
        const page = document.createElement("p");
        // Add class 
        groupBooks.classList.add("group-books")
        title.classList.add("title-book");
        author.classList.add("author-book");
        page.classList.add("page-number");
        // Append child
        groupBooks.appendChild(title);
        groupBooks.appendChild(author);
        groupBooks.appendChild(page);
        bookContainer.appendChild(groupBooks);

    }
} 

console.log(addBookToLibrary())




