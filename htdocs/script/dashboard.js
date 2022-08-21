const editMenu = document.getElementById("edit-div");
const editForm = document.getElementById("edit-form");
let itemid;

const errorHandeling = (message, color) => {
    const errorDiv = document.getElementById("error-div");
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = message;
    errorDiv.style.background = color;
    errorDiv.style.display = "block";
}

const logout = () => {
    changePage('login');
}

const getItems = () => {
    axios.post(apiBaseurl + '/getItems', {
        auth: auth,
    }).then(response => itemsResponseData(response))
}

const editItem = () => {
    axios.post(apiBaseurl + '/editObject', {
        itemid: itemid,
        product_name: document.getElementById("product-input").value,
        category: document.getElementById("category-list").value,
        amount: document.getElementById("amount-input").value,
        rowid: document.getElementById("rowid-input").value,
        auth: auth,
    }).then(response => editItemResponseData(response))
}

const getCategory = () => {
    axios.post(apiBaseurl + '/getCategory', {
        auth: auth,
    }).then(response => categoryResponseData(response))
}

const itemsResponseData = (response) => {
    if (response.data.code > 0) {
        errorHandeling("could not fetch data", "#ff4f4e");
    }
    if (response.data.code == 0) {
        var itemarray = response.data.items;
        for (let i = 0; i < itemarray.length; i++) {
            const objectDiv = document.createElement("div");
            const productText = document.createElement("h1");
            const amountText = document.createElement("p");
            const dateText = document.createElement("p");
            const editButton = document.createElement("button");
            productText.innerHTML = `Product: ${itemarray[i].product_name}`;
            amountText.innerHTML = `Amount: ${itemarray[i].amount}`;
            editButton.id = itemarray[i].id;
            dateText.innerHTML = `Date Added: ${itemarray[i].date_added}`;
            editButton.innerHTML = "edit";
            editButton.className = "edit-btn";
            objectDiv.appendChild(productText)
            objectDiv.appendChild(amountText)
            objectDiv.appendChild(dateText)
            objectDiv.appendChild(editButton)
            document.getElementById("list-div").appendChild(objectDiv)
        }
        document.addEventListener("click", editObject);
    }
}



const editItemResponseData = (response) => {
    if (response.data.code > 0){
        hideMenu(1);
        errorHandeling("could not edit item, did you've filled in everything?", "#ff4f4e");
    }else{
        hideMenu(1);
        errorHandeling("done", "#01cd18");
    }
}

const itemResponseData = (response) => {
    const item = response.data.item[0];
    const productInput = document.getElementById("product-input");
    const amountInput = document.getElementById("amount-input");
    const rowidInput = document.getElementById("rowid-input");
    const categoryList = document.getElementById("category-list");
    for (let i = 0; i < categoryList.options.length; i++) {
        if (categoryList.options[i].value == item.category) {
            categoryList.options[i].selected = true;
        }
    }
    productInput.value = item.product_name;
    amountInput.value = item.amount;
    rowidInput.value = item.rows_id;
}

function editObject(e) {
    if (e.target.className == "edit-btn") {
        itemid = e.target.id;
        axios.post(apiBaseurl + '/getItem', {
            auth: auth,
            id: itemid,
        }).then(response => itemResponseData(response))
        editMenu.style.display = "block";
    }
}

document.querySelector('.close-btn').addEventListener('click',()=>{
    hideMenu(1);
    hideMenu(0);
});

editForm.addEventListener("submit", function (e) {
    e.preventDefault();
    editItem();
});

const categoryResponseData = (response) => {
    const categoryList = document.getElementById("category-list")
    if (response.data.code > 0) {
        errorHandeling("could not fetch data", "#ff4f4e");    }
    else {
        var categoryArray = response.data.category;
        for (let i = 0; i < categoryArray.length; i++) {
            const option = document.createElement("option");
            option.innerHTML = categoryArray[i].category_name;
            option.value = categoryArray[i].ID;
            categoryList.appendChild(option)
        }
        document.addEventListener("click", editObject);
    }
}

const hideMenu = (target) =>{
    const targetDiv = document.getElementsByClassName("hide-target");
    targetDiv[target].style.display = "none";
}

window.onload = document.getElementById("username").innerHTML = `Welcome Back: ${username}`;
window.onload = document.getElementsByTagName("button")[0].style.display = "block";
window.onload = getItems();
window.onload = getCategory();