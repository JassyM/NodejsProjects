module.exports = function(req, res, next){ // next es una función que se invoca para darle paso al siguiente middlware de la lista de express
  return res.status(404).send({ message: 'Page not found!' });
}