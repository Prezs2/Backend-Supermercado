const sequelize = require('../config/database');
const User = require('./user.model');
const Product = require('./product.model');
const Sale = require('./sale.model');
const saleDetail = require('./saleDetail.model'); 

User.hasMany(Sale, { 
    foreignKey: 'UserId',
    as: 'sales',
    onDelete: 'RESTRICT', 
    onUpdate: 'CASCADE'
});

Sale.belongsTo(User, {
    foreignKey: 'UserId',
    as: 'user'
});

Sale.hasMany(saleDetail, {
    foreignKey: 'SaleId',
    as: 'saleDetails',
    onDelete: 'RESTRICT', 
    onUpdate: 'CASCADE'
});

saleDetail.belongsTo(Sale, {
    foreignKey: 'SaleId',
    as: 'sale'
});

Product.hasMany(saleDetail, {
    foreignKey: 'ProductId',
    as: 'saleDetails',
    onDelete: 'RESTRICT', 
    onUpdate: 'CASCADE'
});

saleDetail.belongsTo(Product, {
    foreignKey: 'ProductId',
    as: 'product'
});

Product.belongsToMany(Sale, {
    through: saleDetail,
    foreignKey: 'ProductId',
    otherKey: 'SaleId',
    as: 'sales'
});

Sale.belongsToMany(Product, {
    through: saleDetail,
    foreignKey: 'SaleId',
    otherKey: 'ProductId',
    as: 'products'
});

module.exports = {
    sequelize,
    User,
    Product,
    Sale,
    saleDetail
};