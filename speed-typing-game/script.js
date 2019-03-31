/*  TODO:
    - show high score, store it in local storage
    - add a difficulty level options (time left = 5s/3s/2s)
    - load random words from an API
 */

 let words = ['magic', 'journey', 'travel', 'explore', 'life', 
'experience', 'happiness', 'gratitude', 'discipline', 'exercise', 
'workout', 'friendship', 'practice', 'routine', 'morning', 'reading', 
'books', 'education', 'amour', 'delibrate', 'protein', 'partner',
'empathy', 'concert', 'patience', 'humor', 'resilience', 'confidence',
'consistency'];
 let currentWord  = document.querySelector('#current-word');

 window.addEventListener('load', init);


 function init() {
     let index = Math.floor(Math.random() * words.length);
     currentWord.textContent = words[index];
 }