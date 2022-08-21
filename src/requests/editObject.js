const { controlAuth } = require("../util/controlAuth");
const {mysql} = require("../util/mysqlConnect");



const editObject = (req) => {
    const {itemid, product_name, category, amount, rowid, auth} = req.body;
    if (!itemid || !product_name || !category || !amount || !rowid || !auth) {
        return { 'code': 1};   
    }

    if (controlAuth(auth).code !== 0){
        console.log("auth bad")
        return { 'code': 2};
    }
    
     else{

            mysql(`UPDATE products SET product_name = '${product_name}', category = '${category}', amount = ${amount}, rows_id = ${rowid} WHERE id = ${itemid}`);
            return {'code': 0};
        }


    }



exports.editObject = editObject;