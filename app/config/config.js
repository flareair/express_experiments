var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var config = require('./index');


module.exports = function(express, app) {
  app.use(express.static(path.join(__dirname, '../../public')));

  if (app.get('env') === 'development') {
    app.use(morgan('dev'));
  }
  
  // app.use(favicon(path.join(__dirname, '../../public/images/favicon.ico')));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.set('name', config.get('app:name'));
  app.set('port', process.env.PORT || config.get('port'));
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');

};