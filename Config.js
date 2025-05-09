const mongoose = require('mongoose');

// Función para conectar a la base de datos de MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(//"url_mongo", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexión exitosa a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1); // Salir del proceso si no se puede conectar
  }
};

module.exports = connectDB; // Exportar la función de conexión para usarla en otros archivos
