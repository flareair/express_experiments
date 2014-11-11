var main = require('./controllers/main');
var users = require('./controllers/users');

module.exports = function(app) {
  app.get('/', main.page);
  app.get('/users', users.all);
  app.get('/appinfo', main.info);

  app.use(function(req, res){
    res.status(404).render(404);
  });
};