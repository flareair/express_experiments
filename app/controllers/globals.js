var appData = require('./../config/constants');

module.exports.info = function(req, res) {
  res.send(appData);
};