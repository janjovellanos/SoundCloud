const express = require('express');

const { setTokenCookie } = require('../utils/auth');
const { validateSignup } = require('../utils/validation');
const { User } = require('../db/models');


const router = express.Router();

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
