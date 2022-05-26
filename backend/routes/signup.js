const express = require('express');
const { check } = require('express-validator');

const { setTokenCookie } = require('../utils/auth');
const { handleValidationErrors } = require('../utils/validation');
const { User } = require('../db/models');


const router = express.Router();

//validate req body for signup
validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Invalid email')
        .isEmail()
        .withMessage('Email is required'),
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Username is required')
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('firstName')
        .exists({ checkFalsy: true }),
    check('lastName')
        .exists({ checkFalsy: true }),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.')
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

//sign up
router.post('/', validateSignup, async (req, res, next) => {
    const { firstName, lastName, email, password, username } = req.body;

    const checkEmail = await User.findOne({
        where: { email }
    });
    const checkUsername = await User.findOne({
        where: { username }
    })
    if (checkEmail) {
        const error = new Error('User already exists');
        error.status = 403;
        error.errors = { "email": "User with that email already exists" }
        return next(error);
    };
    if (checkUsername) {
        const error = new Error('User already exists');
        error.status = 403;
        error.errors = { "username": "User with that username already exists" }
        error.title = 'User with that username already exists';

        return next(error);
    }

    const user = await User.signup({ firstName, lastName, email, username, password });
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
