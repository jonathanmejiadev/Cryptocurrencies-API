const { DataTypes } = require('sequelize');
const sequelize = require('../loaders/database/sequelize');

const User = sequelize.define('User', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    prefCurrency: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cryptos: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = User;