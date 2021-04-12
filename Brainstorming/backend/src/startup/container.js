const { createContainer, asClass, asValue, asFunction } = require('awilix');

// Config
const config = require('../config');
const app = require('.');

// Services
const { 
  HomeService,
  UserService,
  IdeaService,
  CommentService
} = require('../services');

// Controllers
const { HomeController } = require('../controllers');

// Routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

// Models
const { User, Idea, Comment } = require('../models');

// Repositories
const { UserRepository, IdeaRepository, CommentRepository } = require('../repositories');

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({ // Crea una nueva clase de inyección
    HomeService: asClass(HomeService).singleton(),
    // HomeService es el key con el que se va a identificar la inyección
    // y lo que va a inyectar.
    // Se va a inyectar una clase: HomeService, como un singleton.
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton()
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
    // Se agrega el método bind porque Express al momento de llamar un controlador
    // el scope cambia. El scope que se pone es el de Express
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
  });

module.exports = container;