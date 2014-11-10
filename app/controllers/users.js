var db = require('./../seed');

module.exports.all = function(req, res) {
  res.json(db.users);
};

