var main = require('./controllers/main');
var users = require('./controllers/users');

module.exports = function(app) {
  app.get('/', main);
  app.get('/users', users.all);

  app.use(function(req, res){
    res.status(404).render(404);
  });
};