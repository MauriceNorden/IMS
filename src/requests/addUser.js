const { controlAuth } = require("../util/controlAuth");
const { hashString } = require("../util/hashString");
const { mysql } = require("../util/mysqlConnect");
const addUser = (req) => {
const { username, password, email, isadmin, auth} = req.body;

    if (!username || !password || !email || !isadmin || !auth) {
        return { 'code': 1};
    }
    if (controlAuth(auth).code !== 0){
        return { 'code': 2};
    }
    else{
        if (mysql.error) {
            return {'code': 3, error: mysql.error}
        }else{
            const hashedpassword = hashString(password);
            mysql('INSERT INTO users (username, password, email, isadmin) VALUES ("' + username + '", "' + hashedpassword + '", "' + email + '","' + isadmin +'");');
            return { 'code': 0};
        }
    }    
}  
exports.addUser = addUser;