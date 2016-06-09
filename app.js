var express = require('express')
  , load = require('express-load')
  /*
  O app express-load substitui esses comando de rota
  , routes = require('./routes/index')
  , users = require('./routes/users')
  */
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , sessions = require("client-sessions")
  , methodOverride = require("method-override")
  , error = require('./middleware/error')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io')(server)
;

app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));

app.use(sessions({
  cookieName: 'ntalk', // cookie name dictates the key name added to the request object
  secret: 'xablau', // should be a large unguessable string
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Na assinatura do methodOverride, basta colocar uma pré assinatura para os métodos
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

/*
app.use('./', routes);
app.use('/usuarios', users);
  Não é necessário setar rotas com o express-load
*/


load('models')
  .then('controllers')
  .then('routes')
  .into(app);

io.on('connection', function(client){
  client.on('send-server', function(data){
    var msg = "<b>"+ data.nome +":</b>"+ data.msg +"<br>";
    client.emit('send-client', msg);
    client.broadcast.emit('send-client', msg);
  })
})
  /*
  Os middleware de erros só podem ser instanciados depois
  das rotas e controllers
  */

app.use(error.notFound);
app.use(error.serverError);

server.listen(3000, function(){
  console.log('Ntalk no ar');
})
