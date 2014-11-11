var db = require('./../seed');

module.exports.all = function(req, res) {
  res.json(db.users);
};

module.exports.getUser = function(req, res, next) {
  var id = req.params.id;
  if (id >= 1 && id <= db.users.length) {
    res.json(db.users[id - 1]);
  }
  else {
    // res.json(false);
    next();
  }
};

