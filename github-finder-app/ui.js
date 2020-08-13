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
        `
        console.log(user)

        this.profile.innerHTML = html
    }
    clearProfile() {
        this.profile.style.display = "none"
    }
}
