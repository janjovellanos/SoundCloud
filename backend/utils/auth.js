const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;


//send a JWT cookie
const setTokenCookie = (res, user) => {
    //create token
    const token = jwt.sign(
        { data: user.toSafeObject() },
        secret,
        { expiresIn: parseInt(expiresIn) }
    );

    const isProduction = process.env.NODE_ENV === 'production';

    //set token cookie
    res.cookie('token', token, {
        maxAge: expiresIn * 1000,
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction && "Lax"
    });
    return token;
};

const restoreUser = (req, res, next) => {
    //token parsed from cookies
    const { token } = req.cookies;
    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        if (err) {
            return next();
        }

        try {
            const { id } = jwtPayload.data;
            req.user = await User.scope('currentUser').findByPk(id);
        } catch (e) {
            res.clearCookie('token');
            return next();
        }

        if (!req.user) res.clearCookie('token');

        return next();
    });
};

//if no current user, return an error
const requireAuth = [
    restoreUser,
    function (req, _res, next) {
        if (req.user) return next();

        const err = new Error('Authentication required');
        // err.title = 'Unauthorized';
        // err.errors = ['Authentication required'];
        err.status = 401;
        return next(err);
    }
];

module.exports = { setTokenCookie, restoreUser, requireAuth };
