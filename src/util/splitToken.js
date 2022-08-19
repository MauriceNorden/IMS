const splitToken = (token) => {
    var decoded = Buffer.from(token, "base64").toString("ascii");
    var credentials = decoded.split("-");

    var username = credentials[0];
    var password = credentials[1];

    return { username, password };
}



exports.splitToken = splitToken;