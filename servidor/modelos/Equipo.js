const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let equipoSchema = new Schema({
    codigo: {
        type: String
    },
    nombre: {
        type: String
    },
    cantidad: {
        type: Number
    },
    restaurante: {
        type: String
    },
    marca: {
        type: String
    },
    descripcion: {
        type: String
    },
    estado : {
        type: Boolean
    }
})

const Equipo = mongoose.model('equipo', equipoSchema);

module.exports = Equipo;