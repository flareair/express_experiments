var User = require('../models/users.js');
var log = require('../utils/logger')(module);

module.exports.all = function(req, res) {
  
  User.all(function(err, users) {
    if (err || users === undefined) {
      res.status(500).send(false);
      if (err) {
        log.error(err.message);
      }
      return log.error('Can\'t get users');
    }
    res.json(users);
    log.info("Users sended");
  });
};

module.exports.getUserByName = function(req, res) {
  User.findOne(req.params.name, function(err, user) {
    if (!err && user[0]!== undefined) {
      res.json(user[0]);
      log.info('User %s sended!', req.params.name);
      
    }
    else {
      if (err) {
        log.error(err.message);
      }
      res.status(500).send(false);
    }
  });
};

module.exports.newUser = function(req, res) {
  log.info('Got a new user request!');
  log.info(req.body);
  var newUser = new User(req.body);
  newUser.save(function(err) {
    if (err) {
      res.status(500).send(err);
      return log.error(err.name);
    }
    res.send('OK');
  });

};
