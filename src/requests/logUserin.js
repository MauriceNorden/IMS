const { controlAuth } = require("../util/controlAuth");
const { createAuth } = require("../util/createToken");
const { hashString } = require("../util/hashString");
const logUserin = (req) => {
const { username, email, password} = req.body;

    if (!username || !password) {
        return { 'code': 1};
    }
    const hashedpassword = hashString(password);
    const auth = createAuth(username, hashedpassword);
    if (controlAuth(auth).code !== 0){
        return { 'code': 2};
    }
    else{
       return{'code': 0, 'auth': auth, 'username': username, 'userid': controlAuth(auth).userid};
    }    
}  
exports.logUserin = logUserin;
