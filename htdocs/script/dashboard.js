const auth = sessionStorage.getItem('auth');
const username = sessionStorage.getItem('username');


const logout = () => {
    changePage('login');
}

window.onload = document.getElementById("username").innerHTML = "Welcome Back: " + username;





let edititemtoken;






const getItems = () =>{

    axios.post(apiBaseurl + '/getAllitems', {
        auth: auth,
    }) .then(response => responseData(response))

            const responseData = (response) => {
                console.log(response.data);
                if (response.data.code > 0) {
                    console.log("error");

                }
                if (response.data.code == 0) {
                    var itemarray = response.data.items;
                    console.log(itemarray);


                    for (let i = 0; i < itemarray.length; i++) {
                        const objectDiv = document.createElement("div");
                        const productText = document.createElement("h1");
                        const amountText = document.createElement("p");
                        const dateText = document.createElement("p");
                        const editButton = document.createElement("a");
                        productText.innerHTML = itemarray[i].product_name;
                        amountText.innerHTML = itemarray[i].amount;
                        editButton.id = itemarray[i].id;
                        dateText.innerHTML = itemarray[i].date_added;
                        editButton.innerHTML = "edit";
                        editButton.className = "edit-btn";
                        objectDiv.appendChild(productText)
                        objectDiv.appendChild(amountText)
                        objectDiv.appendChild(dateText)
                        objectDiv.appendChild(editButton)
                        document.getElementById("list-div").appendChild(objectDiv);
                        editButton.onclick = "getCurrentId(this.editButton.ID)";

                    }
                }
            };

}


const getCurrentId = (id) =>{
    edititemtoken = id;
    console.log(edititemtoken);
};

        window.onload = getItems()

        



     

