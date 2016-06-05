module.exports = function(req, res, next){
  if(!req.ntalk.usuario){
    return res.redirect('/');
  }
  return next();
};
