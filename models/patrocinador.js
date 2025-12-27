const mongoose = require('mongoose');

const patrocinadorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // asegura que no se repitan correos
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  },
  password: {
    type: String,
    required: true,
    minlength: 8 // adicional a la validación del lado del cliente
  },
  consentimiento: {
    type: Boolean,
    required: true
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Patrocinador', patrocinadorSchema);
