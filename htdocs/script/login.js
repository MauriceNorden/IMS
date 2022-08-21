const loginForm = document.getElementById("login-form")
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    axios.post(apiBaseurl + '/logUserin', {
            username: loginForm.getElementsByTagName("input")[0].value,
            password: loginForm.getElementsByTagName("input")[1].value
        }).then(response => loginResponseData(response));

});

function errorHandeling(message, color){
    const errorDiv = document.getElementById("error-div");
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = message;
    errorDiv.style.background = color;
    errorDiv.style.display = "block";
}



const loginResponseData = (response)=>{
    console.log(response.data);
    if (response.data.code == 1) {
        errorHandeling("please fill in all fields", "red");
    }
    if (response.data.code == 2) {
        errorHandeling("wrong username or password", "red");
    }
    if (response.data.code == 3) {
        errorHandeling("other error, api down?", "red");
    }
    else if (response.data.code == 0) {
        console.log(response.data)
        sessionStorage.setItem('auth', response.data.auth);
        sessionStorage.setItem('username', response.data.username);
        sessionStorage.setItem('userid', response.data.userid);
        changePage('dashboard')

   }
}
















