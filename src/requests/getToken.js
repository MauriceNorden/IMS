const { controlAuth } = require("../util/controlAuth");
const getToken = (req) => {
const {auth} = req.body;

    if (!auth) {
        return { 'code': 1};
    }
    if (controlAuth(auth).code !== 0){
        return { 'code': 2};
    }
    else{
        return { 'code': 0};
    }    
}  
exports.getToken = getToken;
