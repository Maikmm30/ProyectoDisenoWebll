const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let empaqueSchema = new Schema({
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

const Empaque = mongoose.model('empaque', empaqueSchema,'empaque');

module.exports = Empaque;