const express = require('express');
const { check } = require('express-validator');

const { requireAuth } = require('../utils/auth');
const { handleValidationErrors } = require('../utils/validation');
const { Song, User, Album, Comment } = require('../db/models');

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

validateCommentCreation = [
    check('body')
        .exists({ checkFalsy: true })
        .withMessage('Body text is required'),
    handleValidationErrors
];

//get comments on specified song
router.get('/:songId/comments', async (req, res, next) => {
    const { songId } = req.params;

    const song = await Song.findByPk(songId, {
        include: [
            {
                model: Comment,
                include: [{ model: User, attributes: ['id', 'username'] }]
            }
        ]
    });
    if (song) {
        const comments = song.Comments;
        res.json({ Comments: comments })
    } else {
        const err = new Error("Song couldn't be found");
        err.status = 404;
        err.title = "Song couldn't be found";
        return next(err);
    }
});

//create comment on specified song
router.post('/:songId/comments', requireAuth, validateCommentCreation, async (req, res, next) => {
    const { songId } = req.params;
    const { body } = req.body;
    const { user } = req;

    const song = await Song.findByPk(songId);

    if (song) {
        const newComment = await Comment.create({
            userId: user.id,
            songId,
            body
        });
        res.json(newComment);
    } else {
        const err = new Error("Song couldn't be found");
        err.status = 404;
        err.title = "Song couldn't be found";
        return next(err);
    }
})

//get specified song
router.get('/:songId', async (req, res, next) => {
    const { songId } = req.params;

    const song = await Song.findByPk(songId, {
        include: [
            { model: User, as: 'Artist', attributes: ['id', 'username'] },
            { model: Album, attributes: ['id', 'title', 'imageUrl'] }
        ]
    });

    if (song) {
        res.json(song);
    } else {
        const err = new Error("Song couldn't be found");
        err.status = 404;
        err.title = "Song couldn't be found";
        return next(err);
    }
});

//edit song
router.put('/:songId', requireAuth, validateSongCreation, async (req, res, next) => {
    const { songId } = req.params;
    const { user } = req;
    const { title, description, audioUrl, imageUrl } = req.body

    const song = await Song.findByPk(songId);

    if (song) {
        if (song.userId === user.id) {
            song.update({ title, description, audioUrl, imageUrl });
            res.json(song)
        } else {
            const err = new Error('Not Authorized');
            err.status = 401;
            err.title = 'Not Authorized';
            return next(err);
        }
    } else {
        const err = new Error("Song couldn't be found");
        err.status = 401;
        err.title = "Song couldn't be found";
        return next(err);
    }
})

//delete specified song
router.delete('/:songId', requireAuth, async (req, res, next) => {
    const { songId } = req.params;
    const { user } = req;

    const song = await Song.findByPk(songId);

    if (song) {
        if (song.userId === user.id) {
            await song.destroy();
            res.json({
                message: 'Successfully deleted',
                statusCode: 200
            })
        } else {
            const err = new Error('Not Authorized');
            err.status = 401;
            err.title = 'Not Authorized';
            return next(err);
        }
    } else {
        const err = new Error("Song couldn't be found");
        err.status = 404;
        err.title = "Song couldn't be found";
        return next(err);
    }
})

//get all songs
router.get('/', async (req, res) => {
    const Songs = await Song.findAll();
    res.json({ Songs });
})



module.exports = router;
