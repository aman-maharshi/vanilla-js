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
        let storedBooks = [
            {
                title: "A Movable Feast",
                author: "Ernest Hemingway"
            },
            {
                title: "The Catcher in the Rye",
                author: "J. D. Salinger"
            },
            {
                title: "Notes from Underground",
                author: "Fyodor Dostoevsky"
            }
        ];
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
    static showError(message) {
        let div = document.createElement('div');
        div.className = 'alert alert-danger';
        div.appendChild(document.createTextNode(message));
        document.getElementById('alert').appendChild(div);
        setTimeout(function() {
            document.getElementById('alert').remove();
        }, 1500)
    }
}

// Storage Class: Handles Storage


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
        UI.showError('All fields are mandatory');
    }
    else {
        // instantiating a new book
        const newBook = new Book(bookName, bookAuthor);
        UI.addBookToList(newBook);
        document.getElementById('book-form').reset();
    }
});

// Event: Remove a Book
document.getElementById('book-list').addEventListener('click', function(e) {
    if(e.target.classList.contains('btn-danger')) {
        e.target.parentElement.parentElement.remove();
    }
})