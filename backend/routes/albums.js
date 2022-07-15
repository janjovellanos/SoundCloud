const express = require('express');

const { requireAuth } = require('../utils/auth');
const { singlePublicFileUpload, singleMulterUpload } = require('../awsS3');
const { validateSongCreation, validateAlbumCreation } = require('../utils/validation');
const { Song, User, Album } = require('../db/models');

const router = express.Router();

//get specified album
router.get('/:albumId', async (req, res, next) => {
    const { albumId } = req.params;

    const album = await Album.findByPk(albumId, {
        include: [
            { model: User, as: 'Artist', attributes: ['id', 'username', 'imageUrl'] },
            {
                model: Song,
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
            err.status = 403;
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
router.put('/:albumId', requireAuth, singleMulterUpload('imageUrl'), validateAlbumCreation, async (req, res, next) => {
    const { albumId } = req.params;
    const { user } = req;
    const { title, description, imageUrl } = req.body

    if (req.file) {
        imageUrl = await singlePublicFileUpload(req.file);
    }


    const album = await Album.findByPk(albumId);

    if (album) {
        if (user.id === album.userId) {
            album.update({ title, description, imageUrl });
            return res.json(album)
        } else {
            const err = new Error('Not Authorized');
            err.status = 403;
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
            err.status = 403;
            err.title = 'Not Authorized'
            return next(err);
        }
    } else {
        const error = new Error("Album couldn't be found");
        error.status = 404;
        error.title = "Album couldn't be found";
        return next(error);
    }


})

//create album
router.post('/', requireAuth, singleMulterUpload('imageUrl'), validateAlbumCreation, async (req, res, next) => {
    const { user } = req;
    const { title, description } = req.body;
    console.log(req.file);
    const imageUrl = await singlePublicFileUpload(req.file);


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
