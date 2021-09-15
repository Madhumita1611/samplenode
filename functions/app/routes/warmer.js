let express = require('express');
let warmer = express.Router();

warmer.get('/w/a/r/m/e/r/p/i/n/g',
    (req, res) => {
        res.send('ping').status(200)
    })
module.exports = warmer