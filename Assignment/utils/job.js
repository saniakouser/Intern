const axios = require('axios');
const CryptoData = require('../model/CryptoData.js');

const fetchCryptoData = async () => {
    try {
        const coins = ['bitcoin', 'matic-network', 'ethereum']; 
        const options = {
            method: 'GET',
            url: 'https://api.coingecko.com/api/v3/coins/markets',
            params: {
                vs_currency: 'usd', 
                ids: coins.join(','), 
                x_cg_demo_api_key: 'CG-RFnPiUWaCbzxpiXUFcJyncS5',
            },
            headers: { accept: 'application/json' },
        };

        const response = await axios.request(options);
        console.log(response);

        for (const coinData of response.data) {
            await CryptoData.create({
                coin: coinData.id,
                price: coinData.current_price,
                marketCap: coinData.market_cap,
                change24h: coinData.price_change_percentage_24h,
                createdAt: new Date(),
            });
        }

        console.log('Crypto data fetched and stored.');
    } catch (error) {
        console.error('Error fetching crypto data:', error);
    }
};

module.exports = fetchCryptoData;
