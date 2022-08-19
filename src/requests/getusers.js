const {mysql} = require("../util/mysql");



const getUsers = (req) => {
    const {username,password} = req.body;

    var query = mysql('SELECT * FROM users WHERE username = "' + username + '" AND password = "' + password + '"');




    if (query.length == 0) {
        return {"code": 2};

    } else if (query[0].username == username && query[0].password == password) {
        var usertoken = Buffer.from(username + "-" + password).toString('base64');
        return {usertoken,'code': 0};

    } else {
        return {"code": 2};
        
    };
}

exports.getUsers = getUsers;