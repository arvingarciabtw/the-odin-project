const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController');
const authController = require('../controllers/authController');

indexRouter.get('/', indexController.getIndex);
indexRouter.get('/add-message/:id', indexController.getAddMessage);
indexRouter.post('/add-message/:id', indexController.postAddMessage);
indexRouter.post('/delete-message/:id', indexController.postDeleteMessage);
indexRouter.get('/sign-up', authController.getSignUp);
indexRouter.post('/sign-up', authController.postSignUp);
indexRouter.post('/log-in', authController.postLogIn);
indexRouter.get('/log-out', authController.getLogOut);

module.exports = indexRouter;
