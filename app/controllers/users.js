var user = require('../models/users.js');

module.exports.all = function(req, res) {
  
  user.all(function(err, users) {
    res.json(users);
  });
};

module.exports.getUserByName = function(req, res) {
  user.findOne(req.params.name, function(err, user) {
    if (!err && user[0]!= undefined) {
      res.json(user[0]);
      console.log(user[0]);
    }
    else {
      if (err) {
        console.log(err.message);
      }
      res.status(500).send(false);
    }
  });
};

