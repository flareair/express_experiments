var path = require('path');
var morgan = require('morgan');
var appData = require('./constants');


module.exports = function(express, app) {

  app.use(express.static(path.join(__dirname, '../../public')));


  app.set('name', appData.name);

  app.set('port', process.env.PORT || appData.defaultPort);
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');
  app.use(morgan('dev'));
};

