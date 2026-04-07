const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
    UserId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    IdNumber: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique:{
            name: 'unique_id_number',
            msg: 'Identification number already exists'
        },
        validate:{
            notEmpty:{
                msg: 'Identification number can not be empty'
            },
            len:{
                args: [8, 15],
                msg: 'Identification number must be between 8 and 15 characters'
            }
        }
    },
    FirstName:{
        type:DataTypes.STRING(45),
        allowNull: false,
        validate: {
            notEmpty:{
                msg:'First name can not be empty'
            },
            len:{
                args: [1, 45],
                msg: 'First name must be between 1 and 45 characters'
            }
        }
    },
    LastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Last name can not be empty'
            },
            len: {
                args: [4, 100],
                msg: 'Last name must be between 4 and 100 characters'
            }
        }    
    },
    Email: {
        type: DataTypes.STRING,
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
    Password: {
        type: DataTypes.STRING, 
        allowNull: false,
        validate:{
            notEmpty: {
                msg: 'Password can not be empty'
            },
            len:{
                args: [8, 100],
                msg: 'Password must be 8 characters'
            }
        }
    }
},{
    tableName: 'user',
    timestamps: true,
    paranoid: true
});

module.exports = User;