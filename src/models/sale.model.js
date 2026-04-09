const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');

const Sale = sequelize.define('sale',{
    SaleID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Date: {
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

exports = module.exports = Sale;