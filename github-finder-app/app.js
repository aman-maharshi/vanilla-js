const github = new GitHub()
const ui = new UI()

const searchInput = document.querySelector("#search-input")

searchInput.addEventListener("keyup", e => {
    const searchText = e.target.value
    if (searchText != "") {
        github.getUser(searchText).then(data => {
            if (data.profile.message == "Not Found") {
                // Show user not found alert
                ui.showAlert(searchText)
            } else {
                // Show user profile
                ui.showProfile(data.profile)
            }
        })
    } else {
        // Clear profile
        ui.clearProfile()
    }
})
