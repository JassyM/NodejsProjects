const router = require('express').Router(); // singleton. Va a ser la misma instancia
const { HomeController } = require('../controllers');

router.get('/', HomeController.index); // Se llama index sin ejecutar, ya que express se encarga de esto.
router.get('/about', HomeController.about);

module.exports = router; // Se exporta