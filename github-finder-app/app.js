const searchInput = document.querySelector("#search-input")

searchInput.addEventListener("keyup", e => {
    const searchText = e.target.value
    if (searchText != "") {
        getUser().then(data => {
            console.log(data)
        })
    }
})

async function getUser() {
    const profileResponse = await fetch(`https://api.github.com/users/aman-maharshi`)
    const profileData = await profileResponse.json()
    return profileData
}
