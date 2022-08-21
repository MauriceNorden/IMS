const { controlAuth } = require("../util/controlAuth");
const { mysql } = require("../util/mysqlConnect");

const getCategory = (req) => {
const { id, auth} = req.body;
let searchthis = '';
    if (!auth) {
        return { 'code': 1};
    }
     if (id > 0) {
        searchthis = `WHERE ID = ${id}`;
    }

    if (controlAuth(auth).code !== 0){
        return { 'code': 2};
    }
    else{
        if (mysql.error) {
            return {'code': 3, error: mysql.error}
        }else{
            console.log(searchthis);

        var query = mysql(`SELECT * FROM category ${searchthis}`);
        return{"code": 0, "category": query};
    }
    }
}

exports.getCategory = getCategory;