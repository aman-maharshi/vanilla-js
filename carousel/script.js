const right = document.querySelector('.carousel__button--right');
const left = document.querySelector('.carousel__button--left');
const slides = document.querySelectorAll('.carousel__slide');
const indicators = document.querySelectorAll('.carousel__indicator');

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

function changeIndicator() {
    // hide any active indicator
    indicators.forEach(item => {
        if(item.classList.contains('current-slide')) {
            item.classList.remove('current-slide');
        }
    })
    // add indicator to the item with index = count
    indicators.forEach((item, index)=> {
        if(index == count) {
            item.classList.add('current-slide');
        }
    })
}

right.addEventListener('click', ()=> {
    slides.forEach((item) => {
        if(!(item.classList.contains('hidden'))) {
            item.classList.add('hidden');
        }  
    })
    incCount();
    //console.log(count);
    changeIndicator()
    slides.forEach((item, index)=> {
        if(index == count) {
            item.classList.remove('hidden');
        }
    })
})

left.addEventListener('click', ()=> {
    slides.forEach((item) => {
        if(!(item.classList.contains('hidden'))) {
            item.classList.add('hidden');
        }  
    })
    decCount();
    //console.log(count);
    changeIndicator()
    slides.forEach((item, index)=> {
        if(index == count) {
            item.classList.remove('hidden');
        }
    })
})


// Changing slides when indicators are clicked
indicators.forEach((element, index) => {
    element.addEventListener('click', ()=> {
        // Change Image
        slides.forEach(item => {
            if(!(item.classList.contains('hidden'))) {
                item.classList.add('hidden');
            }  
        })
        slides[index].classList.remove('hidden');

        // Change Indicator
        indicators.forEach(item => {
            if(item.classList.contains('current-slide')) {
                item.classList.remove('current-slide');
            }
        })
        indicators[index].classList.add('current-slide');
    })

})