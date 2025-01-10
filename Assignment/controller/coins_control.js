const axios = require('axios');
const CryptoData = require('../model/CryptoData.js');

const getCoinsData = async (req, res) => {
    const { coin } = req.query; 
    console.log(coin);

    if (!coin) {
        return res.status(400).json({ error: 'Coin parameter is required' });
    }

    try {
        const coinData = await CryptoData.findOne({ coin }).sort({ CreatedAt: -1 });

        if (coinData) {
            return res.json({
                price: coinData.price,
                marketCap: coinData.marketCap,
                '24hChange': coinData.change24h,
            });
        // } else {
        //     const options = {
        //         method: 'GET',
        //         url: 'https://api.coingecko.com/api/v3/coins/markets',
        //         params: {
        //             vs_currency: 'usd', 
        //             ids: coins, 
        //             x_cg_demo_api_key: 'CG-RFnPiUWaCbzxpiXUFcJyncS5',
        //         },
        //         headers: { accept: 'application/json' },
        //     };

        //     const response = await axios.request(options);

        //     if (response.data.length === 0) {
        //         return res.status(404).json({ error: 'No data found for the specified coin' });
        //     }

        //     const apiData = response.data[0]; 
        //     return res.json({
        //         price: apiData.current_price,
        //         marketCap: apiData.market_cap,
        //         '24hChange': apiData.price_change_percentage_24h,
        //     });
        // }
        }
        else{
            return res.json({"error":"data not found"})
        }
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { getCoinsData };
