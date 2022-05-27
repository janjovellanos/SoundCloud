const { validationResult } = require('express-validator');
const { check } = require('express-validator');

const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);

    let errObj = {}
    if (!validationErrors.isEmpty()) {
        const errors = validationErrors
            .array()
            // .map((error) => `${error.msg}`);
            .forEach((err) => {
                errObj[err.param] = err.msg
            });


        const err = Error('Validation error.');
        err.errors = errObj;
        err.status = 400;
        err.title = 'Validation error.';
        next(err);
    }
    next();
}

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

validateCommentCreation = [
    check('body')
        .exists({ checkFalsy: true })
        .withMessage('Body text is required'),
    handleValidationErrors
];

const validateLogin = [
    check('credential')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid email or username.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.'),
    handleValidationErrors
];

validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Invalid email')
        .isEmail()
        .withMessage('Email is required'),
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Username is required')
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage('First name is required'),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage('First name is required'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.')
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

validateQueryFilters = [
    check('page')
        .isInt({ min: 0 })
        .optional({ nullable: true })
        .withMessage('Page must be greater than or equal to 0'),
    check('size')
        .isInt({ min: 0 })
        .optional({ nullable: true })
        .withMessage('Page must be greater than or equal to 0'),
    check('createdAt')
        .isDate()
        .optional({ nullable: true })
        .withMessage('CreatedAt is invalid'),
    handleValidationErrors
]

validatePlaylistCreation = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Name is required'),
    handleValidationErrors
];


module.exports = {
    handleValidationErrors,
    validateSongCreation,
    validateAlbumCreation,
    validateCommentCreation,
    validateLogin,
    validateSignup,
    validateQueryFilters,
    validatePlaylistCreation
};
