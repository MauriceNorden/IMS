const { mysql } = require("./mysqlConnect");
const { splitToken } = require("./splitToken");

const controlAuth = (token) => {
    var username =  splitToken(token).username;
    var password =  splitToken(token).password;
    const query = mysql('SELECT * FROM users WHERE username = "' + username + '" AND password = "' + password + '"')[0];
    if (query == undefined) {
        return { "code": 2 };
    }

    else (query.username == username && query.password == password);{
        return {'code': 0 };
    }
}
exports.controlAuth = controlAuth;