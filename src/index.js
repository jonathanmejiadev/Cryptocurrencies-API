const ExpressServer = require('./loaders/ExpressServer');

const startCryptoApp = () => {
    const cryptoApp = new ExpressServer();
    cryptoApp.startServer();
};

startCryptoApp();



