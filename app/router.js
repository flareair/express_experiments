var pages = require('./controllers/pages');
var users = require('./controllers/users');
var globals = require('./controllers/globals');

module.exports = function(app) {
  app.get('/api/appinfo', globals.info);
  app.get('/api/users/:name', users.getUserByName);
  app.get('/api/users', users.all);
  app.get('/partials/:name', pages.partials);
  app.get('/404', pages.page404);
  app.get('*', pages.layout);
};