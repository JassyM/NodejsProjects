const { Router } = require('express');

module.exports = function({ UserController }) { // function hace de constructor
  const router = Router();

  router.get('', UserController.getAll);
  router.get('/:userId', UserController.get);
  router.patch('/:userId', UserController.update);
  router.delete('/:userId', UserController.delete);

  return router;
}