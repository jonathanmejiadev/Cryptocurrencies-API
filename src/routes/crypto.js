const express = require('express');
const cryptoRoute = express.Router();
const cryptoCtrl = require('../controllers/crypto');

cryptoRoute.get('/market', cryptoCtrl.getCryptoMarket);

module.exports = cryptoRoute;