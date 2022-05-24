const { validationResult } = require('express-validator');

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


        const err = Error('Bad Request.');
        err.errors = errObj;
        err.status = 400;
        err.title = 'Bad request.';
        next(err);
    }
    next();
}

module.exports = { handleValidationErrors };
