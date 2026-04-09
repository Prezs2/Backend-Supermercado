const { Provider } = require('../models');

class ProviderService {
    static async getAllProviders() {
        return await Provider.findAll({
            order: [['ProviderID', 'DESC']],
        });
    }

    static async getProviderById(id) {
        const Provider = await Provider.findByPk(id);

        if(!Provider) {
            throw new Error('Provider not found');
        }

        return Provider;
    }

    static async createProvider(ProviderData){
        const { name, phone, email, city } = ProviderData;
        const existingProvider = await Provider.findOne({ where: { email } });

        if(existingProvider){
            throw new Error('Email already exists');
        }

        const createProvider = Provider.toJSON();
        return createProvider;
    }

    static async updateProvider(id, ProviderData){
        const Provider = await Provider.findByPk(id);

        if(!Provider) {
            throw new Error('Provider not found');
        }

        const { name, phone, city } = ProviderData;
        await Provider.update({ name, phone, city });

        const updatedProvider = Provider.toJSON();
        return updatedProvider;
    }

    static async deleteProvider(id){
        const Provider = await Provider.findByPk(id);

        if(!Provider) {
            throw new Error('Provider not found');
        }

        await Provider.destroy();
        return { message: 'Provider deleted successfully' };
    }
}

module.exports = ProviderService;