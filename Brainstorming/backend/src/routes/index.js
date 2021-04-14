const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); // Sirve para algunas brechas de seguridad
const compression = require('compression'); // Ayuda a comprimir las peticiones HTTP
require('express-async-errors'); // Ayuda a capturar en un middleware las excepciones asincronas
const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');

module.exports = function({
  HomeRoutes,
  UserRoutes,
  IdeaRoutes,
  CommentRoutes
}) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());
  
  
  
  apiRoutes.use('/home', HomeRoutes);
  apiRoutes.use('/user', UserRoutes);
  apiRoutes.use('/idea', IdeaRoutes);
  apiRoutes.use('/comment', CommentRoutes);

  router.use('/v1/api', apiRoutes); // Indica que todos los endpoints tengan esa ruta

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
}