const express = require('express');
const { check } = require('express-validator');

const { Song, User, Album } = require('../db/models');

const router = express.Router();

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

//get all songs
router.get('/', async (req, res) => {
    const Songs = await Song.findAll();
    res.json({ Songs });
})



module.exports = router;
