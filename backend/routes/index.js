const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const loginRouter = require('./login');
const myRouter = require('./my');

router.use('/api', apiRouter);
router.use('/login', loginRouter);
router.use('/my', myRouter);

//to get TOKEN while developing app
router.get('/api/csrf/restore', (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie('XSRF-TOKEN', csrfToken);
    res.status(200).json({
        'XSRF-TOKEN': csrfToken
    });
});

module.exports = router;
