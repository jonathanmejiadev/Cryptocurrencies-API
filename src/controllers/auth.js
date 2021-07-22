const AuthService = require('../services/auth');

const authService = new AuthService();

const register = (req, res) => {
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
        res.status(201).json({ sucess: true, data: savedUser });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err })
    }
};

module.exports = {
    register
};