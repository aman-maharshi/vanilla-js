const right = document.querySelector('.carousel__button--right');
const left = document.querySelector('.carousel__button--left');
const slides = document.querySelectorAll('.carousel__slide');
const indicator = document.querySelectorAll('.carousel__indicator');

// hiding all but the first slide
slides.forEach((item, index)=> {
    if(index != 0) {
        item.classList.add('hidden');
    }
})

let count = 0;

function incCount() {
    if(count != 2) {
        count++;
    }
    else {
        count = 0;
    }
}

function decCount() {
    if(count == 0) {
        count = 2;
    }
    else {
        count--;
    }
}

right.addEventListener('click', ()=> {
    slides.forEach((item, index) => {
        if(!(item.classList.contains('hidden'))) {
            item.classList.add('hidden');
        }  
    })
    incCount();
    //console.log(count);
    slides.forEach((item, index)=> {
        if(index == count) {
            item.classList.remove('hidden');
        }
    })
})

left.addEventListener('click', ()=> {
    slides.forEach((item, index) => {
        if(!(item.classList.contains('hidden'))) {
            item.classList.add('hidden');
        }  
    })
    decCount();
    //console.log(count);
    slides.forEach((item, index)=> {
        if(index == count) {
            item.classList.remove('hidden');
        }
    })
})