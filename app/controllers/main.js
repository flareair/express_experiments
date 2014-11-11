var appData = require('./../config/constants');

module.exports.page = function(req, res) {
  res.render('main');
};

module.exports.info = function(req, res) {
  res.send(appData);
  console.log(req.is('application/json'));
};
