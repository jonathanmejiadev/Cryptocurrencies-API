const logger = require('../loaders/logger/logger');
const { getCryptoMarketService } = require('../services/coinGecko');

const getCryptoMarket = async (req, res) => {
    try {
        const coins = await getCryptoMarketService('usd');
        return res.status(200).json({ success: true, data: coins });
    } catch (err) {
        logger.error(err.message)
        return res.json({ err: err.message });
    };
};

module.exports = {
    getCryptoMarket
};