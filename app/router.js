var pages = require('./controllers/pages');
var users = require('./controllers/users');
var globals = require('./controllers/globals');

module.exports = function(app) {
  app.get('/', pages.index);
  app.get('/appinfo', globals.info);
  app.get('/users', users.all);
  app.get('/user/:id', users.getUser);
  app.get('/partials/:name', pages.partials);

  app.get('*', pages.error404);
};