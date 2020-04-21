const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementsByClassName('modal-container')[0];

openBtn.addEventListener('click', () => {
    modal.classList.toggle('toggle-modal');
});
closeBtn.addEventListener('click', () => {
    modal.classList.toggle('toggle-modal');
});