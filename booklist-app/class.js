/*
    CLASSES
---------------------------------------------*/
// Book Class: Represent a Book
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// UI Class: Handle UI Tasks like - display books,  add book to list, remove book from list, show alert
class UI {
    // static - so we don't have to instantiate UI everytime we wanna use displayBooks() 
    static displayBooks() {
        let storedBooks = Store.getBooks();
        storedBooks.forEach(function(book) {
            UI.addBookToList(book);
        })
    }
    static addBookToList(book) {
        let tbody = document.getElementById('book-list');
        let element = document.createElement('tr');
        let template = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><a href="#" class="btn btn-danger btn-sm">X</a></td>
        `;
        element.innerHTML = template;
        tbody.appendChild(element);
    }
    static showAlert(message, type) {
        let div = document.createElement('div');
        div.className = `alert alert-${type}`;
        div.appendChild(document.createTextNode(message));
        document.getElementById('alert').appendChild(div);
        setTimeout(function() {
            document.getElementById('alert').textContent = '';
        }, 1000)
    }
}

// Storage Class: Handles Storage
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book) {
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));

    }
    static removeBook(bookName) {
        let books = Store.getBooks();
        books.forEach(function(book, index){
            if(book.title == bookName) {
                books.splice(index, 1)
            }
        });
        localStorage.setItem('books', JSON.stringify(books));

    }
}

/*
    EVENTS
---------------------------------------------*/

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book 
document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const bookName = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;

    if (bookName == '' || bookAuthor == '') {
        UI.showAlert('Fields can\'t be blank', 'danger');
        document.getElementById('book-form').reset();
    }
    else {
        // instantiating a new book
        const newBook = new Book(bookName, bookAuthor);
        Store.addBook(newBook);
        UI.addBookToList(newBook);
        UI.showAlert('Book Added', 'success')
        document.getElementById('book-form').reset();
    }
});

// Event: Remove a Book
document.getElementById('book-list').addEventListener('click', function(e) {
    if(e.target.classList.contains('btn-danger')) {
        Store.removeBook(e.target.parentElement.parentElement.firstElementChild.textContent);
        e.target.parentElement.parentElement.remove();
        UI.showAlert('Book Removed', 'success')
    }
})