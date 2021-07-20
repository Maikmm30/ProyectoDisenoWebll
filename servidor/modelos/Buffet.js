const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let buffetSchema = new Schema({
    codigo: {
        type: String
    },
    nombre: {
        type: String
    },
    precio: {
        type: Number
    },
    tipoComida: {
        type: String
    },
    unidadMedida: {
        type: String
    },
    restaurante: {
        type: String
    },
    estado: {
        type: Boolean
    }
})

const Buffet = mongoose.model('buffet', buffetSchema);

module.exports = Buffet;