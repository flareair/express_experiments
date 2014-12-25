var express = require('express');

var app = express();
var log = require('./app/utils/logger')(module);



require('./app/config/config')(express, app);

require('./app/config/router')(app);



var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  log.info('Listening at http://localhost:%s', port);
  log.info('Enviroment: ', app.get('env'));
});

module.exports = app;
