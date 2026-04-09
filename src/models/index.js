const sequelize = require('../config/database');
const User = require('./User');
const Product = require('./Product');
const Provider = require('./Provider');
const Sale = require('./Sale');
const detailSale = require('./detailSale');


User.hasMany(Sale, {
    foreignKey: 'userId',
    as: 'sales',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});

Sale.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

Provider.hasMany(Product, {
    foreignKey: 'providerId',
    as: 'products',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});

Product.belongsTo(Provider, {
    foreignKey: 'providerId',
    as: 'provider'
});

Sale.hasMany(detailSale, {
    foreignKey: 'saleId',
    as: 'detailSales',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});

detailSale.belongsTo(Sale, {
    foreignKey: 'saleId',
    as: 'sale'
});

Product.hasMany(detailSale, {
    foreignKey: 'productId',
    as: 'detailSales',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});

detailSale.belongsTo(Product, {
    foreignKey: 'productId',
    as: 'product'
});

Product.belongsToMany(Sale, {
    through: detailSale,
    foreignKey: 'productId',
    otherKey: 'saleId',
    as: 'sales'
});

Sale.belongsToMany(Product, {
    through: detailSale,
    foreignKey: 'saleId',
    otherKey: 'productId',
    as: 'products'
});

module.exports = {
    sequelize,
    User,
    Product,
    Provider,
    Sale,
    detailSale
};