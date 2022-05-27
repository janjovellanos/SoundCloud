const express = require('express');

const { Song, User, Album, Comment, Playlist } = require('../db/models');

const router = express.Router();

//get specified artist
router.get('/:artistId', async (req, res, next) => {
    const { artistId } = req.params;

    const totalSongs = await Song.count({ where: { userId: artistId } })
    const totalAlbums = await Album.count({ where: { userId: artistId } })

    const artist = await User.findByPk(artistId, {
        attributes: [
            'id', 'username', 'imageUrl'
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

//get specified artist's songs
router.get('/:artistId/songs', async (req, res, next) => {
    const { artistId } = req.params;

    const songs = await Song.findAll({ where: { userId: artistId } });

    if (songs.length) {
        res.json({ Songs: songs });
    } else {
        const err = new Error("Artist couldn't be found");
        err.status = 404;
        err.title = "Artist couldn't be found";
        return next(err)
    }
});

//get specified artist's albums
router.get('/:artistId/albums', async (req, res, next) => {
    const { artistId } = req.params;

    const albums = await Album.findAll({ where: { userId: artistId } });

    if (albums.length) {
        res.json({ Albums: albums });
    } else {
        const err = new Error("Artist couldn't be found");
        err.status = 404;
        err.title = "Artist couldn't be found";
        return next(err)
    }
});

//get specified artist's playlists
router.get('/:artistId/playlists', async (req, res, next) => {
    const { artistId } = req.params;

    const artist = await User.findByPk(artistId);
    if (artist) {
        const playlists = await Playlist.findAll({ where: { userId: artistId } });
        res.json({ Playlists: playlists });
    } else {
        const err = new Error("Artist couldn't be found");
        err.status = 404;
        err.title = "Artist couldn't be found";
        return next(err)
    }
});




module.exports = router;
