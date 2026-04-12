const ProductService = require('../services/product.service');

class ProductController {
    static async getAllProducts(req, res){
        try{
            const Products = await ProductService.getAllProducts();

            return res.status(200).json({
                mesage: 'Products retrieved successfully',
                data: Products
            });
        } catch(error){
            return res.status(500).json({
                message: error.message
            });
        }    
    }

    static async getProductById(req, res){
        try {
            const { id } = req.params;
            const Product = await ProductService.getProductById(id);

            return res.status(200).json({
                message: 'Product retrieved successfully',
                data: Product
            });

        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }

    static async createProduct(req, res) {
        try {
            const productData = req.body;
            const newProduct = await ProductService.createProduct(productData);
            return res.status(201).json({
                message: 'Product created successfully',
                data: newProduct
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }

    static async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const productData = req.body;
            const updatedProduct = await ProductService.updateProduct(id, productData);

            return res.status(200).json({
                message: 'Product updated successfully',
                data: updatedProduct
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const result = await ProductService.deleteProduct(id);    
            return res.status(200).json({
                message: result.message
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }   
    }
}

module.exports = ProductController;