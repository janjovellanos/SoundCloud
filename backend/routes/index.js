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
router.use('/signup', signUpRouter);
router.use('/api/my', myRouter);
router.use('/api/songs', songsRouter);
router.use('/api/albums', albumRouter);
router.use('/api/comments', commentRouter);
router.use('/api/artists', artistRouter);
router.use('/api/playlists', playlistRouter);

// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });
}

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
  router.get('/api/csrf/restore', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.json({});
  });
}

//to get TOKEN while developing app
router.get('/api/csrf/restore', (req, res) => {
  const csrfToken = req.csrfToken();

  res.cookie('XSRF-TOKEN', csrfToken);
  res.status(200).json({
    'XSRF-TOKEN': csrfToken,
  });
});

module.exports = router;
