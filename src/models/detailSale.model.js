const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./product.model');
const Sale = require('./sale.model');

const DetailSale = sequelize.define('detail_sale',{
    detailSaleID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    saleID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
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
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: {
                args: [0.00],
                msg: "Price must be a positive number"
            }
        }
    }
},{
    tableName: 'detail_sales',
    timestamps: true,
    paranoid: true
})

module.exports = DetailSale;