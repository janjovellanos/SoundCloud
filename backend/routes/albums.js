const express = require('express');
const { check } = require('express-validator');

const { restoreUser, requireAuth } = require('../utils/auth');
const { handleValidationErrors } = require('../utils/validation');
const { Song, User, Album } = require('../db/models');

const router = express.Router();

validateSongCreation = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Song title is required'),
    check('audioUrl')
        .exists({ checkFalsy: true })
        .withMessage('Audio is required'),
    handleValidationErrors
];

router.post('/:albumId', requireAuth, validateSongCreation, async (req, res) => {
    const { albumId } = req.params;
    const { user } = req;
    const { title, description, audioUrl, imageUrl } = req.body;

    const album = await Album.findByPk(albumId);

    if (!album) {
        res.status(404);
        res.json({
            message: "Album couldn't be found",
            statusCode: 404
        })
    }

    if (user.id === album.userId) {
        newSong = await Song.create({
            userId: user.id,
            albumId: album.id,
            title,
            description,
            audioUrl,
            imageUrl,
        })
        res.status(201);
        res.json(newSong);
    }
})

//get all albums
router.get('/', async (req, res) => {
    const Albums = await Album.findAll();
    res.json({ Albums });
})

module.exports = router;
