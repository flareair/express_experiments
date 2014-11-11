var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var appData = require('./constants');


module.exports = function(express, app) {

  app.use(express.static(path.join(__dirname, '../../public')));
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));


  app.set('name', appData.name);
  app.set('port', process.env.PORT || appData.defaultPort);
  app.set('views', path.join(__dirname, '../../client/views'));
  app.set('view engine', 'jade');
  
};

