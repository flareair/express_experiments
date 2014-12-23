var User = require('../models/users');


module.exports.clearDB = function(done) {
  User.collection.remove(done);
};

module.exports.inputSeed = function(done) {
  // new User({name: 'Yaroslav'}).save();
  // new User({name: 'Kirill'}).save();
  // new User({name: 'Sasha'}).save(done);
};