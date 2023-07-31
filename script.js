// Storing All the book objects in an array
let myLibrary = [1, 2, 23, 4, 4,2, 23, 4, 4];

// To Create Book objects
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

//To add books to the library
function addBookToLibrary() {
    const authorName = document.getElementById('author-name').value;
    const bookName = document.getElementById('book-name').value;
    const numPages = document.getElementById('num-pages').value;
    const isRead = document.getElementById('read').checked;
    const myBook = new Book(bookName, authorName, numPages, isRead);
    myLibrary.push(myBook);
    console.table(myLibrary);
    document.querySelector('#book-form').reset()
}

const mainArea = document.querySelector('.main');
// Function to display the Book Cards
function updateCard() {
    console.log('started updating cards');
    myLibrary.forEach(element => {
        const newCard = document.createElement('div');
        const cardHtml = `
    
      <img class="book-cover" src="card/book-cover.png" alt="">
      <div class="sleeve">
          <img class="cross" id ="remove-book" src="card/cross.svg" alt="">
          <p class="book-title">Harry Potter and The Goblet of Fire</p>
          <p class="book-author">J.K. Rowling</p>
          <p class="pages-info">238</p>
          <div class="icons">
              <img src="card/heart.svg" alt="" class="card-icon">
              <img src="card/check-square.svg" alt="" class="card-icon">
          </div>
      </div>

  `;
        newCard.innerHTML = cardHtml;
        newCard.classList.add('card');
        mainArea.appendChild(newCard);
    });
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


updateCard();