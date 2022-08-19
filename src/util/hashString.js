const crypto = require('crypto'),
    hash = crypto.getHashes();

const hashString = (input_str) => {
    hashPwd = crypto.createHash('sha256')
        .update(input_str)
        .digest('hex');
    return hashPwd;
}



exports.hashString = hashString;