const { CRUD } = require('./helpers');
const db = require('./models');

const params = process.argv; // Para capturar parámetros por consola.
// Ej: node . --create:Contact --firstname=Maria

if(params.length <= 2) { // si no hay más de 2 comandos que salga del programa
  process.exit(0); // Rompe el flujo del programa
}

const args = params.slice(2) // Se almacena los argumentos mediante slice, 
// a partir de la segunda posición de params
// node . --create:Contact --firstname=Maria => --create:Contact --firstname=Maria

const command = args[0].split(':')[0].substring(2);
// Ej: --create:Contact --firstname=Maria
// Divide args donde encuentre ":" en 2 elementos de un array.
// --create:Contact --firstname=Maria => [--create, Contact --firstname=Maria]
// Luego toma el elemento 0 y le elimina los dos primeros caracteres
// --create  => create

const entity = args[0].split(':')[1];
// Divide args donde encuentre ":" en 2 elementos de un array y toma el elemento 1: --firstname=Maria
const data = {};
args.slice(1).forEach((arg) => { // Se elimina el elemento 0 de args, ya que en 1 están los parámetros.
  const tmp = arg.split('='); // --firstname=Maria => [--firstname, Maria]
  data[tmp[0].substring(2)] = tmp[1];
});

switch(command) {
  case CRUD.CREATE:
    db[entity]
      .create(data)
      .then(() => console.log('Contact created: ', data))
      .catch(console.log);
    break;
  case CRUD.READ:
    db[entity].findAll().then(console.log).catch(console.log);
    break;
  case CRUD.UPDATE:
    if (data.hasOwnProperty('id')) {
      db[entity]
      .update(data, { where: {
        id: data.id
      }})
      .then(console.log)
      .catch(console.log);
    } else {
      console.log('The id is required');
    }
    break;
  case CRUD.DELETE:
    if (data.hasOwnProperty('id')) {
      db[entity]
      .destroy({ where: {
        id: data.id
      }})
      .then(console.log)
      .catch(console.log);
    } else {
      console.log('The id is required');
    }
    break;
  default:
    console.log('Operation not found!');
}