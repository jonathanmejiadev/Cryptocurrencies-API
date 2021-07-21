'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [
        {
          username: 'Jhon_Doe',
          email: 'jhon@doe.com',
          password: '123456',
          prefCurrency: 'usd',
          avatar: null
        },
        {
          username: 'Jose_Doe',
          email: 'jose@doe.com',
          password: '123456',
          prefCurrency: 'ars',
          cryptos: ['dogecoin'],
          avatar: null
        }
      ]
      , {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
