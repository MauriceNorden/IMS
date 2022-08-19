const createAuth = (username, password) => {
    var usertoken = Buffer.from(username + "-" + password).toString("base64");
    return usertoken;
}

exports.createAuth = createAuth;
