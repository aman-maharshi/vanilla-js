const typedTextSpan = document.querySelector('.typed-text')

const textArray = ['Web Developer', 'Programmer', 'Musician'];
const typingDelay = 200;
const easingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    // if last letter of a word is not typed
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent +=textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        // erase
    }
}
type();