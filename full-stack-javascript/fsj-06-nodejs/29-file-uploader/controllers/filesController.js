const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const path = require('node:path');

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://geuegkemyeauflwlylnf.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getCreateFile(req, res) {
  const folders = await prisma.folder.findMany({
    where: {
      userId: req.user.id,
    },
  });

  res.render('./files/create', { folders: folders });
}

async function postCreateFile(req, res) {
  const { createFileFolder } = req.body;

  const folder = await prisma.folder.findUnique({
    where: {
      name_userId: {
        name: createFileFolder,
        userId: req.user.id,
      },
    },
  });

  const supabasePath = `${req.user.id}/${createFileFolder}/${req.file.originalname}`;

  const { data, error } = await supabase.storage
    .from('file-uploader-files')
    .upload(supabasePath, req.file.buffer, {
      contentType: req.file.mimetype,
      cacheControl: '3600',
      upsert: false,
    });

  await prisma.file.create({
    data: {
      name: req.file.originalname,
      size: req.file.size,
      supabasePath: supabasePath,
      mimeType: req.file.mimetype,
      createdAt: new Date(),
      folderId: folder.id,
    },
  });

  if (error) {
    console.error('Supabase upload error:', error);
    res.redirect('/');
  }

  console.log('Upload successful:', data);

  res.redirect('/');
}

async function postDownloadFile(req, res) {
  let { id } = req.params;
  id = Number(id);

  const file = await prisma.file.findUnique({
    where: {
      id: id,
    },
  });

  const filename = file.name;
  const filepath = path.join(__dirname, '../uploads', filename);

  res.download(filepath, (err) => {
    if (err) {
      console.error('Download error:', err);
      res.status(404).send('File not found');
    }
  });
}

module.exports = {
  getCreateFile,
  postCreateFile,
  postDownloadFile,
};
