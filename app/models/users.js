var mongoose = require('../utils/mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
  },
  salt: {
    type: String,
    default: Math.random() * 1000 + '',
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
  this.find({name: name}, callback);
};

var User = mongoose.model('Users', usersSchema);

module.exports = User;
