const { controlAuth } = require("../util/controlAuth");
const { mysql } = require("../util/mysqlConnect");

const getAllitems = (req) => {
    const { auth } = req.body;

    if (!auth) {
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
            var items = mysql("SELECT * FROM products");
        return {
            items,
            code: 0,
        };
        }
    }

};
exports.getAllitems = getAllitems;
