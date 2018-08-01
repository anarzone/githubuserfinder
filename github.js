class Github {
    constructor(){
        this.clientId = 'f98f3e1c466429893bd2';
        this.clientSecret = '0fec9c4fe6b5a504bdc80be90949cb076db0d182';
        this.repos_count = 5
        this.repos_sort = 'created: asc'

    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            //below is es6 format of profile: profile
            profile,
            repos
        }
    }
}