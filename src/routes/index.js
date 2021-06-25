const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/hello', (req, res) => res.send(`<h2> Hello Human </h2>`));

module.exports = indexRouter;