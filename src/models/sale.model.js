const {DataTypes}= require('sequelize');
const sequelize = require('../config/database');

const Sale = sequelize.define('sale',{
    SaleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    saleDate:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        validate:{
            isDate:{
                msg: 'Sale date must be a valid date'
            }
        }
    },
    TotalAmount: {
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
    tableName: 'sale',
    timestamps: true,
    paranoid: true  
});

module.exports = Sale;