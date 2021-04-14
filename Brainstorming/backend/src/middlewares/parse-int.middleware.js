module.exports = function(req, res, next) {
  const queryStrings = req.query;
  console.log("query: ", queryStrings);
  for(const key in queryStrings) {
    const length = queryStrings[key].length;
    const isValid = length > 20 ? false : !isNaN(parseInt(queryStrings[key]));
    
    if(isValid){
      queryStrings[key] = parseInt(queryStrings[key]);
    }
  }

  req.query = queryStrings;
  console.log("req: ", req);

  next(); // next() es quien le da acceso al próximo middleware de la cola de express
}