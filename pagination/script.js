/*
    Fetching and displaying the API Data
*/
let content = document.querySelector(".content")

async function getApiData() {
    const apiResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
    const apiData = await apiResponse.json()
    return apiData
}

let elementsPerPage = 10

function printElments(startingElement, numberOfElements) {
    getApiData().then(data => {
        data = data.splice(startingElement, numberOfElements)
        let str = ""
        data.forEach(item => {
            str += `<p>${item.id}. ${item.title}</p>`
            //console.log(item.title)
        })
        content.innerHTML = str
    })
}
// initially loading the first 10 elements
printElments(0, elementsPerPage)

/*
    Pagination functionality
*/

let paginationLink = document.querySelectorAll(".pagination__link")

paginationLink.forEach(item => {
    item.addEventListener("click", loadPageData)
})

function loadPageData() {
    let pageNumber = parseInt(this.textContent)
    printElments(pageNumber * 10 - 10, elementsPerPage)
}
