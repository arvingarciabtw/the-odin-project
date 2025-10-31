const { Router } = require('express');
const indexController = require('../controllers/indexController');
const authController = require('../controllers/authController');

const indexRouter = Router();

indexRouter.get('/', indexController.getIndex);
indexRouter.get('/sign-up', authController.getSignUp);
indexRouter.post('/sign-up', authController.postSignUp);
indexRouter.post('/log-in', authController.postLogIn);
indexRouter.get('/log-out', authController.getLogOut);

module.exports = indexRouter;
