const { DataTypes }= require('sequelize');
const sequelize = require('../config/database');
const Supplier = require('./supplier.model');

const Product = sequelize.define('product',{
    ProductId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ProductName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
            name: 'unique_product_name',
            msg: 'Product name already exists'
        },
        validate: {
            notEmpty: {
                msg: 'Product name can not be empty'
            },
            len: {
                args: [2, 100],
                msg: 'Product name must be between 2 and 100 characters'
            }
        }
    },
    ProductDescription: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    ProductPrice: {
        type:DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Product price can not be empty'
            },
            isDecimal: {
                msg: 'Product price must be a decimal number'
            },
            min: {
                args: [100.00],
                msg: 'Product price must be at least 100.00'
            }
        }
    },
    Stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: {
                args: [1],
                msg: "Quantity must be a positive integer"
            }
        }
    },
    SupplierId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    tableName: 'product',
    timestamps: true,
    paranoid: true
});

module.exports = Product;