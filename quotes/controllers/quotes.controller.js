const path = require('path');
const DB_PATH = path.join(__dirname + '/../data/db.json');
let db = require(DB_PATH);
const fs = require('fs'); // Para leer los archivos

function render(file, res) {
  return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class QuotesController {
  async index(req, res) {
    return render('quotes', res);
  }

  async get(req, res) {
    return res.send(db);
  }

  async add(req, res) {
    const { body: quote } = req; // Del request, cuando se hace uso del middleware del json,
    // hay una propiedad que se agrega en el body: quote.
    const lastQuotes = db[db.length - 1]; // Se obtiene el último quote agregado para realizar simulación de autoincremento de ids
    const { id } = lastQuotes; // Se saca el id del lastQuotes
    quote.id = id + 1; // Se agrega la propiedad id a quote
    db.push(quote); // Al array de bd donde están los quotes se hace agrea el nuevo quote
    fs.writeFileSync(DB_PATH, JSON.stringify(db)); // Se escribe en el archivo db.json
    return res.status(201).send(); // Se retorna el estatus 201.
  }
}

module.exports = new QuotesController();