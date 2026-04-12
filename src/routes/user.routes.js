const express = require('express');
const UserController = require('../controller/user.controller');

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
router.get('/', UserController.getAllUsers);

/** 
 * @swagger
 * /api/users/{id}:
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
router.get('/:id', UserController.getUserById);


/** 
 * @swagger
 * /api/users:
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
 *               - Phone
 *               - Email
 *               - Role
 *             properties:
 *               idNumber:
 *                 type: string
 *                 example: 123456789
 *               firstName:
 *                 type: string
 *                 example: Natalia
 *               lastName:  
 *                 type: string
 *                 example: Castellanos
 *               email:
 *                 type: string
 *                 example: natalia.castellanos@example.com
 *               password:
 *                 type: string
 *                 example: securePassword123
 *     responses:
 *       201:
 *        description: User created successfully
 */
router.post('/', UserController.createUser);