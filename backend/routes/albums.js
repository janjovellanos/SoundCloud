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

validateAlbumCreation = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Album title is required'),
    handleValidationErrors
];

//get specific album
router.get('/:albumId', async (req, res, next) => {
    const { albumId } = req.params;

    const album = await Album.findByPk(albumId, {
        include: [
            { model: User, as: 'Artist', attributes: ['id', 'username'] },
            {
                model: Song, attributes: [
                    'id',
                    'userId',
                    'albumId',
                    'title',
                    'description',
                    'audioUrl',
                    'imageUrl'
                ]
            }
        ]
    });

    if (!album) {
        const error = new Error("Album couldn't be found");
        error.status = 404;
        return next(error);
    }

    res.json(album);
})

//create song on album
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

//edit album
router.put('/:albumId', requireAuth, validateAlbumCreation, async (req, res, next) => {
    const { albumId } = req.params;
    const { title, description, imageUrl } = req.body

    const album = await Album.findByPk(albumId);

    if (!album) {
        res.status(404);
        return res.json({
            message: "Album couldn't be found",
            statusCode: 404
        })
    }

    album.update({ title, description, imageUrl });
    return res.json(album)
});

//delete album
router.delete('/:albumId', requireAuth, async (req, res, next) => {
    const { albumId } = req.params;

    const album = await Album.findByPk(albumId);

    if (!album) {
        const error = new Error("Album couldn't be found");
        error.status = 404;
        return next(error);
    }

    await album.destroy();
    res.json({
        message: 'Successfully deleted',
        statusCode: 200
    })
})

//get all albums
router.get('/', async (req, res) => {
    const Albums = await Album.findAll();
    res.json({ Albums });
})

//create album
router.post('/', requireAuth, validateAlbumCreation, async (req, res, next) => {
    const { user } = req;
    const { title, description, imageUrl } = req.body;

    newAlbum = await Album.create({
        userId: user.id,
        title,
        description,
        imageUrl,
    })
    res.status(201);
    res.json(newAlbum);
})

module.exports = router;
