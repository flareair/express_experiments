module.exports.index = function(req, res) {
  res.render('main');
};

module.exports.partials = function(req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

module.exports.error404 = function(req, res) {
  res.render('404');
};

