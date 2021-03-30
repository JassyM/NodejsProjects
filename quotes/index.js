const express = require('express');
const server = express();
const { PORT } = require('./config');
const { HomeRoutes, QuotesRoutes } = require('./routes');
const { NotFoundMiddleware } = require('./middlewares');

server.use(express.static('./public')); // middleware
server.use(express.json()); // middleware. Este transforma las peticiones post para manejarlas en formato json.

server.use('/', HomeRoutes);
server.use('/', QuotesRoutes);
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
  console.log(`Application running on PORT ${PORT}`);
});

// MVC