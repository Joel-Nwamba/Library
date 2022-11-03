let myLibrary = [];

const titleBook = document.getElementById("title");
const authorBook = document.getElementById("author");
const statusBook = document.getElementById("status");
const submit = document.getElementById("submit");



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
    for(let i = 0; i < myLibrary.length; i++) {
        const newBookAdded = new Book(titleBook.value, authorBook.value, statusBook.value);
        myLibrary[i].push(newBookAdded);
    }

}




