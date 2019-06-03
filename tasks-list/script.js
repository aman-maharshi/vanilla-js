//  VARIABLES
let form = document.querySelector('#task-form'),
    task = document.querySelector('#task'),
    taskList = document.querySelector('#my-tasks'),
    clearAll = document.querySelector('#clear-all'),
    filter = document.querySelector('#filter');


//  EVENT LISTENERS
form.addEventListener('submit', submitForm);
taskList.addEventListener('click', removeTask);
clearAll.addEventListener('click', removeAllTasks);
filter.addEventListener('input', filterTasks);
document.addEventListener('DOMContentLoaded', init);

//  FUNCTIONS
function submitForm (e) {
    e.preventDefault();
    if(task.value != '') {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.classList = 'cross'
        span.innerHTML = `&#10006`;
        li.textContent = task.value;
        saveTaskToLocalStorage(task.value);
        li.appendChild(span);
        taskList.appendChild(li);
        task.value = '';
        task.focus();
    }
    else {
        alert('Enter a Task');
    }
}
function removeTask(e) {
    if(e.target.classList.contains('cross')) {
        e.target.parentElement.remove();
        let liValue = e.target.parentElement.firstChild.textContent;
        let items = getFromLocalStorage();
        items.forEach((item, index) => {
            if(item == liValue) {
                items.splice(index, 1);
            }
            localStorage.setItem('tasks', JSON.stringify(items));
        })
    }
}
function removeAllTasks() {
    // taskList.textContent = '';
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.setItem('tasks', '[]');
}
function filterTasks(e) {
    let input = e.target.value.toUpperCase();
    let items = taskList.querySelectorAll('li');
    items.forEach((li) => {
        if(li.textContent.toUpperCase().indexOf(input) > -1) {
            li.style.display = 'block';
        }
        else {
            li.style.display = 'none';
        }
    })
}
function getFromLocalStorage() {
   let items = localStorage.getItem('tasks')
   if(items == null) {
       localStorage.setItem('tasks', '[]');
       items = [];
   }
   else {    
       items = JSON.parse(localStorage.getItem('tasks'));  
   }
   return items;
}
function saveTaskToLocalStorage(task) {
    let items = getFromLocalStorage();
    items.push(task);
    localStorage.setItem('tasks', JSON.stringify(items));
}
function init() {
    let items = getFromLocalStorage()
    items.forEach( (todo) => {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.classList = 'cross'
        span.innerHTML = `&#10006`;
        li.textContent = todo;
        li.appendChild(span);
        taskList.appendChild(li);
        task.value = '';
        task.focus();
    })
}