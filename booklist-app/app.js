//  VARIABLES
let form = document.querySelector('#book-form'),
    title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    tableBody = document.querySelector('#book-list');

let error = false;

//  EVENT LISTENERS
title.addEventListener('blur', validation);
author.addEventListener('blur', validation);
form.addEventListener('submit', addBookToList);

//  FUNCTIONS

function validation() {
    if(this.value !=   '') {
        this.className = 'form-control is-valid';
        error = false;
    }
    else {
        this.className = 'form-control is-invalid';
        error = true;
        this.nextElementSibling.className = 'invalid-feedback';
        this.nextElementSibling.textContent = 'Field can\'t be left blank';
    }
}
function addBookToList(e) {
    e.preventDefault();
    if (error == false) {
        
    }
}