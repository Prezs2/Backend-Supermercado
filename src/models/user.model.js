const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user',{
    userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
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
    rol: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    tableName: 'users',
    timestamps: true,
    paranoid: true
})

module.exports = User;