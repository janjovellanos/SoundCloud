const express = require('express');
const { check } = require('express-validator');

const { setTokenCookie } = require('../utils/auth');
const { handleValidationErrors } = require('../utils/validation');
const { User } = require('../db/models');

const router = express.Router();

//req body validation middleware
const validateLogin = [
    check('credential')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid email or username.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.'),
    handleValidationErrors
];



//login user
router.post('/', validateLogin, async (req, res, next) => {
    const { credential, password } = req.body;
    //login static method
    const user = await User.login({ credential, password });
    if (!user) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid'];
        return next(err);
    }
    const token = await setTokenCookie(res, user);
    return res.json({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        token
    });
});

module.exports = router;
