let content = document.querySelector(".content")

async function getApiData() {
    const apiResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
    const apiData = await apiResponse.json()
    return apiData
}
getApiData().then(data => {
    data = data.splice(data.length - 5)
    let str = ""
    data.forEach(item => {
        str += `<p>${item.title}</p>`
        console.log(item.title)
    })
    content.innerHTML = str
})
