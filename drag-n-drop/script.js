// VARIABLES
let fill = document.querySelector('.fill'),
    emptyBox = document.querySelectorAll('.empty');

// EVENT LISTENERS
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// to call 4 different events for each box
emptyBox.forEach(function(box) {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
});


// FUNCTIONS
function dragStart() {
    this.className += ' hold';
    // hiding the image from the box when dragStart triggers
    setTimeout(() => (this.className = 'invisible'),0);
}
function dragEnd() {
    // putting the image back when dragEnd triggers
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered'
}
function dragLeave() {
    this.className = 'empty';
}
function dragDrop() {
    this.className = 'empty';
    // this.className += ' fill';
    this.append(fill); // appending the entire div    
}