const express = require('express');
const swaggerUi = require('swagger-ui-express');
const DatabaseSync = require('./src/config/sync');
const swaggerSpec = require('./src/config/swagger');

const userRoutes = require('./src/routes/user.routes');
const productRoutes = require('./src/routes/product.routes');
const providerRoutes = require('./src/routes/provider.routes');

const app = express();
const PORT = 3000;

if(process.env.NODE_ENV === 'development') {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', providerRoutes);

app.get('/', (req, res) => {
    res.send('Server is running successfully')
})


async function startServer() {
    try{
        await DatabaseSync.sync();

        app.listen(PORT, () =>{
            console.log(`Server running at http://localhost:${PORT}`)
        });

    } catch (error) {
        console.error('Error starting the server: ', error);
    }
}

startServer();