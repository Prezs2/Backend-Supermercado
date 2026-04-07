const { DataTypes }= require('sequelize');
const sequelize = require('../config/database');

const Supplier = sequelize.define('Supplier', {
    SupplierId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    SupplierName:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
            name: 'unique_supplier_name',
            msg: 'Supplier name already exists'
        },
        validate: {
            notEmpty: {
                msg: 'Supplier name can not be empty'
            },
            len: {
                args: [2, 100],
                msg: 'Supplier name must be between 2 and 100 characters'
            }
        }
    },
    Phone: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
            name: 'unique_email_name',
            msg: 'Email already exists'
        },
        validate: {
            notEmpty: {
                msg: 'Email can not be empty'
            },
            len: {
                args: [2, 100],
                msg: 'Email must be between 2 and 100 characters'
            }
        }
    },
    City: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
},{
    tableName: 'supplier',
    timestamps: true,
    paranoid: true
});

module.exports = Supplier;