const config = require('../../config');

module.exports = {
  development: {
    username: config.db.postgres.development.user,
    password: config.db.postgres.development.password,
    database: config.db.postgres.development.dbName,
    host: config.db.postgres.development.host,
    dialect: 'postgres',
    logging: false
  },
  test: {
    username: config.db.postgres.test.user,
    password: config.db.postgres.test.password,
    database: config.db.postgres.test.dbName,
    host: config.db.postgres.test.host,
    port: config.db.postgres.test.port,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: config.db.postgres.production.user,
    password: config.db.postgres.production.password,
    database: config.db.postgres.production.dbName,
    host: config.db.postgres.production.host,
    dialect: 'postgres',
    logging: false
  },
};