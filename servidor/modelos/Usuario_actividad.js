const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usuarioActividadSchema = new Schema({
    codigo: {
        type: String
    },
    codigo_usuario: {
        type: String
    },
    fecha: {
        type: date
    },
    descripcion: {
        type: String
    }
})

const UsuarioActividad = mongoose.model('usuarioActividad', usuarioActividadSchema);

module.exports = UsuarioActividad;