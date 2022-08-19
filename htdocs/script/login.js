const loginForm = document.getElementById("login-form")
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    axios.post(apiBaseurl + '/logUserin', {
            username: loginForm.getElementsByTagName("input")[0].value,
            password: loginForm.getElementsByTagName("input")[1].value
        }).then(response => responseData(response));

});



const responseData = (response)=>{
    if (response.data.code == 1) {
        console.log("please fill in all fields");
    }
    if (response.data.code == 2) {
        console.log("wrong username or password");
    }
    if (response.data.code == 3) {
        console.log("other error, api down?");
    }
    else if (response.data.code == 0) {
        sessionStorage.setItem('auth', response.data.auth);
        sessionStorage.setItem('username', response.data.username);
        changePage('dashboard')

   }
}












