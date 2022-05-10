const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});



module.exports = router;





// // test auth middleware -- setTokenCoookie
// const { setTokenCookie } = require('../../utils/auth');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', async (_req, res) => {
//     const user = await User.findOne({
//         where: { username: 'Demo-lition' }
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// });

// // test auth middleware -- restoreUser
// const { restoreUser } = require('../../utils/auth');
// router.get('/restore-user', restoreUser, (req, res) => res.json(req.user));

// router.post('/test', function (req, res) {
//     res.json({ requestBody: req.body });
// });

// // test auth middleware -- requireAuth
// const { requireAuth } = require('../../utils/auth');
// router.get('/require-auth', requireAuth, (req, res) => {
//     return res.json(req.user);
// });
