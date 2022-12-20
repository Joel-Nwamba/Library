let libraryBook = [];
const form = document.getElementById("form-container");

class Book {
    constructor(title, author, pages, read) {
        this.title = title,
            this.author = author,
            this.pages = pages,
            this.read = read;
    }
}


function displayBook() {
    const bookContainer = document.getElementById("book-container");
    const bookInformation = document.createElement("div");
    bookInformation.classList.add("book-information");
    bookContainer.appendChild(bookInformation);
    // Title of book
    const titleOfBook = document.createElement("p");
    titleOfBook.textContent = libraryBook[libraryBook.length -1].title;
    titleOfBook.classList.add("title-of-book")
    bookInformation.appendChild(titleOfBook);
    // Author
    const authorOfBook = document.createElement("p");
    authorOfBook.textContent = libraryBook[libraryBook.length -1].author;
    authorOfBook.classList.add("author-of-book");
    bookInformation.appendChild(authorOfBook);
    // Pages
    const numberOfPages = document.createElement("p");
    numberOfPages.textContent = libraryBook[libraryBook.length -1].pages;
    numberOfPages.classList.add("number-of-pages");
    bookInformation.appendChild(numberOfPages);
    // Read button
    const readButton = document.createElement("button");
    readButton.classList.add("read-btn");
    readButton.textContent = "read"
    bookInformation.appendChild(readButton);
    // if condition of red or unread book
        if(libraryBook[libraryBook.length -1].read === true) {
            readButton.textContent = "read";
            readButton.style.backgroundColor = "blue gray";
        } else if(libraryBook[libraryBook.length -1].read === false) {
            readButton.textContent = "not read";
            readButton.style.backgroundColor = "white";
        }
        // Event listener
        readButton.addEventListener("click", function() {
           libraryBook[libraryBook.length -1].read = !libraryBook[libraryBook.length -1].read;
            toggleStatus()
        })

        // Book.prototype.readStatus = function() {
        //     this.read = !this.read
        // }

        // toggle statis
        function toggleStatus() {
         if(libraryBook[libraryBook.length -1].read === true) {
                readButton.textContent = "not read"
                readButton.style.backgroundColor = "white"
            } else if(libraryBook[libraryBook.length -1].read === false) {
                readButton.textContent = "read"
                readButton.style.backgroundColor = "blue gray"
            }
        }


    // create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    // create text to appear on button
    const text = document.createTextNode("delete");
    deleteButton.appendChild(text);
    bookInformation.appendChild(deleteButton);
    deleteButton.addEventListener("click", function() {
        bookContainer.removeChild(bookInformation);
    })
            
    }


function addBookToLibrary() {
    // Add coresponding values for uses input
    const titleBook = document.getElementById("title").value;
    const authorBook = document.getElementById("author").value;
    // console.log(authorBook)
    const pageNumber = document.getElementById("pages").value;
    const bookRead = document.getElementById("book-read").checked
    // The users input value
    const newBook = new Book(titleBook, authorBook, pageNumber, bookRead);
    // libraryBook.push(newBook.readStatus())
    // Push the user input to the libraryBook
    libraryBook.push(newBook);
    console.log(libraryBook);
}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    addBookToLibrary();
    displayBook();
    form.reset();
});




