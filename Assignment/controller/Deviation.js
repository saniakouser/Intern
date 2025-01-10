const CryptoData = require('../model/CryptoData');

const calculateStandardDeviation = (values) => {
    const n = values.length; 
    if (n === 0) return 0; 
    const sum = values.reduce((acc, value) => acc + value, 0);
    const mean = sum / n;
    console.log(`Mean: ${mean}`);
    const variance = values.reduce((acc, value) => acc + (value - mean) ** 2, 0) / n;
    return Math.sqrt(variance);
};
const getDeviation = async (req, res) => {
    const { coin } = req.query;
     console.log(req.params);
     console.log(coin);
    if (!coin) return res.status(400).json({ error: 'Coin parameter is required' });

    try {
        const prices = (await CryptoData.find({ coin }).sort({ createdAt: -1 }).limit(100)).map(record => record.price);
        console.log(prices)
        if (!prices.length) return res.status(404).json({ error: 'Not enough data for calculation' });
           
         const deviation = calculateStandardDeviation(prices);
        
        res.json({ deviation: deviation.toFixed(2) });
    } catch {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { getDeviation };
