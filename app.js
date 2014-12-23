var express = require('express');

var app = express();





require('./app/config/config')(express, app);

require('./app/config/router')(app);





var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('%s app listening at http://localhost:%s', app.get('name'), port);
});

module.exports = app;
