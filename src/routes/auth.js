const { Router } = require('express');
const authCtrl = require('../controllers/auth');

const authRouter = Router();

authRouter.post('/register', authCtrl.register);

module.exports = authRouter;