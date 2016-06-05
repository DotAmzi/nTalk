 module.exports = function(app){
  var ContatosController = {
    index: function(req, res){
      var usuario = req.ntalk.usuario
        , contatos = usuario.contatos
        , params = {usuario: usuario
        , contatos: contatos};
      if(usuario){
        res.render('contatos/index', params);
      }else{
        res.redirect('/');
      }
    },

    create: function(req, res){
      var contato = usuario.contatos
        , usuario = req.ntalk.usuario;
        usuario.contatos.push(contato);
        red.redirect('/contatos');
    },

    show: function(req, res){
      var id = req.params.id
        , contato = req.ntalk.usuario.contatos[id]
        , params = {contato: contato, id: id};
        res.render('contatos/show', params);
    },

    edit: function(req, res){
      var id = req.params.id
        , usuario = req.ntalk.usuario
        , contato = usuario.contatos[id]
        , params = {
          usuario: usuario
          , contato: contato
          , id: id
        };
        res . render ( 'contatos/edit' , params );
    },

    update: function(req, res){
      var contato = req.body.contato
        , usuario = req.ntalk.usuario;
      usuario.contatos[req.params.id] = contato;
      red.redirect('/contatos');
    },

    destroy: function(req, res){
      var usuario = req.ntalk.usuario
      , id = req.params.id;
      usuario.contatos.splice(id, 1);
      res.redirect('/contatos');
    }

  };
  return ContatosController;
};
