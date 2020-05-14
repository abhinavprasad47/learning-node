const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.send('powli post');
});

router.get('/spec', (req,res) => {
    res.send('specific powli post');
});


module.exports = router