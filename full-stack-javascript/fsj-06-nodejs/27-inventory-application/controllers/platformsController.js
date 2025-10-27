function createPlatformGet(_req, res) {
  res.render('./platforms/create');
}

function updatePlatformGet(_req, res) {
  res.render('./platforms/update');
}

function deletePlatformGet(_req, res) {
  res.render('./platforms/delete');
}

module.exports = {
  createPlatformGet,
  updatePlatformGet,
  deletePlatformGet,
};
