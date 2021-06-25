const CryptoEntity = require('./Crypto');

class UserEntity {
    name = String;
    surname = String;
    username = String;
    password = String;
    coinPref = String;
    cryptos = String;
    avatar = String;

    constructor() {

    }
}

module.exports = UserEntity;