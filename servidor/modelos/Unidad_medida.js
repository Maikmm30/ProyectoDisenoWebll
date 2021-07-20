const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let unidadMedidaSchema = new Schema({
  codigo: {
    type: String
  },
  unidadmedida: {
    type: String
  },
  escala: {
    type: String
  },
  detalle:{
      type: Boolean
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

const UnidadMedida =  mongoose.model('unidadMedida',unidadMedidaSchema);

module.exports = UnidadMedida;