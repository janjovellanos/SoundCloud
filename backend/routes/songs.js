const express = require('express');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../utils/validation');

const { requireAuth } = require('../utils/auth');
const { Song, User, Album } = require('../db/models');

validateSongCreation = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Song title is required'),
    check('audioUrl')
        .exists({ checkFalsy: true })
        .withMessage('Audio is required'),
    handleValidationErrors
];

const router = express.Router();

//get specified song
router.get('/:songId', async (req, res, next) => {
    const { songId } = req.params;

    const song = await Song.findByPk(songId, {
        include: [
            { model: User, as: 'Artist', attributes: ['id', 'username'] },
            { model: Album, attributes: ['id', 'title', 'imageUrl'] }
        ]
    });

    if (!song) {
        const error = new Error("Song couldn't be found");
        error.status = 404;
        return next(error);
    }

    res.json(song);
})
//update specified song
router.put('/:songId', requireAuth, validateSongCreation, async (req, res, next) => {
    const { songId } = req.params;
    const { title, description, audioUrl, imageUrl } = req.body;

    const song = await Song.findByPk(songId);

    if (!song) {
        const error = new Error("Song couldn't be found");
        error.status = 404;
        return next(error);
    }

    song.update({
        title, description, audioUrl, imageUrl
    })
    res.json(song);
})

router.delete('/:songId', requireAuth, async (req, res, next) => {
    const { songId } = req.params;

    const song = await Song.findByPk(songId);

    if (!song) {
        const error = new Error("Song couldn't be found");
        error.status = 404;
        return next(error);
    }

    await song.destroy();
    res.json({
        message: "Successfully deleted",
        statusCode: 200
    })
})

//get all songs
router.get('/', async (req, res) => {
    const Songs = await Song.findAll();
    res.json({ Songs });
})



module.exports = router;
