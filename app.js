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
  , app = express()
;

app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));

app.use(sessions({
  cookieName: 'mySession', // cookie name dictates the key name added to the request object
  secret: 'blargadeeblargblarg', // should be a large unguessable string
  duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
  activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDura
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
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

app.listen(3000, function(){
  console.log('Ntalk no ar');
})
