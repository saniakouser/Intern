require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const fetchCryptoData = require('./utils/job.js');
const cryptoRoutes = require('./routes/CryptoRoute.js');

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use('/', cryptoRoutes);

setInterval(fetchCryptoData, 2*60*60*1000); 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
