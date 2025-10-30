const { Router } = require('express');
const membershipRouter = Router();
const membershipController = require('../controllers/membershipController');

membershipRouter.get('/membership/:id', membershipController.getMembership);
membershipRouter.post('/membership/:id', membershipController.postMembership);

module.exports = membershipRouter;
