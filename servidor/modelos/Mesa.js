const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mesaSchema = new Schema({
    codigo: {
        type: String
    },
    nombre: {
        type: String
    },
    numero: {
        type: Number
    },
    cantidadSillas: {
        type: Number
    },
    restaurante: {
        type: String
    },
    estado: {
        type: Boolean
    }
})

const Mesa = mongoose.model('mesa', mesaSchema,'mesa');

module.exports = Mesa;