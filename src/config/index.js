require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3001,
    prefix: '/v1',
    log: {
        level: process.env.LOG_LEVEL
    },
    db: {
        postgres: {
            development: {
                dbName: process.env.POSTGRES_DB_DEVELOPMENT,
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                host: 'localhost'
            },
            test: {
                dbName: process.env.POSTGRES_DB_TEST,
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                port: process.env.POSTGRES_TEST_PORT,
                host: 'localhost'
            },
            production: {
                dbName: '',
                user: '',
                password: '',
                host: 'localhost'
            }
        }
    },

};