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
function addBookToLibrary() {
    const myBook = new Book();
    myLibrary.push(myBook)
}









// Light/Dark Mode toggle
document.getElementById('toggle-btn').addEventListener('click', () => {
    document.documentElement.classList.toggle('invert');
    document.querySelector('.header').classList.toggle('no-shadow');
    document.querySelector('.sidebar').classList.toggle('no-shadow');

})



bookBtn = document.querySelector('#add-book');
bookBtn.addEventListener('click', () => {

    bookBtn.classList.toggle('rotated');
    document.querySelector('.user-stats').classList.toggle('hidden');
    document.querySelector('.book-form').classList.toggle('hidden');

})
