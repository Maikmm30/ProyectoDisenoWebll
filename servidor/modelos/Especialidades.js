const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let especialidadesSchema = new Schema({
    codigo: {
        type: String
    },
    nombre: {
        type: String
    },
    ingredientes: {
        type: String
    },
    precio: {
        type: Number
    },
    detalle: {
        type: String
    },
    restaurante: {
        type: String
    },estado: {
        type: String
    }
})

const Especialidades = mongoose.model('especialidades', especialidadesSchema);

module.exports = Especialidades;