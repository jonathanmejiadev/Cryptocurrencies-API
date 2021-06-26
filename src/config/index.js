module.exports = {
    PORT: process.env.PORT || 3001,
    prefix: '/v1',
    log: {
        level: process.env.LOG_LEVEL
    },
    db: {
        postgres: {
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD
        }
    },

};