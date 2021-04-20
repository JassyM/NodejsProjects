const express = require('express');
const app = express();

const response = {
  data: [],
  services: 'Monolithic service',
  architecture: 'Monolithic'
};

// Middleware
app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get('/api/v1/users', (req, res) => {
  response.data.push('Maribel', 'José', 'Sara');
  return res.send(response);
});

app.get('/api/v1/books', (req, res) => {
  response.data.push('The clean coder', 'El bosón de Higgs no te va a hacer la cama', 'El gen egoísta');
  return res.send(response);
});

app.get('/api/v1/cars', (req, res) => {
  response.data.push('Ferrari', 'Fiat', 'BMW');
  return res.send(response);
});

module.exports = app;
