const mainArea = document.querySelector('.main');
// Storing All the book objects in an array
let myLibrary = [
    {
        "title": "Harry Potter and the Philosphers Stone",
        "author": "J.K. Rowling",
        "pages": "300",
        "isRead": true,
        "imgLink": "https://c8.alamy.com/comp/HMHD9T/harry-potter-and-the-philosophers-stone-HMHD9T.jpg",
        "isFav": false
    },
    {
        "title": "Harry Potter and the Deathly Hallows",
        "author": "Danish Asad",
        "pages": "213",
        "isRead": false,
        "imgLink": "https://www.nicepng.com/png/full/895-8959915_please-note-jk-rowling-harry-potter-book-cover.png",
        "isFav": true
    },
    {
        "title": "Harry Potter and the Chamber of secrets",
        "author": "j.k. rowling",
        "pages": "450",
        "isRead": true,
        "imgLink": "https://wallpaper.dog/large/198914.jpg",
        "isFav": false
    }
];

// To Create Book objects
function Book(title, author, pages, isRead, imgLink) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.imgLink = imgLink;
    this.isRead = isRead;
    this.isFav = false;
}


// Function to Render Books

function renderBooks() {
    mainArea.innerHTML = '';
    updateMissingBookCovers();
    myLibrary.forEach(book => {
        const BookIndex = myLibrary.indexOf(book);

        const newCard = document.createElement('div');
        newCard.classList.add('card');
        const cardHTML = `<img class="book-cover" src="${book.imgLink}" alt="">
        <div class="sleeve">
            <img class="cross" src="card/cross.svg" data-cross="${BookIndex}" alt="">
            <p class="book-title">${book.title}</p>
            <p class="book-author">${book.author}</p>
            <p class="pages-info">${book.pages}</p>
            <div class="icons">
                <img src="card/heart.svg" alt="" class="card-icon isFav" data-fav="${BookIndex}">
                <img src="card/check-square.svg" alt="" class="card-icon isRead" data-read="${BookIndex}">
            </div>
        </div>`

        newCard.innerHTML = cardHTML;
        mainArea.appendChild(newCard);
        if(book.isRead)
        {
            newCard.querySelector('.isRead').classList.add('active');
        }
        if(book.isFav)
        {
            newCard.querySelector('.isFav').classList.add('active');
        }
    });
}



function updateMissingBookCovers() {
    myLibrary.forEach(book => { if (book.imgLink === "") {book.imgLink = 'assets/sampleBook.png'}});
}

renderBooks();

// Function to get Book Data from the form
function getBookData() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const imgUrl = document.querySelector('#img-url').value;
    const isRead = document.querySelector('#is-read').checked;

    const bookData = new Book(title, author, pages, isRead, imgUrl);
    return bookData;
}

function addBookToLibrary() {
    // event.preventDefault();
    const newBook = getBookData();
    myLibrary.push(newBook);
    resetForm();
    renderBooks();
    updateElementArr();
    listenForEvents();
}


function resetForm() {
    document.querySelector("#book-form").reset();
}



//Function to remove book from the library (to be used on the cross button)
let crossArr = [];
let favArr  = [];
let readArr = [];

function updateElementArr() {
    crossArr = document.querySelectorAll('.cross');
    favArr = document.querySelectorAll('.isFav');
    readArr = document.querySelectorAll('.isRead');
}



function listenForEvents() {
    updateElementArr();
    crossArr.forEach(element => {
        element.addEventListener('click', () => removeBook(element))
    });
    favArr.forEach(element => {
        element.addEventListener('click', ()=>toggleFav(element));
    })
    readArr.forEach(element => {
        element.addEventListener('click', ()=>toggleIsRead(element));
    })
}




// Function to favourite book status
function toggleFav(book)
{
    const BookIndex = book.dataset.fav;
    myLibrary[BookIndex].isFav ? myLibrary[BookIndex].isFav = false : myLibrary[BookIndex].isFav = true; 
    // console.log(myLibrary[BookIndex].isFav)
    book.classList.toggle('active');
}
//Function to Toggle Read Book status
function toggleIsRead(book)
{
    const BookIndex = book.dataset.read;
    myLibrary[BookIndex].isRead ? myLibrary[BookIndex].isRead = false : myLibrary[BookIndex].isRead = true; 
    // console.log(myLibrary[BookIndex].isRead)
    book.classList.toggle('active');
}



function removeBook(element) {
    const BookIndex = element.dataset.cross;
    myLibrary.splice(BookIndex, 1);
    renderBooks();
    updateElementArr();
    listenForEvents();
}

listenForEvents();

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

});
