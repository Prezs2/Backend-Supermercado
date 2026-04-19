const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Provider = require('./provider.model');

const Product = sequelize.define('product',{
    productid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
            name: 'unique_product_name',
            msg: 'Product name already exists'
        }
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate:{
            notEmpty:{
                msg: 'Price can not be empty'
            },
            min: {
                args:[0.00],
                msg: 'Price must be a positive number'
            },
            len: {
                args: [2, 100],
                msg: 'Product name must be between 2 and 100 characters'
            }
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate:{
            notEmpty:{
                msg: 'Stock can not be empty'
            },
            min: {
                args:[0],
                msg: 'Stock must be a positive number'
            }
        }
    },
    providerid: {
        type: DataTypes.INTEGER,
        allowNull: false
    } 
},{
    tableName: 'products',
    timestamps: true,
    paranoid: true
})

module.exports = Product;