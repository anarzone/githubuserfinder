const github = new Github;
const ui = new UI;
const userSearch = document.getElementById('user-search');
userSearch.addEventListener('keyup',(e)=>{
    //get input text
    const userText = e.target.value;

    if(userText != ''){
        github.getUser(userText).then((data)=>{
            if(data.profile.message === 'Not Found'){
                ui.showAlert(data.profile.message,'alert alert-danger')
                ui.profile.innerHTML = '';
            }else{
                ui.showProfile(data.profile)
                ui.showRepos(data.repos);
            }
        })
    }else{
        ui.clearProfile()
    }
})