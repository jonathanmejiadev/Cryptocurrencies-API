const expressServer = require('./express/expressServer');
const sequelize = require('./database/sequelize');
const logger = require('./logger/logger');

const startCryptoApp = async () => {
    const cryptoApp = new expressServer();
    try {
        await sequelize.authenticate();
        logger.info(`connected to database`)
        cryptoApp.startServer();
    } catch (err) {
        logger.error(err);
    }
};

module.exports = startCryptoApp;

