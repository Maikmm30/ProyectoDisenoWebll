const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bitacoraSchema = new Schema({
    codigo: {
        type: String
    },
    usuario: { //La persona que realiza la actividad
        type: String
    },
    rol_usuario: {
        type: String
    },
    fecha: {
        type: String
    },
    descripcion: {
        type: String
    }
})

const Bitacora = mongoose.model('bitacora', bitacoraSchema, 'bitacora');

module.exports = Bitacora;