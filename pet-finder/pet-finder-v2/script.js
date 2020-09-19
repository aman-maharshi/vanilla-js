async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedList(data)
}

start()

const breedsContainer = document.querySelector(".breeds")

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
        console.log(data.message)
        /* 35 */
    }
}
