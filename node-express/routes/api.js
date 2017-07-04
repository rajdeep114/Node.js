const express = require('express');
let router = express.Router(); // create a new router - a mini application
 
let food = require('./partials/food');
let fruit = require('./partials/fruit');
// all routes that starts with /api/ goes through this function
router.use((req, res, next) => {
    console.log('Time: ' + Date.now());
    next();
});

router.use('/food', food);
router.use('/fruit', fruit);

router.get('/', (req, res) => {
    console.log('here');
    res.writeHead(403, {'Content-Type': 'text/html'});
    res.end('in api not found')
});

module.exports = router;