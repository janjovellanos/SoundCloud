const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const loginRouter = require('./api')

router.use('/api', apiRouter);
router.use('/login', loginRouter);

//to get TOKEN while developing app
router.get('/api/csrf/restore', (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie('XSRF-TOKEN', csrfToken);
    res.status(200).json({
        'XSRF-TOKEN': csrfToken
    });
});

module.exports = router;
