const express = require('express');
const morgan = require('morgan')
const config = require('../config');
const indexRouter = require('../routes');

class ExpressServer {
    constructor() {
        this._app = express();
        this._port = config.PORT;
        this._prefix = config.prefix;
        this._middlewares();
        this._routes();
        this._notFound();
        this._errorHandler();
    };

    _middlewares() {
        this._app.use(morgan('dev'));
    }

    _routes() {
        this._app.get('/', (req, res) => res.send('<h1> Welcome to CryptoApp :) </h1>'));
        this._app.use('/v1', indexRouter);
    };

    _notFound() {
        this._app.get((req, res, next) => {
            const err = new Error('Not Found');
            err.statusCode = 404;
            next(err);
        });
    };

    _errorHandler() {
        this._app.get((err, req, res, next) => {
            if (!err.statusCode) err.statusCode(500);
            if (!err.message) err.message('Server Internal Error');
            console.log(`${err.statusCode} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            console.log(err.stack);
            const errorBody = {
                success: false,
                message: err.message,
                code: err.statusCode
            };
            return res.status(err.statusCode).json(errorBody);
        });
    };

    startServer() {
        this._app.listen(this._port, () => {
            console.log(`Server is running on port: ${this._port}`);
        });
    };
};

module.exports = ExpressServer;