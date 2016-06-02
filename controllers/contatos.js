module.exports = function(app){
  var ContatosController = {
    index: function(req, res){
      var usuario = req.ntalk.usuario
        , params = {usuario: usuario};
      res.render('contatos/index', params);
    },
  };
  return ContatosController;
};
