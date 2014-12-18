var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  about: {
    age: {
      type: String,
      default: 'not set'
    },
    city: {
      type: String,
      default: 'unknown'
    },
    info: {
      type: String,
      default: 'empty'
    },
  },
  photo: {
    type: String,
    default: 'http://placehold.it/350x350',
  }
}, {collection: 'users'});



usersSchema.statics.all = function(callback) {
  this.find({}, callback);
};

usersSchema.statics.findOne = function(name, callback) {
  console.log(name);
  this.find({name: name}, callback);
};

var User = mongoose.model('Users', usersSchema);

module.exports = User;
