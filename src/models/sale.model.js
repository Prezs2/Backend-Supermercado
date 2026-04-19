const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');

const Sale = sequelize.define('sale',{
    saleid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        validate:{
            isDate:{
                msg: 'Sale date must be a valid date'
            }
        }
    },
    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
        validate:{
            min: {
                args:[0.00],
                msg: 'Total amount must be a positive number'
            },
        }
    }
},{
    tableName: 'sales',
    timestamps: true,
    paranoid: true
})

module.exports = Sale;