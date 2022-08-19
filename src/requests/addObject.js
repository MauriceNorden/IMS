const { controlAuth } = require("../util/controlAuth");
const { mysql } = require("../util/mysqlConnect");
const addObject = (req) => {
const { product_name, amount, rows_id, from_user_id, auth} = req.body;

    if (!product_name || !amount || !rows_id || !from_user_id || !auth) {
        return { 'code': 1};
    }
    if (controlAuth(auth).code !== 0){
        return { 'code': 2};
    }
    else{
        if (mysql.error) {
            return {'code': 3, error: mysql.error}
        }else{
            mysql('INSERT INTO products (product_name, amount, rows_id, from_user_id) VALUES ("' + product_name + '", "' + amount + '", "' + rows_id + '", "' + from_user_id + '");');
            return { 'code': 0};
        }
    }    
}  
exports.addObject = addObject;
