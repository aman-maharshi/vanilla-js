let myInput = document.querySelector('.custom-input');
let myList = document.querySelectorAll('.custom-list li a');

myInput.addEventListener('input', () => {
    myList.forEach((val) => {
        console.log(myInput.value.toLowerCase());
        if(val.textContent.toLowerCase().indexOf(myInput.value.toLowerCase()) == -1) {
            val.parentElement.style.display = 'none';
        }
        if(myInput.value == "") {
            val.parentElement.style.display = "block";
        }
    });
});



