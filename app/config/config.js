var path = require('path');
var morgan = require('morgan');


module.exports = function(express, app) {

  app.use(express.static(path.join(__dirname, '../../public')));


  app.set('name', 'Microtalk');

  app.set('port', process.env.PORT || 8000);
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');
  app.use(morgan('dev'));
};