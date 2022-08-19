const { controlAuth } = require("../util/controlAuth");
const { mysql } = require("../util/mysqlConnect");
const addCategory = (req) => {
const { category_name, auth} = req.body;

    if (!category_name || !auth) {
        return { 'code': 1};   
    }

    if (controlAuth(auth).code !== 0){
        console.log("auth bad")
        return { 'code': 2};
    }
    else{
        if (mysql.error) {
            return {'code': 3, error: mysql.error}
        }else{
            mysql('INSERT INTO categories (category_name) VALUES ("' + category_name + '");');
            return { 'code': 1};
        }
    }
}  
exports.addCategory = addCategory;
