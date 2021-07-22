const { User } = require('../loaders/database/sequelize');

class UserRepository {
    constructor() {
    }

    async create(user) {
        return await User.create(user)
    }
}

module.exports = UserRepository;