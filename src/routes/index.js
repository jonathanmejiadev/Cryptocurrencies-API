const express = require('express');
const indexRouter = express.Router();
const cryptoRouter = require('./crypto');
const authRouter = require('./auth');

//indexRouter.get('/', (req, res) => res.send(`<h2> Hello Human </h2>`));
indexRouter.use('/', authRouter);
indexRouter.use('/crypto', cryptoRouter);

module.exports = indexRouter;