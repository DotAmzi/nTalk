module.exports = function(io){
  var sorckets = io.sockets;
  sockets.on('connection', function(client){
    var session = client.handshake.ntalk
    , usuario = talk.usuario;

    client.on('send-server', function(msg){
      msg = "<b>" + usuario.nome +":</b>"+ msg +"<br>";
      client.emit('send-client', msg);
      client.broadcast.emit('send-client', msg);
    })
  })
}
