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

router.post('/login', [
    body('email').isEmail().withMessage('email is not valid'),
    body('password').isLength({ min: 8 }).withMessage('password must be at least 8 chars')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.render('login', { error: errors.errors[0].msg, old: {...req.body } });
    }
});


module.exports = router;