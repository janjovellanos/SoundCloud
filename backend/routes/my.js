const express = require('express');
const { check } = require('express-validator');

const { restoreUser } = require('../utils/auth');
const { handleValidationErrors } = require('../utils/validation');

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

//restore session user
router.get('/profile', restoreUser, (req, res) => {
    const { user } = req;
    if (user) {
        return res.json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username
        });
    } else return res.json({});
});

// return res.json({ user: user.toSafeObject() });


module.exports = router;
