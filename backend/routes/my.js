const express = require('express');
const { check } = require('express-validator');

const { restoreUser, requireAuth } = require('../utils/auth');
const { handleValidationErrors } = require('../utils/validation');
// const { Album, Comment, Playlist, PlaylistSong, Song, User } = require('../db/models');

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

//restore session user / get user profile
router.get('/profile', requireAuth, restoreUser, (req, res) => {
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

// return res.json({ user: user.toSafeObject() });


module.exports = router;
