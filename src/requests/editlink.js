const {mysql} = require("../util/mysqlConnect");



const editLink = (req) => {
    const {usertoken, itemtoken, title, artist, amazonmusic, applemusic, audius, beatport, deezer, itunes, soundcloud, spotify, tidal, youtube} = req.body;
    var decoded = Buffer.from(usertoken, "base64").toString("ascii");
    var credentials = decoded.split("-");
    var query = mysql('SELECT * FROM users WHERE username = "' + credentials[0] + '" AND password = "'+ credentials[1] +'"')[0];
    var check = mysql('SELECT * FROM users WHERE username = "' + edituser + '"')[0];
    var username = credentials[0];
    var password = credentials[1];

    if (query.length == 0) {
        return {"code": 2};

    } else if (query.username == username && query.password == password && query.isadmin == 1) {
        if(check.isadmin == 0){
            mysql('UPDATE users SET isadmin = 1 WHERE username = "' + edituser + '"');
            return {'code': 0};
        }else{
            mysql('UPDATE users SET isadmin = 0 WHERE username = "' + edituser + '"');
            return {'code': 0};
        }


    } else {
        return {"code": 2};
        
    };


}

exports.editLink = editLink;