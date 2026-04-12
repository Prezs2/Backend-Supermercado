const sequelize = require('../config/database');
require('../models/index');

class DatabaseSync{
    static async sync() {
        try{
            await sequelize.authenticate()
                .then(()=> {
                    console.log('Database connection established successfull');
                })
                .catch((error) => { 
                    console.error('Unable to connect to the database: ', error);
                });

            await sequelize.sync({ alter: false });
            console.log('Database synchronized successfully');
            
        } catch (error) {
            console.error('Error synchronizing the database: ', error);
        }
    }
}

module.exports = DatabaseSync;