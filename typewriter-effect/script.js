const words = ['Front-end Web Developer', 'Web Designer', 'Musician'];
let count = 0;
let index = 0;
let currentWord = "";
let letter = "";

function type() {
    if (count === words.length) {
        count = 0;
    }
    currentWord = words[count];
    index++;
    letter = currentWord.slice(0, index);
    
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentWord.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);
}

// document.addEventListener('DOMContentLoaded', type);

document.addEventListener('DOMContentLoaded', function(){
    setTimeout(type, 3000);   
});
