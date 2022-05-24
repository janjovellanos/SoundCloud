const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser')
const { ValidationError } = require('sequelize');

const routes = require('./routes');

const { environment } = require('./config');
const isProduction = environment === 'production';

//initialize the app
const app = express();

//logging
app.use(morgan('dev'));

//parsing
app.use(cookieParser());
app.use(express.json());

//security
if (!isProduction) app.use(cors());
app.use(helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
}));

//cookies
app.use(csurf({
    cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
    }
}));

app.use(routes);

//catch unhandled requests
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});

//process sequelize error
app.use((err, _req, _res, next) => {
    //check if err is sequelize err
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = 'Validation error';
        err.status = 400;
    }
    next(err);
});

//error formatter
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        statusCode: res.status,
        stack: isProduction ? null : err.stack
    });
});

module.exports = app;
