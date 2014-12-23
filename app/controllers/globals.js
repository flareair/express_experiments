var config = require('./../config/index');

module.exports.info = function(req, res) {
  res.send(config.get('app'));
};