var User = require('../models/users.js');

module.exports.all = function(req, res) {
  
  User.all(function(err, users) {
    // res.set('Content-Type', 'application/json');
    res.json(users);
  });
};

module.exports.getUserByName = function(req, res) {
  User.findOne(req.params.name, function(err, user) {
    if (!err && user[0]!== undefined) {
      res.json(user[0]);
      // console.log(user[0]);
    }
    else {
      if (err) {
        console.log(err.message);
      }
      res.status(500).send(false);
    }
  });
};

module.exports.newUser = function(req, res) {
  console.log(req.body);
  var newUser = new User(req.body);
  newUser.save(function(err) {
    if (err) {
      return console.log(err);
    }
    res.send('OK');
  });

};
