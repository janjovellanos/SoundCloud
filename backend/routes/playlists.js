const express = require('express');
const { check } = require('express-validator');

const { requireAuth, restoreUser } = require('../utils/auth');
const { handleValidationErrors } = require('../utils/validation');
const { Song, User, Album, Comment, Playlist, PlaylistSong } = require('../db/models');

const router = express.Router();

validatePlaylistCreation = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Name is required'),
    handleValidationErrors
];

//add song to playlist
router.post('/:playlistId', requireAuth, async (req, res, next) => {
    let { playlistId } = req.params;
    const { songId } = req.body;
    const { user } = req;
    playlistId = parseInt(playlistId)

    const playlist = await Playlist.findByPk(playlistId);
    const song = await Song.findByPk(songId);

    if (playlist) {
        if (song) {
            if (user.id === playlist.userId) {
                const playlistSongAssociation = await PlaylistSong.create({ playlistId, songId });
                const playlistSong = await PlaylistSong.findOne({
                    where: { playlistId, songId },
                    attributes: ['id', 'playlistId', 'songId']
                })
                res.json(playlistSong);
            } else {
                const err = new Error('Not Authorized');
                err.title = 'Not Authorized';
                err.status = 401;
                return next(err);
            }
        } else {
            const err = new Error("Song couldn't be found");
            err.title = "Song couldn't be found";
            err.status = 404;
            return next(err);
        }
    } else {
        const err = new Error("Playlist couldn't be found");
        err.title = "Playlist couldn't be found";
        err.status = 404;
        return next(err);
    }
});

//get specified playlist
router.get('/:playlistId', async (req, res, next) => {
    const { playlistId } = req.params;

    const playlist = await Playlist.findByPk(
        playlistId,
        {
            include: [
                {
                    model: Song,
                    through: { attributes: [] }
                }
            ]
        }
    )
    if (playlist) {
        res.json(playlist);
    } else {
        const err = new Error("Playlist couldn't be found");
        err.title = "Playlist couldn't be found";
        err.status = 404;
        return next(err);
    }
});

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
});

module.exports = router;
