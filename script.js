// Storing All the book objects in an array
let myLibrary = [
    {
        "title": "Harry Potter and the Philosphers Stone",
        "author": "J.K. Rowling",
        "pages": "300",
        "isRead": true,
        "imgLink": "https://c8.alamy.com/comp/HMHD9T/harry-potter-and-the-philosophers-stone-HMHD9T.jpg"
    },
    {
        "title": "Harry Potter and the Deathly Hallows",
        "author": "Danish Asad",
        "pages": "213",
        "isRead": false,
        "imgLink": "https://www.nicepng.com/png/full/895-8959915_please-note-jk-rowling-harry-potter-book-cover.png"
    },
    {
        "title": "Harry Potter and the Chamber of secrets",
        "author": "j.k. rowling",
        "pages": "450",
        "isRead": false,
        "imgLink": "https://wallpaper.dog/large/198914.jpg"
    }
];

// To Create Book objects
function Book(title, author, pages, isRead, imgLink) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.imgLink = imgLink;
}

//To add books to the library
function addBookToLibrary() {
    const authorName = document.getElementById('author-name').value;
    const bookName = document.getElementById('book-name').value;
    const numPages = document.getElementById('num-pages').value;
    const imgLink = document.getElementById('img-url').value;
    const isRead = document.getElementById('read').checked;
    const myBook = new Book(bookName, authorName, numPages, isRead, imgLink);
    myLibrary.push(myBook);
    console.table(myLibrary);
    document.querySelector('#book-form').reset();
}

const mainArea = document.querySelector('.main');
// Function to display the Book Cards
function updateCard() {
    console.log('started updating cards');
    myLibrary.forEach(element => {
        const newCard = document.createElement('div');
        const cardHtml = `<img class="book-cover" src=${element.imgLink} alt="Book-cover">
      <div class="sleeve">
          <img class="cross" id ="remove-book" src="card/cross.svg" alt="remove-book">
          <p class="book-title">${element.title}</p>
          <p class="book-author">${element.author}</p>
          <p class="pages-info">${element.pages}</p>
          <div class="icons">
              <img src="card/heart.svg" alt="" class="card-icon" id ="">
              <img src="card/check-square.svg" alt="" class="card-icon" id="read-btn">
          </div>
      </div>`;
        newCard.innerHTML = cardHtml;
        newCard.classList.add('card');
        mainArea.appendChild(newCard);
        if (element.isRead) {
            newCard.querySelector('#read-btn').classList.add('active');
        }
    });
}

//Function to remove book from the library (to be used on the cross button)
//Function removes the Card element opacity and then removes it from the dom and removes the corresponding object from the myLibrary



// Light/Dark Mode toggle
document.getElementById('toggle-btn').addEventListener('click', () => {
    document.documentElement.classList.toggle('invert');
    document.querySelector('.header').classList.toggle('no-shadow');
    document.querySelector('.sidebar').classList.toggle('no-shadow');
    document.querySelectorAll('.book-cover').forEach(element => (element.classList.toggle('invert')));
})



bookBtn = document.querySelector('#add-book');
bookBtn.addEventListener('click', () => {

    bookBtn.classList.toggle('rotated');
    document.querySelector('.user-stats').classList.toggle('hidden');
    document.querySelector('.book-form').classList.toggle('hidden');

})


updateCard();