const { Product } = require('../models');

class ProductService {
    
    static async getAllProducts() {
        return await Product.findAll({
            order: [['ProductID', 'DESC']],
        });
    }

    static async getProductById(id) {
        const product = await Product.findByPk(id);

        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    }

    static async createProduct(productData) {
        const { name, price, stock } = productData;
        const existingProduct = await Product.findOne({ where: { name } });

        if (existingProduct) {
            throw new Error('Product already exists');
        }

        const product = await Product.create({ name, price, stock });
        const createProduct = product.toJSON();

        return createProduct;
    }

    static async updateProduct(id, ProductData){
        const Product = await Product.findByPk(id);

        if(!Product) {
            throw new Error('Product not found');
        }

        const { price, stock } = ProductData;
        const product = await Product.update({ price, stock });

        const updatedProduct = product.toJSON();
        return updatedProduct;
    }

    static async deleteProduct(id){
        const Product = await Product.findByPk(id);

        if(!Product) {
            throw new Error('Product not found');
        }

        await Product.destroy({ force: true });
        return { message: 'Product deleted successfully' };
    }

}

module.exports = ProductService;