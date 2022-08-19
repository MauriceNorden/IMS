const { mysql } = require("../util/mysqlConnect");
const removeLink = (req) => {
    const { usertoken, itemtoken } = req.body;

    var decoded = Buffer.from(usertoken, "base64").toString("ascii");

    var credentials = decoded.split("-");

    var query = mysql('SELECT * FROM users WHERE username = "' + credentials[0] + '" AND password = "'+ credentials[1] +'"')[0];

    var fromuserid = query.ID;
    if (query.length == 0) {
        return {'code': 1,}
    } else if (query.username == credentials[0] && query.password == credentials[1] && query.isadmin == 0) {
        var removeadmin = mysql('DELETE FROM link WHERE itemtoken = "' + itemtoken + '" AND fromuserid = "' + fromuserid + '"');
        if (removeadmin.affectedRows != 0){
            return { 'code': 0 };
        }else{
            return { 'code': 2 };
        }
    }
        else if (query.username == credentials[0] && query.password == credentials[1] && query.isadmin != 0){
            var remove = mysql('DELETE FROM link WHERE itemtoken = "' + itemtoken + '"');
            
            if (remove.affectedRows != 0){
                return { 'code': 0 };
            }else{
                return { 'code': 2 };
            }
        }
        else{
            return { 'code': 2 };

        }
    
} 



exports.removeLink = removeLink;
