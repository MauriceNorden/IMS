const { mysql } = require("../util/mysqlConnect");



const getLink = (req) => {
    const { itemtoken } = req.body;
    var item = mysql('SELECT * FROM link WHERE itemtoken = "'+ itemtoken + '";')[0];

    if(item.length == 0){
        return {
            'code': 2,
        };
    }else{
        return{

            item,
            'code': 0,
        } 
    }
}

exports.getLink = getLink;