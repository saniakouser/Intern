const express = require('express');
const { getCoinsData } = require('../controller/coins_control.js');
const { getDeviation } = require('../controller/Deviation.js');

const router = express.Router();

router.post('/stats', getCoinsData);
router.post('/deviation', getDeviation);

module.exports = router;
