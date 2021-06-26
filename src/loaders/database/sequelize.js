const { Sequelize } = require('sequelize');
const config = require('../../config');

const sequelize = new Sequelize(
    'cryptoapp',
    config.db.postgres.user,
    config.db.postgres.password,
    {
        host: 'localhost',
        dialect: 'postgres',
        logging: false
    }
);

module.exports = sequelize;