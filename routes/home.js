module.exports = function(app){
  var home = app.controllers.home;
  app.get('/', home.index);
  app.post('/entrar', home.login);
  app.get('/sair', home.logout);
};

module.exports = function(app){
  var contatos = app.controllers.contatos;
  app.get('/contatos', contatos.index);
};
