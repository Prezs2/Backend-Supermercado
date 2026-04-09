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
        allowNull: false,
        unique: {
            name: 'unique_email',
            msg: 'Email already exists'
        },
        validate: {
            isEmail: true,
            notEmpty:{
                msg: 'Email can not be empty'
            },
            len:{
                args:[5, 100],
                msg: 'Email must be between 5 and 100 characters'
            }
        }
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