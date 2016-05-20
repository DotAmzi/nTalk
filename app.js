var express = require('express')
  , load = require('express-load')
  /*
  O app express-load substitui esses comando de rota
  , routes = require('./routes/index')
  , users = require('./routes/users')
  */
  , app = express()
;

app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');
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
