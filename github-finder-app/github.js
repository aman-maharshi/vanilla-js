class GitHub {
    constructor() {
        this.client_id = "f87f791e3012f3924b6b"
        this.client_secret = "15656eee74dc31b6fcd74d4961c31fb842e5e01e"
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profileData = await profileResponse.json()
        return {
            profile: profileData
        }
    }
}
