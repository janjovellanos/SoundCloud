const express = require('express');

const { setTokenCookie } = require('../utils/auth');
const { validateLogin } = require('../utils/validation');
const { User } = require('../db/models');

const router = express.Router();

//login user
router.post('/', validateLogin, async (req, res, next) => {
    const { credential, password } = req.body;
    //login static method
    const user = await User.login({ credential, password });
    if (!user) {
        const err = new Error('Invalid credentials');
        err.status = 401;
        err.title = 'Login Failed';
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

//logout
router.delete('/', (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
});

module.exports = router;
