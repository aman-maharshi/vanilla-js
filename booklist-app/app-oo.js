/*
    ISSUE: After removing a item from the table, when we add a next book, it shows undefined for the bookTitle!!!
*/
//  CLASSES
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class UI {
    addBookToTable(bookObject) {
        let tr = document.createElement('tr');
        let row = `<td>${bookObject.title}</td>
                   <td>${bookObject.author}</td>
                   <td><a href="#" class="btn btn-danger btn-sm">X</a></td>
                  `
        tr.innerHTML = row;
        tableBody.appendChild(tr);
        form.reset();
    }
    showAlert(message, nameOfClass) {
        alertDiv.style.display = 'block';
        alertDiv.textContent = message;
        alertDiv.className = nameOfClass;
        setTimeout(() => {
            alertDiv.style.display = 'none';
        }, 1500)
    }
    removeItem(targetEvent) {
        if(targetEvent.classList.contains('btn-danger')) {
            targetEvent.parentElement.parentElement.remove();
            updateInterface.showAlert('Book Removed!', 'alert-warning');
        }
    }
}
const updateInterface = new UI;

class Storage {
    static getBooks() {
        const details = localStorage.getItem('books');
        if(details === null) {
            localStorage.setItem('books', '[]');   
        }
        return JSON.parse(localStorage.getItem('books'));
    }
    static addBook(book) {
        const booksArray = Storage.getBooks();
        booksArray.push(book);
        localStorage.setItem('books', JSON.stringify(booksArray));
    }
    static displayBooks() {
        const booksArray = Storage.getBooks();
        if (booksArray.length != 0) {
            booksArray.forEach((obj) => {
                updateInterface.addBookToTable(obj);
            });
        }
    }
    static removeBook(target) {
        bookTitle = target.parentElement.parentElement.firstChild.textContent;
        const array = Storage.getBooks();
        array.forEach((item, index) => {
            if(bookTitle === item.title) {
                array.splice(index, 1);
            }
        })
        localStorage.setItem('books', JSON.stringify(array));
    }
}

// DOM  VARIABLES
let form = document.querySelector('#book-form'),
    bookTitle = document.querySelector('#title'),
    bookAuthor = document.querySelector('#author'),
    alertDiv = document.querySelector('#alert'),
    tableBody = document.querySelector('#book-list');

//  EVENT LISTENERS
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let bookName = bookTitle.value,
          authorName = bookAuthor.value;

    console.log(bookName, authorName);
    const book = new Book(bookName, authorName);
    if (bookName === '' || authorName === '') {
        updateInterface.showAlert('All fields are mandatory!', 'alert-danger');
    }
    else {
        updateInterface.addBookToTable(book);
        updateInterface.showAlert('Book Added!', 'alert-success');
        Storage.addBook(book);
    }
});
tableBody.addEventListener('click', function(e) {
    updateInterface.removeItem(e.target);
    Storage.removeBook(e.target);
});
document.addEventListener('DOMContentLoaded', function(){
    Storage.displayBooks();
})

