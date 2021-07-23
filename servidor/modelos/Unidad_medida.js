const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let unidadMedidaSchema = new Schema({
  codigo: {
    type: String
  },
  unidadMedida: {
    type: String
  },
  escala: {
    type: String
  },
  detalle:{
      type: String
  },
  simbologia:{
    type: String
  },
  simbolo:{
    type: String
  },
  estado:{
    type: Boolean
}})

const UnidadMedida =  mongoose.model('unidadMedida',unidadMedidaSchema,'unidadMedida');

module.exports = UnidadMedida;