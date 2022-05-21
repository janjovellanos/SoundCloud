const express = require('express');
const { check } = require('express-validator');

const { requireAuth, restoreUser } = require('../utils/auth');
const { handleValidationErrors } = require('../utils/validation');
const { Song, User, Album, Comment } = require('../db/models');

const router = express.Router();

validateCommentCreation = [
    check('body')
        .exists({ checkFalsy: true })
        .withMessage('Body text is required'),
    handleValidationErrors
];

//edit a comment
router.put('/:commentId', requireAuth, validateCommentCreation, async (req, res, next) => {
    const { commentId } = req.params;
    const { body } = req.body;
    const { user } = req;
    const comment = await Comment.findByPk(commentId);

    if (comment) {
        if (comment.userId === user.id) {
            comment.update({ body });
            res.json(comment);
        } else {
            const err = new Error('Not Authorized');
            err.status = 401;
            err.title = 'Not Authorized';
            return next(err)
        }
    } else {
        const err = new Error("Comment couldn't be found");
        err.status = 404;
        err.title = "Comment couldn't be found";
        return next(err);
    }
});

module.exports = router;
