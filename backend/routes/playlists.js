const express = require('express');
const { check } = require('express-validator');

const { requireAuth, restoreUser } = require('../utils/auth');
const { handleValidationErrors } = require('../utils/validation');
const { Song, User, Album, Comment, Playlist } = require('../db/models');

const router = express.Router();

validatePlaylistCreation = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Name is required'),
    handleValidationErrors
];

//create a playlist
router.post('/', requireAuth, validatePlaylistCreation, async (req, res, next) => {
    const { user } = req;
    const { name, imageUrl } = req.body;

    const newPlaylist = await Playlist.create({
        userId: user.id,
        name,
        imageUrl
    })
    res.json(newPlaylist);
})

module.exports = router;
