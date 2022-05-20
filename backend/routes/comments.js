const express = require('express');
const { check } = require('express-validator');

const { requireAuth } = require('../utils/auth');
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

    if (!comment) {
        const error = new Error("Comment couldn't be found");
        error.status = 404;
        return next(error);
    } else {
        if (comment.userId === user.id) {
            comment.update({ body });
            res.json(comment);
        } else {
            res.status(403);
            res.json({
                message: 'Unauthorized',
                statusCode: 403
            })
        }
    }
});

module.exports = router;
