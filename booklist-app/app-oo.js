
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
}

// DOM  VARIABLES
let form = document.querySelector('#book-form'),
    bookTitle = document.querySelector('#title'),
    bookAuthor = document.querySelector('#author'),
    alertDiv = document.querySelector('#alert'),
    tableBody = document.querySelector('#book-list');

//  EVENT LISTENERS
form.addEventListener('submit', formSubmit);
function formSubmit(e) {
    e.preventDefault();
    const bookName = bookTitle.value,
          authorName = bookAuthor.value;

    const book = new Book(bookName, authorName);
    const updateInterface = new UI;

    updateInterface.addBookToTable(book);
}
