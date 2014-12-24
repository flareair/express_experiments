var async = require('async');
var mongoose = require('./mongoose');
var fs = require('fs');
var path = require('path');


function open(callback) {
  mongoose.connection.on('open', callback);
}


function dropDB(callback) {
  var db = mongoose.connection.db;
  db.dropDatabase(callback);
}


function requireModel(callback) {
  require('../models/users');
  async.each(Object.keys(mongoose.models), function(modelName, callback) {
    mongoose.models[modelName].ensureIndexes(callback);
  }, callback);
}


function createUsers(callback) {
  var User = require('../models/users');
  fs.readFile(path.join(__dirname, '../../seed.json'),'utf-8', function(err, users) {
    if (err) {
      callback(err);
      return;
    }

    users = JSON.parse(users);
    async.each(users, function(userData, callback) {
      var user = new User(userData);
      user.save(callback);
    }, callback);
  });
}

function closeConnection(callback) {
  mongoose.connection.close(callback);
}
// async.series([
// open,
// dropDB,
// requireModel,
// createUsers
// ], function(err) {
//   console.log(arguments);
//   mongoose.disconnect;
//   process.exit(err ? 255 : 0);
// });

var createDB = function(done) {
  async.series([
    open,
    dropDB,
    requireModel,
    createUsers,
    // closeConnection
  ], done);
};


var refreshDB = function(done) {
  async.series([
    dropDB,
    requireModel,
    createUsers,
  ], done);
};

module.exports.createDB = createDB;
module.exports.refreshDB = refreshDB;


