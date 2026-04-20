const { User } = require('../models');

class UserService {
    static async getAllUsers() {
        return await User.findAll({
            order: [['userid', 'DESC']],
        });
    }

    static async getUserById(id) {
        const user = await User.findByPk(id);

        if(!user) {
            throw new Error('User not found');
        }

        return user;
    }

    static async createUser(userData){
        const { name, email, rol } = userData;
        const existingUser = await User.findOne({ where: { email } });

        if(existingUser){
            throw new Error('Email already exists');
        }

        const user = await User.create({
            name,
            email,
            rol
        });

        const createdUser = user.toJSON();
        return createdUser;
    }

    static async updateUser(id, userData){
        const user = await User.findByPk(id);

        if(!user) {
            throw new Error('User not found');
        }

        const { name, email, rol } = userData;
        await user.update({ name, email, rol });

        const updatedUser = user.toJSON();
        return updatedUser;
    }

    static async deleteUser(id){
        const user = await User.findByPk(id);

        if(!user) {
            throw new Error('User not found ' + id);
        }

        await user.destroy({ force: true });
        return { message: 'User deleted successfully' };
    }
}

module.exports = UserService;