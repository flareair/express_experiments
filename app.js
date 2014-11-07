var express = require('express');
var morgan = require('morgan');
var config = require('./app/config/config');

var app = express();

app.use(express.static(config.staticPath));

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.render('main');
});

app.get('/message', function (req, res) {
  res.json({message: 'Server message'});
});

app.use(function(req, res, next){
  res.status(404).render(404);
});

var server = app.listen(config.port, function() {
  var port = server.address().port;

  console.log('App listening at http://localhost:%s', port);

});
