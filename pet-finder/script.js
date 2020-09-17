let dropDown = document.querySelector(".breeds")
let imageContainer = document.querySelector(".slideshow")

async function getPetName() {
    let response = await fetch("https://dog.ceo/api/breeds/list/all")
    let data = await response.json()
    return data
}

async function getPetImage(pet) {
    let response = await fetch(`https://dog.ceo/api/breed/${pet}/images/random`)
    let data = await response.json()
    return data
}

function addPetNamesToHtml() {
    getPetName().then(data => {
        let breeds = Object.keys(data.message)
        breeds.forEach(item => {
            dropDown.innerHTML += `<option value=${item}>${item}</option>`
        })
    })
}

addPetNamesToHtml()

dropDown.addEventListener("change", e => {
    imageContainer.innerHTML = `<p>Loading...</p>`
    getPetImage(e.target.value).then(data => {
        let url = data.message
        imageContainer.innerHTML = `<img src="${url}">`
    })
})
