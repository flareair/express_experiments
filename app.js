var express = require('express');
var config = require('./app/config/config');
var app = express();


app.use(express.static(config.staticPath));
// app.use(app.router);

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');


app.get('/', function (req, res) {
  res.render('main');
});

app.use(function(req, res, next){
  res.status(404).sendFile(config.staticPath + '/404.html');
});

var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
