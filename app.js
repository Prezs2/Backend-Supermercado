const express = require('express');
const {sequelize} = require('./src/config/database');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})

sequelize.authenticate()
    .then(()=> {
        console.log('Database connection established successfully');
    })
    .catch((error) => { 
        console.error('Unable to connect to the database: ', error);
    });