const express = require('express');
const indexRouter = express.Router();
const cryptoRouter = require('./crypto');

indexRouter.get('/', (req, res) => res.send(`<h2> Hello Human </h2>`));

indexRouter.use('/crypto', cryptoRouter);

module.exports = indexRouter;