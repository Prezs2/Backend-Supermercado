const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();

/** 
 * @swagger 
 * tags: 
 *  name: Users
 *  description: API for managing users
 */

/** 
 * @swagger
 * /api/users:
 *  get: 
 *     summary: Retrieve a list of users
 *     tags: [Users]
 *     responses:
 *       200:
 *        description: Users retrieved successfully
 */
router.get('/users', UserController.getAllUsers);

/** 
 * @swagger
 * /api/user/{id}:
 *  get:
 *     summary: Retrieve a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *        description: User retrieved successfully
 *       404:
 *        description: User not found
 */
router.get('/user/:id', UserController.getUserById);

/** 
 * @swagger
 * /api/user/create:
 *  post:
 *     summary: Create a new user
 *     tags: [Users]
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
 *        description: User created successfully
 */
router.post('/user/create', UserController.createUser);

/** 
 * @swagger
 * /api/user/update/{id}:
 *  put:
 *     summary: Update a user by ID
 *     tags: [Users]
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
 *        description: User updated successfully
 */
router.put('/user/update/:id', UserController.updateUser);

/** 
 * @swagger
 * /api/user/delete/{id}:
 *  delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *        description: User deleted successfully
 */ 
router.delete('/user/delete/:id', UserController.deleteUser);

module.exports = router;