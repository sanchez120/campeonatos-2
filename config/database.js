const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err.message);
    process.exit(1); // Detener la aplicación si hay un error de conexión
  }
};

module.exports = connectDB;