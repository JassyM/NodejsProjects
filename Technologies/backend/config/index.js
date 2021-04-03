if(process.env.NODE_ENV !== 'production') {// process es el objeto de nodejs de forma global
  require('dotenv').config();
}

module.exports = { // Se exporta para que todas las variables de entorno estén en un solo lugar
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI
}