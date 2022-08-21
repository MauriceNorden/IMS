const { controlAuth } = require("../util/controlAuth");
const { mysql } = require("../util/mysqlConnect");

const getItems = (req) => {
    const { amount, auth } = req.body;
    let maxResults = '';
    if (!auth) {
        return { 'code': 1};   
    }
    if (amount > 0) {
        maxResults = 'LIMIT ' + amount + ";";
    }
    if (controlAuth(auth).code !== 0){
        console.log("auth bad")
        return { 'code': 2};
    }
    else{
        if (mysql.error) {
            return {'code': 3, error: mysql.error}
        }else{
            var items = mysql("SELECT * FROM products " + maxResults);
        return {
            items,
            code: 0,
        };
        }
    }

};
exports.getItems = getItems;
