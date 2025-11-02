const { Router } = require('express');
const filesRouter = Router();
const filesController = require('../controllers/filesController');
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

filesRouter.get('/create', filesController.getCreateFile);
filesRouter.post(
  '/create',
  upload.single('createFile'),
  filesController.postCreateFile,
);
filesRouter.post('/download/:id', filesController.postDownloadFile);

module.exports = filesRouter;
