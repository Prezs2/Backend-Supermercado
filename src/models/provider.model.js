const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Provider = sequelize.define('provider',{
    ProviderID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Phone: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    City: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    tableName: 'providers',
    timestamps: true,
    paranoid: true
})

module.exports = Provider;