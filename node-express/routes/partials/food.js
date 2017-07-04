const express = require('express');
let router = express.Router();

router.get('/:id', (req, res) =>{
    res.send('Sending food number: ' + req.params.id);
});
router.get('/', (req, res) => {
    res.end('Send me all the food');
});

router.post('/:id', (req, res)=> {
    res.send('Creating food number: ' + req.params.id);
});

router.delete('/:id', (req, res)=> {
    res.send('Deleting food number: ' + req.params.id);
});

router.put('/:id', (req, res)=> {
    res.send('Updating food number: ' + req.params.id);
});

module.exports = router;