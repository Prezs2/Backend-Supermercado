const {DataTypes}= require('sequelize');
const sequelize = require('../config/database');
const Product = require('./product.model');

const saleDetail = sequelize.define('saleDetail',{
    SaleProductId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    SaleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: {
                args: [1],
                msg: "Quantity must be a positive integer"
            }
        }
    }, 
    Price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
},{
    tableName: 'saleDetail',
    timestamps: true,
    paranoid: true
});

module.exports = saleDetail;