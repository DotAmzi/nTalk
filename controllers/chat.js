module.exports = function(app){
  var chatController = {
    index: function(req, res){
      var params = {usuario: req.ntalk.usuario};
      res.render('chat/index', params);
    }
  };
  return chatController;
}
