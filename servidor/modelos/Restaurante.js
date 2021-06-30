const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let restauranteSchema = new Schema({
    codigo: {
        type: String
    },
    nombre: {
        type: String
    },
    direccion: {
        type: String
    },
    especialidad: {
        type: String
    },
    cantidadClientes: {
        type: Number
    },
    telefono: {
        type: String
    },
    estado: {
        type: String
    }
})

const Restaurante = mongoose.model('restaurante', restauranteSchema);

module.exports = Restaurante;