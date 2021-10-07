let html = document.querySelector('html');
let toggleBtn = document.getElementById('switch');


toggleBtn.addEventListener('click', changeTheme);


function changeTheme() {
    if(toggleBtn.checked === true) {
        html.setAttribute('theme', 'dark');
    }
    else {
        html.setAttribute('theme', 'light');
    }

}