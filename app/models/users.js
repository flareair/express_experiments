var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  name: String,
  about: {
    age: Number,
    city: String,
    info: String,
  },
  photo: {
    type: String,
    default: 'http://placehold.it/350x350',
  }
}, {collection: 'users'});



usersSchema.statics.all = function(callback) {
  this.find({}, callback);
};

usersSchema.statics.findOne = function(id, callback) {
  this.find({_id: id}, callback);
};

var User = mongoose.model('Users', usersSchema);

module.exports = User;
