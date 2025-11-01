const { Router } = require('express');
const filesRouter = Router();
const filesController = require('../controllers/filesController');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

filesRouter.get('/create', filesController.getCreateFile);
filesRouter.post(
  '/create',
  upload.single('createFile'),
  filesController.postCreateFile,
);

module.exports = filesRouter;
