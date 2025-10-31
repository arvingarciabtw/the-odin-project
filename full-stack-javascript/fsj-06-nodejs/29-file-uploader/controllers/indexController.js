async function getIndex(req, res) {
  res.render('index', { user: req.user });
}

module.exports = { getIndex };
