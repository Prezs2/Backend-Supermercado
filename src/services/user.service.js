const bcrypt = require('bcrypt');
const { User } = require('../models');

class UserService {
    static async getAllUsers() {
        return await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['firstName', 'ASC']]
        });
    }

    static async getUserById(id) {
        const user = await User.findByPk(id, {
            attributes: { exclude: ['password'] }
        });

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }

    static async createUser(userData) {
        const { firstName, lastName, email, idNumber } = userData;
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            throw new Error('Email already exists');
        }
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = await User.create({
            idNumber,
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        const createdUser = user.toJSON();
        delete createdUser.password;

        return createdUser;
    }

    static async updateUser(id, userData) {
        const user = await User.findByPk(id);

        if (!user) {
            throw new Error('User not found');
        }

        const { firstName, lastName, email } = userData;
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        await user.update({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        const updatedUser = user.toJSON();
        delete updatedUser.password;

        return updatedUser;
    }

    static async deleteUser(id) {
        const user = await User.findByPk(id);   

        if (!user) {
            throw new Error('User not found');
        }

        await user.destroy();

        return { message: 'User deleted successfully' };
    }

    static async login(email, password) {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error('Invalid email or password');
        }

        const loginUser = user.toJSON();
        delete loginUser.password;

        return loginUser;
    }
}

module.exports = UserService;