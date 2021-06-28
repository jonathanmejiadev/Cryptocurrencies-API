const Axios = require('axios');

const COIN_GECKO_API_BASE = 'https://api.coingecko.com/api/v3';

const getCryptoMarketService = (currency = 'usd', limit = 10) => {
    const query = `/coins/markets?vs_currency=${currency}&per_page=${limit}&order=market_cap_desc`;
    return Axios.get(`${COIN_GECKO_API_BASE + query}`).then(data => {
        return data.data.map(coin => {
            return {
                id: coin.id,
                symbol: coin.symbol,
                name: coin.name,
                current_price: coin.current_price,
                image: coin.image,
                last_updated: coin.last_updated
            };
        });
    });
};

module.exports = {
    getCryptoMarketService,
};