const express = require('express');
const { check } = require('express-validator');

const { requireAuth, restoreUser } = require('../utils/auth');
const { handleValidationErrors } = require('../utils/validation');
const { Song, User, Album, Comment } = require('../db/models');

const router = express.Router();

//get specified artist
router.get('/:artistId', async (req, res, next) => {
    const { artistId } = req.params;

    const totalSongs = await Song.count({ where: { userId: artistId } })
    const totalAlbums = await Album.count({ where: { userId: artistId } })

    const artist = await User.findByPk(artistId, {
        attributes: [
            'id', 'username'
        ]
    });

    if (artist) {
        artist.dataValues.totalSongs = totalSongs;
        artist.dataValues.totalAlbums = totalAlbums;
        res.json(artist);
    } else {
        const err = new Error("Artist couldn't be found");
        err.status = 404;
        err.title = "Artist couldn't be found";
        return next(err);
    }
});





module.exports = router;
