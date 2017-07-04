const express = require('express');
let router = express.Router();


router.get('/:id', (req, res) =>{
    res.send('Sending fruit number: ' + req.params.id);
});
router.get('/', (req, res) => {
    res.send('Send me all the fruit');
});

router.post('/:id', (req, res)=> {
    res.send('Creating fruit number: ' + req.params.id);
});

router.delete('/:id', (req, res)=> {
    res.send('Deleting fruit number: ' + req.params.id);
});

router.put('/:id', (req, res)=> {
    res.send('Updating fruit number: ' + req.params.id);
});

module.exports = router;
