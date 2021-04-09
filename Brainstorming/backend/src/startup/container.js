const { createContainer, asClass, asValue, asFunction } = require('awilix');

// Config
const config = require('../config');
const app = require('.');

// Services
const { HomeService } = require('../services');

// Controllers
const { HomeController } = require('../controllers');

// Routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');


const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({ // Crea una nueva clase de inyección
    HomeService: asClass(HomeService).singleton()
    // HomeService es el key con el que se va a identificar la inyección
    // y lo que va a inyectar.
    // Se va a inyectar una clase: HomeService, como un singleton.
  }).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
    // Se agrega el método bind porque Express al momento de llamar un controlador
    // el scope cambia. El scope que se pone es el de Express
  }).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
  });

module.exports = container;