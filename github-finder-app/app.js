const github = new GitHub()

const searchInput = document.querySelector("#search-input")

searchInput.addEventListener("keyup", e => {
    const searchText = e.target.value
    if (searchText != "") {
        github.getUser(searchText).then(data => {
            if (data.profile.message == "Not Found") {
                // Show user not found alert
                console.log(`User - ${searchText} Not Found`)
            } else {
                // Show user profile
                console.log(data)
            }
        })
    } else {
        // Clear profile
    }
})
