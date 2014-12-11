var user = require('../models/users.js');

module.exports.all = function(req, res) {
  
  user.all(function(err, users) {
    res.json(users);
  });
};

module.exports.getUser = function(req, res) {
  // var id = req.params.id;
  // if (id >= 1 && id <= db.users.length) {
  //   res.json(db.users[id - 1]);
  // }
  // else {
  //   res.status(404);
  //   res.json(false);
  // }
  user.findOne(req.params.id, function(err, user) {
    if (!err) {
      res.json(user[0]);
      console.log(user[0]);
    }
    else {
      console.log(err.message);
      res.status(500).send(false);
    }
  });
};

