const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usuarioActividadSchema = new Schema({
   codigo:{
       type: String
   },
    descripcion: {
        type: String
    }
})

const UsuarioActividad = mongoose.model('usuarioActividad', usuarioActividadSchema, 'usuarioActividad');

module.exports = UsuarioActividad;