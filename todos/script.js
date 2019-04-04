/*
    TODO:
    - save items to local storage
    - load list items from local storage on page load/ refresh
*/

// VARIABLES
let todoItems = document.getElementById('todo-items'),
    todoInput = document.getElementById('todo-input'),
    todoForm = document.getElementById('todo-form'),
    todoSearch = document.getElementById('todo-search');


// EVENT LISTENERS
todoItems.addEventListener('click', removeItem);
todoForm.addEventListener('submit', addTodo);
todoSearch.addEventListener('keyup', searchItem); 


// FUNCTIONS
function removeItem(e) { 
    if(e.target.classList.contains('btn'))  {
        e.target.parentElement.remove();
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