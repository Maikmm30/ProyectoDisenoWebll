const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let empleadoSchema = new Schema({
  codigo: {
    type: String
  },
  cedula: {
    type: String
  },
  nombre: {
    type: String
  },
  primerApellido:{
      type: String
  },
  segundoApellido:{
    type: String
  },
  telefono1:{
    type: Number
  },
  telefono2:{
    type: Number
  },
  puesto:{
    type: String
  },
  nacionalidad:{
    type: String
  },
  restaurante:{
    type: String
  },
  estado:{
    type: Boolean
}})

const Empleado =  mongoose.model('empleado',empleadoSchema,'empleado');

module.exports = Empleado;