const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');

function showView(view) {
    return function(req, res, next) {
        res.render(view);
    }
}

router.use((req, res, next) => {
    res.locals.layout = false;
    next();
});

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/login', showView('login'));
router.get('/register', showView('register'));

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