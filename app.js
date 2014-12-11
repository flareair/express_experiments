var express = require('express');

var app = express();





require('./app/config/config')(express, app);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
  console.log('DB Opened!');
});


require('./app/router')(app);





var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('%s app listening at http://localhost:%s', app.get('name'), port);
});
