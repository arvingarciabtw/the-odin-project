const { Router } = require('express');
const membershipRouter = Router();
const membershipController = require('../controllers/membershipController');

membershipRouter.get('/:id', membershipController.getMembership);
membershipRouter.post('/:id', membershipController.postMembership);

module.exports = membershipRouter;
