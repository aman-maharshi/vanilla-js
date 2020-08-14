class UI {
    constructor() {
        this.profile = document.querySelector(".profile")
        this.profile.style.display = "none"
    }
    showProfile(user) {
        this.profile.style.display = "block"
        const html = `
            <div class="profile-container">
                <div class="user-dp">
                    <img src="${user.avatar_url}">
                </div>
                <div class="user-details">
                    <p><span>Name </span>${user.name}</p>
                    <p><span>Bio </span>${user.bio}</p>
                    <p><span>Location </span>${user.location}</p>
                    <p><span>Blog </span><a href=${user.blog} target="_blank">${user.blog}</a></p>
                    <p><span>Company </span>${user.company}</p>
                </div>
            </div>
            <div class="profile-container profile-container-two">
                <div class="custom-btn">Public Repos <span>${user.public_repos}</span></div>
                <a class="profile-btn" href="${user.html_url}" target="_black">View Profile</a>
                <div class="custom-btn">Followers <span>${user.followers}</span></div>
            </div>
        `
        this.profile.innerHTML = html
    }
    clearProfile() {
        this.profile.style.display = "none"
    }
    showAlert(inputText) {
        this.profile.innerHTML = `<p class="alert">User <span>${inputText}</span> not found</p>`
    }
}
