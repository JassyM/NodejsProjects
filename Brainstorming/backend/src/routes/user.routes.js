const { Router } = require('express');
const { AuthMiddleware, ParseIntMiddleware, CacheMiddleware } = require('../middlewares')
const { CACHE_TIME } = require('../helpers');

module.exports = function({ UserController }) { // function hace de constructor
  const router = Router();

  router.get('', [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)], UserController.getAll);
  // Para proteger la ruta de obtener todos los usuarios, se agrega el
  // middleware (AuthMiddleware) antes del método que resuelve dicha ruta
  router.get('/:userId', UserController.get);
  router.patch('/:userId', UserController.update);
  router.delete('/:userId', UserController.delete);

  return router;
}