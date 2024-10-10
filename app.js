const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Crear una instancia de Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB conectado'))
    .catch((err) => console.log('Error conectando a MongoDB:', err));

// Rutas de ejemplo (puedes crear más)
app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

// Puerto en el que correrá el servidor
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});