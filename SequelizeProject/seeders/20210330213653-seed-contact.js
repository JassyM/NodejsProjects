'use strict';

module.exports = {
  // Lo que esté dentro del UP se va a ejecutar en la base de datos
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // bulkInsert(nombre de la tabla a realizar inserción, [array de objetos que se quieren insertar])
    return queryInterface.bulkInsert('Contacts', [
      {
        firstname: 'Maribel',
        lastname: 'Jaramillo',
        phone: '1234567',
        email: "maribel@example.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstname: 'Pedro',
        lastname: 'Torres',
        phone: '1111111',
        email: "pedro@example.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
    ])

  },

  // Si se ejecuta Down, Se va a deshacer lo realizado con anterioridad en la base de datos
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
