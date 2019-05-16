//  VARIABLES
let form = document.querySelector('#books-form'),
    tableBody = document.querySelector('#book-list'),
    title = document.querySelector('#title'),
    author = document.querySelector('#author');


//  EVENT LISTENERS
form.addEventListener('submit', formSubmit);
tableBody.addEventListener('click', removeItem);
//  FUNCTIONS
function formSubmit(e) {
    e.preventDefault();
    if(title.value != '' && author.value != '') {
        showList();
    }
    else {
        document.querySelector('#prompt').textContent = 'All fields are mandatory!'
        setTimeout(function(){
            document.querySelector('#prompt').textContent = '';
        }, 2000)
        
    }
}

function showList() {
    tableBody.innerHTML = `
        <tr>
            <td>${title.value}</td>
            <td>${author.value}</td>
            <td><span class="cross">X<span></td>
        </tr>
    `;
    form.reset();
    title.focus();
}

function removeItem(e) {
    if(e.target.classList.contains('cross')) {
        e.target.parentElement.parentElement.remove();
    }
}