var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express');

module.exports = mongoose;
