const express = require('express');
const app = express();

const response = {
  data: [],
  services: 'Book service',
  architecture: 'Microservices'
};

const logger = (message) => console.log(`[Book Service]: ${message}`);

// Middleware
app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get('/api/v2/books', (req, res) => {
  response.data.push('The clean coder', 'El bosón de Higgs no te va a hacer la cama', 'JavaScript');
  logger('Get book data');
  return res.send(response);
});

module.exports = app;
