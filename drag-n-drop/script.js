let fill = document.querySelector('.fill');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'),0);
}

function dragEnd() {
    this.className = 'fill'
}
