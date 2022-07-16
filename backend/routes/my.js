const express = require('express');

const { restoreUser, requireAuth } = require('../utils/auth');

const router = express.Router();

//restore session user / get user profile
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

//get curr user playlists
router.get('/playlists', requireAuth, async (req, res, next) => {
    const { user } = req;

    const currUserPlaylists = await user.getPlaylists();

    res.json({ Playlists: currUserPlaylists })
})

//get curr user albums
router.get('/albums', requireAuth, async (req, res, next) => {
    const { user } = req;

    const currUserAlbums = await user.getAlbums();

    res.json({ Albums: currUserAlbums })
})

//get curr user songs
router.get('/songs', requireAuth, async (req, res, next) => {
    const { user } = req;

    const currUserSongs = await user.getSongs();

    res.json({ Songs: currUserSongs });
})


module.exports = router;
