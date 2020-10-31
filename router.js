const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');

router.use((req, res, next) => {
    res.locals.layout = false;
    next();
});

router.get('/', (req, res) => {
    res.render('home');
});

router.post('/', [
    body('data').isLength({ min: 3 }).withMessage('data must be at least 3 chars long'),
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.render('home', { errors: errors.array() });
    }

    const { data } = req.body;
    console.log(data);

    res.redirect('/');
});

module.exports = router;