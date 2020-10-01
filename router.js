const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.post('/', (req, res) => {
    const { data } = req.body;
    console.log(data);

    res.end();
});

module.exports = router;