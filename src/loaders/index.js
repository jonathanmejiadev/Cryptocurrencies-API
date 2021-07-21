const expressServer = require('./express/expressServer');
const db = require('./database/sequelize');
const logger = require('./logger/logger');

const startCryptoApp = async () => {
    const cryptoApp = new expressServer();
    try {
        await db.sequelize.authenticate();
        logger.info(`connected to database`)
        logger.info(`${process.env.NODE_ENV} environment`);
        cryptoApp.startServer();
    } catch (err) {
        logger.error(err);
    };
};

module.exports = startCryptoApp;