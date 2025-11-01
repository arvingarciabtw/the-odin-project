const { Router } = require('express');
const foldersRouter = Router();
const foldersController = require('../controllers/foldersController');

foldersRouter.get('/create', foldersController.getCreateFolder);
foldersRouter.post('/create', foldersController.postCreateFolder);

module.exports = foldersRouter;
