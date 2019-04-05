// VARIABLES
let todoItems = document.getElementById('todo-items'),
    todoInput = document.getElementById('todo-input'),
    todoForm = document.getElementById('todo-form'),
    todoSearch = document.getElementById('todo-search');


// EVENT LISTENERS
todoItems.addEventListener('click', removeItem);
todoForm.addEventListener('submit', addTodo);
todoSearch.addEventListener('keyup', searchItem); 
document.addEventListener('DOMContentLoaded', loadItems);


// FUNCTIONS
function removeItem(e) { 
    if(e.target.classList.contains('btn'))  {
        let item = e.target.parentElement;
        // remove item from local storage
        removeFromLocalStorage(item);
        // remove item from DOM
        item.remove();
    }
}

function addTodo(e) {
    e.preventDefault();
    let todo = todoInput.value;

    if(todo != '') {
        // creating a list item
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = todo;

        // creating the 'X' button and appending it to 'li'
        let xBtn = document.createElement('button');
        xBtn.className = 'btn btn-dark btn-sm float-right';
        xBtn.textContent = 'X';
        li.appendChild(xBtn);

        // appending the todo item to the list
        todoItems.appendChild(li);
        todoForm.reset();
        
        // append the todo item to local storage array
        addToLocalStorage(todo);
        checkLocalStorage();
    }
}

function searchItem() {
    let searchInput = todoSearch.value.toUpperCase();
    let items = todoItems.getElementsByTagName('li');
    for(let i = 0; i < items.length; i++) {
        let val = items[i].textContent.toUpperCase();
        if(val.indexOf(searchInput) != -1) {
            items[i].style.display = 'block';
        }
        else{
            items[i].style.display = 'none';
        }
    }
}

function addToLocalStorage(todo) {
    let storageItems = getFromLocalStorage();
    storageItems.push(todo);
    localStorage.setItem('todo', JSON.stringify(storageItems));
}

function getFromLocalStorage() {
    let items = localStorage.getItem('todo')
    if(items === null) {
        items = [];
    }
    else {
        items = JSON.parse(items);
    }
    return items;
}

function removeFromLocalStorage(todo) {
    let liValue = todo.firstChild.textContent;
    let storageArray = getFromLocalStorage();
    storageArray.forEach(function(item, index) {
        if(item === liValue) {
            storageArray.splice(index,1);
            localStorage.setItem('todo', JSON.stringify(storageArray));
        }
        checkLocalStorage();
    })
}
// load todo items from local storage
function loadItems() {
    todoInput.focus();
    let items = getFromLocalStorage();
    checkLocalStorage();
    items.forEach(function(item){
        if(item != ""){
            // create li
            let li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = item;
            
            //create 'X' button
            let btn = document.createElement('button');
            btn.className = 'btn btn-dark btn-sm float-right';
            btn.textContent = 'X';

            li.appendChild(btn);
            todoItems.appendChild(li);
        }
    });
}
function checkLocalStorage() {
    let arr = getFromLocalStorage();
    if(arr.length != 0) {
        todoItems.parentElement.style.display = 'block';
    }
    else {
        todoItems.parentElement.style.display = 'none';
    }
}