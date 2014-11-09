var express = require('express');
var morgan = require('morgan');
var config = require('./app/config/config');

var app = express();




app.use(express.static(config.staticPath));

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.use(morgan('dev'));

require('./app/router')(app);


var server = app.listen(config.port, function() {
  var port = server.address().port;

  console.log('App listening at http://localhost:%s', port);

});
