const UserRepository = require('../repositories/auth');

const userRepo = new UserRepository();

class AuthService {
    constructor() {

    }

    async register(user) {
        try {
            return await userRepo.create(user)

        } catch (err) {
            throw err;
        }
    }
}

module.exports = AuthService;