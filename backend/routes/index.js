const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const loginRouter = require('./login');
const myRouter = require('./my');
const songsRouter = require('./songs');
const signUpRouter = require('./signup');
const albumRouter = require('./albums');
const commentRouter = require('./comments');
const artistRouter = require('./artists');
const playlistRouter = require('./playlists');

router.use('/api', apiRouter);
router.use('/login', loginRouter);
router.use('/my', myRouter);
router.use('/songs', songsRouter);
router.use('/signup', signUpRouter);
router.use('/albums', albumRouter);
router.use('/comments', commentRouter);
router.use('/artists', artistRouter);
router.use('/playlists', playlistRouter);

//to get TOKEN while developing app
router.get('/api/csrf/restore', (req, res) => {
  const csrfToken = req.csrfToken();

  res.cookie('XSRF-TOKEN', csrfToken);
  res.status(200).json({
    'XSRF-TOKEN': csrfToken,
  });
});

module.exports = router;


/*

fetch('/songs/6', {
  method: 'PUT',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `ucKl0HVV-Qc6kJshBc1qF_n2MUsdmWzyfHWE`
  },
  body: JSON.stringify({
    title: 'Update11111',
    description: 'Update11111',
    audioUrl: 'Update11111', imageUrl: 'Update11111'
  })
}).then(res => res.json()).then(data => console.log(data));

*/
