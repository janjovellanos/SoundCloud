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

//get specified album
router.get('/:albumId', async (req, res, next) => {
    const { albumId } = req.params;

    const album = await Album.findByPk(albumId, {
        include: [
            { model: User, as: 'Artist', attributes: ['id', 'username'] },
            {
                model: Song,
                // attributes: [
                //     'id',
                //     'userId',
                //     'albumId',
                //     'title',
                //     'description',
                //     'audioUrl',
                //     'imageUrl'
                // ]
            }
        ]
    });

    if (album) {
        res.json(album);
    } else {
        const err = new Error("Album couldn't be found");
        err.status = 404;
        err.title = "Album couldn't be found";
        return next(err)
    }
})

//create song on album
router.post('/:albumId', requireAuth, validateSongCreation, async (req, res, next) => {
    const { albumId } = req.params;
    const { user } = req;
    const { title, description, audioUrl, imageUrl } = req.body;

    const album = await Album.findByPk(albumId);

    if (album) {
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
            return res.json(newSong);
        } else {
            const err = new Error('Not Authorized');
            err.status = 401;
            err.title = 'Not Authorized'
            return next(err);
        }
    } else {
        const err = new Error("Album couldn't be found");
        err.status = 404;
        err.title = "Album couldn't be found";
        return next(err)
    }

})
//edit album
router.put('/:albumId', requireAuth, validateAlbumCreation, async (req, res, next) => {
    const { albumId } = req.params;
    const { user } = req;
    const { title, description, imageUrl } = req.body

    const album = await Album.findByPk(albumId);

    if (album) {
        if (user.id === album.userId) {
            album.update({ title, description, imageUrl });
            return res.json(album)
        } else {
            const err = new Error('Not Authorized');
            err.status = 401;
            err.title = 'Not Authorized'
            return next(err);
        }
    } else {
        const err = new Error("Album couldn't be found");
        err.status = 404;
        err.title = "Album couldn't be found";
        return next(err)
    }

})

//delete an album
router.delete('/:albumId', requireAuth, async (req, res, next) => {
    const { albumId } = req.params;
    const { user } = req;

    const album = await Album.findByPk(albumId);

    if (album) {
        if (album.userId === user.id) {
            await album.destroy();
            res.json({
                message: 'Successfully deleted',
                statusCode: 200
            })
        } else {
            const err = new Error('Not Authorized');
            err.status = 401;
            err.title = 'Not Authorized'
            return next(err);
        }
    } else {
        const error = new Error("Album couldn't be found");
        error.status = 404;
        err.title = "Album couldn't be found";
        return next(error);
    }


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

//get all albums
router.get('/', async (req, res) => {
    const Albums = await Album.findAll();
    res.json({ Albums });
})


module.exports = router;
