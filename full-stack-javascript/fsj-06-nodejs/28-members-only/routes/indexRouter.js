const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController');
const authController = require('../controllers/authController');
const membershipController = require('../controllers/membershipController');

indexRouter.get('/', indexController.getIndex);
indexRouter.get('/sign-up', authController.getSignUp);
indexRouter.post('/sign-up', authController.postSignUp);
indexRouter.post('/log-in', authController.postLogIn);
indexRouter.get('/log-out', authController.getLogOut);
indexRouter.get('/membership/:id', membershipController.getMembership);
indexRouter.post('/membership/:id', membershipController.postMembership);

module.exports = indexRouter;
