var mongoose = require('../utils/mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var usersSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true,
    select: false
  },
  salt: {
    type: String,
    required: true,
    select: false
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


usersSchema.methods.encryptPassword = function(password) {
  return crypto.createHmac('sha1', this.salt)
    .update(password).digest('hex');
};


usersSchema.methods.checkPassword = function(password) {
  return this.encryptPassword(password) === this.hashedPassword;
};

usersSchema.virtual('password')
  .set(function(password) {
    this._plainPassword = password;
    this.salt = Math.random() + '';
    if (this._plainPassword === '') {
      return this.hashedPassword = null;
    }
    this.hashedPassword = this.encryptPassword(password);
    
  })
  .get(function() {
    return this._plainPassword;
  });

usersSchema.statics.all = function(callback) {
  this.find({}, callback);
};

usersSchema.statics.findOne = function(name, callback) {
  this.find({name: name}, callback);
};

var User = mongoose.model('Users', usersSchema);

module.exports = User;
