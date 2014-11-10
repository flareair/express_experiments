var main = require('./controllers/main');
var users = require('./controllers/users');

module.exports = function(app) {
  app.get('/', main.page);
  app.get('/users', users.all);
  app.get('/appname', function(req, res) {
    res.send(app.get('name'));
  });


  app.use(function(req, res){
    res.status(404).render(404);
  });
};