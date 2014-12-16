module.exports.layout = function(req, res) {
  res.render('main');
};

module.exports.partials = function(req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

module.exports.page404 = function(req, res) {
  res.status(404).render('main');
};
