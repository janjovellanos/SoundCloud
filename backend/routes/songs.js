const express = require('express');

const { requireAuth } = require('../utils/auth');
const { validateQueryFilters } = require('../utils/validation');
const { Song, User, Album, Comment } = require('../db/models');

const router = express.Router();

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
            { model: User, as: 'Artist', attributes: ['id', 'username', 'imageUrl'] },
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
            err.status = 403;
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
            err.status = 403;
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

//get all songs && query
router.get('/', validateQueryFilters, async (req, res, next) => {
    let { page, size, title, createdAt } = req.query;
    let pagination = {}
    let where = {}

    if (page) page = parseInt(page);
    if (size) size = parseInt(size);


    page > 10 ? page = 0 : page = page;
    size > 15 ? size = 15 : size = size;
    if (size) pagination.limit = size;
    if (page && size) pagination.offset = size * (page - 1);

    if (title) where.title = title;
    if (createdAt) where.createdAt = createdAt;

    const Songs = await Song.findAll({
        where: { ...where },
        ...pagination
    });

    return res.json({
        Songs,
        page,
        size
    });
});



module.exports = router;
