const express = require('express');
const ProductController = require('../controllers/product.controller');

const router = express.Router();

/** 
 * @swagger 
 * tags: 
 *  name: Products
 *  description: API for managing Products
 */

/** 
 * @swagger
 * /api/Products:
 *  get: 
 *     summary: Retrieve a list of Products
 *     tags: [Products]
 *     responses:
 *       200:
 *        description: Products retrieved successfully
 */
router.get('/', ProductController.getAllProducts);

/** 
 * @swagger
 * /api/Products/{id}:
 *  get:
 *     summary: Retrieve a Product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *        description: Product retrieved successfully
 *       404:
 *        description: Product not found
 */
router.get('/:id', ProductController.getProductById);

/** 
 * @swagger
 * /api/Products:
 *  post:
 *     summary: Create a new Product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Name
 *               - Email
 *               - Rol
 *             properties:
 *               Name:
 *                 type: string
 *                 example: juan prueba
 *               Email:
 *                 type: string
 *                 example: juan.prueba@example.com
 *               Rol:  
 *                 type: string
 *                 example: Empleado
 *     responses:
 *       201:
 *        description: Product created successfully
 */
router.post('/', ProductController.createProduct);

/** 
 * @swagger
 * /api/Products/{id}:
 *  put:
 *     summary: Update a Product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *                 example: Natalia
 *               Rol:
 *                type: string,
 *                example: Administrador
 *     responses:
 *       200:
 *        description: Product updated successfully
 */
router.put('/:id', ProductController.updateProduct);

/** 
 * @swagger
 * /api/Products/{id}:
 *  delete:
 *     summary: Delete a Product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *        description: Product deleted successfully
 */ 
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;