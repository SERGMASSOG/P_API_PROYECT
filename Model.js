const mongoose = require('mongoose');

// Definir el esquema
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  clave: { type: String, required: true }
});

// Crear el modelo
const Usuario = mongoose.model('usuario', usuarioSchema);

module.exports = Usuario;
