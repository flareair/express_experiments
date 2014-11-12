var db = require('./../seed');

module.exports.all = function(req, res) {
  res.json(db.users);
};

module.exports.getUser = function(req, res) {
  var id = req.params.id;
  if (id >= 1 && id <= db.users.length) {
    res.json(db.users[id - 1]);
  }
  else {
    res.status(404);
    res.json(false);
    // next();
  }
};

