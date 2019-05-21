/*
    CLASSES
---------------------------------------------*/

// Book Class: Represent a Book
class Book {
    constructor() {
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
        `;
        element.innerHTML = template;
        tbody.appendChild(element);
    }
}
UI.displayBooks();

// Storage Class: Handles Storage


/*
    EVENTS
---------------------------------------------*/

// Event: Display Books

// Event: Add a Book 

// Event: Remove a Book
