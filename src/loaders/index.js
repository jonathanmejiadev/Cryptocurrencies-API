const expressServer = require('./express/expressServer');
const db = require('./database/sequelize');
const logger = require('./logger/logger');

const cryptoApp = new expressServer();

const startCryptoApp = async () => {
    try {
        await db.sequelize.authenticate();
        logger.info(`connected to database`);
        logger.info(`${process.env.NODE_ENV} environment`);
        cryptoApp.startServer();
    } catch (err) {
        logger.error(err);
    };
};

module.exports = { startCryptoApp, cryptoApp, db };