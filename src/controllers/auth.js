const AuthService = require('../services/auth');

const authService = new AuthService();

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let newUser = {
            username,
            email,
            password,
            prefCurrency: 'usd',
            cryptos: [],
            avatar: null
        };
        const savedUser = await authService.register(newUser);
        return res.status(201).json({ success: true, data: savedUser });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: err })
    }
};

module.exports = {
    register
};