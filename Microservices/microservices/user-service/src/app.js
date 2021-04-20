const express = require('express');
const app = express();

const response = {
  data: [],
  services: 'User service',
  architecture: 'Microservices'
};

const logger = (message) => console.log(`[User Service]: ${message}`);

// Middleware
app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get('/api/v2/users', (req, res) => {
  response.data.push('Pedro', 'María', 'Tomás', 'Luisa');
  logger('Get user data');
  return res.send(response);
});

module.exports = app;
