// Storing All the book objects in an array
let myLibrary = [];

// To Create Book objects
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

//To add books to the library
function addBookToLibrary()
{
    myBook = new Book();
    myLibrary.push(myBook)
}