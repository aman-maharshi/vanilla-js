const slideshow = document.querySelector(".slideshow")
const breedsContainer = document.querySelector(".breeds")

async function start() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all")
        const data = await response.json()
        createBreedList(data)
    } catch (e) {
        console.log("There was a problem fetching the data.")
    }
}

start()

function createBreedList(data) {
    const breedsArray = Object.keys(data.message)
    breedsArray.forEach(item => {
        breedsContainer.innerHTML += `<option value="${item}">${item}</option>`
    })
}

breedsContainer.addEventListener("change", loadByBreed)

async function loadByBreed(e) {
    const breed = e.target.value
    if (breed != "Select") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        //console.log(data)
        createSlideshow(data.message)
    }
}

function createSlideshow(images) {
    let randomImage = Math.floor(Math.random() * images.length)
    slideshow.innerHTML = `
    <div class="slide" style="background-image: url('${images[randomImage]}')"></div>`

    /*
    setInterval(() => {
        randomImage = Math.floor(Math.random() * images.length)
        slideshow.innerHTML = `
        <div class="slide" style="background-image: url('${images[randomImage]}')"></div>`
    }, 3000)
    */
}
