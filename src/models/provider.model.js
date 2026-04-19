const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Provider = sequelize.define('provider',{
    providerid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    email: {
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
    city: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    tableName: 'providers',
    timestamps: true,
    paranoid: true
})

module.exports = Provider;