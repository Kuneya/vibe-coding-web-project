const mongoose = require('mongoose');

const deportistaSchema = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  fecha_nacimiento: Date,
  pais: String,
  disciplina: String,
  email: String,
  password: String,
  logros: String,
  portafolio: String,
  objetivos: String,
  preferencias: String,
  referencias: String,
  consentimiento: Boolean
});

module.exports = mongoose.model('Deportista', deportistaSchema);
