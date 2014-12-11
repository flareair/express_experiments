var pages = require('./controllers/pages');
var users = require('./controllers/users');
var globals = require('./controllers/globals');

module.exports = function(app) {
  app.get('/api/appinfo', globals.info);
  app.get('/api/users', users.all);
  app.get('/api/user/:id', users.getUser);
  app.get('/partials/:name', pages.partials);
  app.get('*', pages.layout);
};