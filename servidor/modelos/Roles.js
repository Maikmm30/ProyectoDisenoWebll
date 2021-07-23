const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let rolSchema = new Schema({
  codigo: {
    type: String
  },
  nombre: {
    type: String
  },
  descripcion: {
    type: String
  },
  estado:{
      type: Boolean
  }

})

const Rol =  mongoose.model('rol',rolSchema, 'rol');

module.exports = Rol;