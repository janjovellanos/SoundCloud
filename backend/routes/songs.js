const express = require('express');
const { check } = require('express-validator');

const { requireAuth } = require('../utils/auth');
const { handleValidationErrors } = require('../utils/validation');
const { Song, User, Album, Comment } = require('../db/models');
const song = require('../db/models/song');

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
    if (!song) {
        const error = new Error("Song couldn't be found");
        error.status = 404;
        return next(error);
    }
    const comments = song.Comments;
    res.json({ Comments: comments })
});

//create comment on specified song
router.post('/:songId/comments', requireAuth, validateCommentCreation, async (req, res, next) => {
    const { songId } = req.params;
    const { body } = req.body;
    const { user } = req;

    const song = await Song.findByPk(songId);
    if (!song) {
        const error = new Error("Song couldn't be found");
        error.status = 404;
        return next(error);
    }
    const newComment = await Comment.create({
        userId: user.id,
        songId,
        body
    });
    res.json(newComment);
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

    if (!song) {
        const error = new Error("Song couldn't be found");
        error.status = 404;
        return next(error);
    }

    res.json(song);
});

//edit song
router.put('/:songId', requireAuth, validateSongCreation, async (req, res, next) => {
    const { songId } = req.params;
    const { title, description, audioUrl, imageUrl } = req.body

    const song = await Song.findByPk(songId);

    if (!song) {
        res.status(404);
        return res.json({
            message: "song couldn't be found",
            statusCode: 404
        })
    }

    song.update({ title, description, audioUrl, imageUrl });
    res.json(song)
})

//delete specified song
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
        message: 'Successfully deleted',
        statusCode: 200
    })
})

//get all songs
router.get('/', async (req, res) => {
    const Songs = await Song.findAll();
    res.json({ Songs });
})



module.exports = router;
