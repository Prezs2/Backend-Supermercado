const express = require('express');
const ProviderController = require('../controllers/provider.controller');

const router = express.Router();

/** 
 * @swagger 
 * tags: 
 *  name: Providers
 *  description: API for managing Providers
 */

/** 
 * @swagger
 * /api/Providers:
 *  get: 
 *     summary: Retrieve a list of Providers
 *     tags: [Providers]
 *     responses:
 *       200:
 *        description: Providers retrieved successfully
 */
router.get('/Providers', ProviderController.getAllProviders);

/** 
 * @swagger
 * /api/provider/{id}:
 *  get:
 *     summary: Retrieve a Provider by ID
 *     tags: [Providers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *        description: Provider retrieved successfully
 *       404:
 *        description: Provider not found
 */
router.get('/provider/:id', ProviderController.getProviderById);

/** 
 * @swagger
 * /api/providers/create:
 *  post:
 *     summary: Create a new Provider
 *     tags: [Providers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Name
 *               - Phone
 *               - Email
 *               - City
 *             properties:
 *               Name:
 *                 type: string
 *                 example: juan prueba
 *               Phone:  
 *                 type: string
 *                 example: 3108914432
 *               Email:
 *                 type: string
 *                 example: juan.prueba@example.com
 *               City:  
 *                 type: string
 *                 example: Bogotá
 *     responses:
 *       201:
 *        description: Provider created successfully
 */
router.post('/provider/create', ProviderController.createProvider);

/** 
 * @swagger
 * /api/provider/update/{id}:
 *  put:
 *     summary: Update a Provider by ID
 *     tags: [Providers]
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
 *               Phone:
 *                type: string,
 *                example: Administrador
 *               City:
 *                type: string,
 *                example: Medellín
 *     responses:
 *       200:
 *        description: Provider updated successfully
 */
router.put('/provider/update/:id', ProviderController.updateProvider);

/** 
 * @swagger
 * /api/provider/delete/{id}:
 *  delete:
 *     summary: Delete a Provider by ID
 *     tags: [Providers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *        description: Provider deleted successfully
 */ 
router.delete('/provider/delete/:id', ProviderController.deleteProvider);

module.exports = router;