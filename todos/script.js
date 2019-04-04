// VARIABLES
let todoItems = document.getElementById('todo-items'),
    todoInput = document.getElementById('todo-input'),
    todoForm = document.getElementById('todo-form');


// EVENT LISTENERS
todoItems.addEventListener('click', removeItem);
todoForm.addEventListener('submit', addTodo);

// FUNCTIONS

function removeItem(e) {
    if(e.target.classList.contains('btn')) {
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