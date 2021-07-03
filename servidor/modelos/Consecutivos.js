const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let consecutivoSchema = new Schema({
  codigo: {
    type: String
  },
  tipo: {
    type: String
  },
  descripcion: {
    type: String
  }, nombre: {
    type: String
  },
  valorConsecutivo: {
    type: String
  },
  contienePrefijo: {
    type: bool
  },
  prefijo: {
    type: String
  },
  estado:{
      type: bool
  }
})

const Consecutivo =  mongoose.model('consecutivos',consecutivoSchema);

module.exports = Consecutivo;