const { controlAuth } = require("../util/controlAuth");
const { mysql } = require("../util/mysqlConnect");

const getItem = (req) => {
    const { id, auth } = req.body;
    let maxResults = '';
    if (!auth || !id) {
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
            var item = mysql(`SELECT * FROM products WHERE ID = ${id}`);
        return {
            item,
            code: 0,
        };
        }
    }

};
exports.getItem = getItem;
