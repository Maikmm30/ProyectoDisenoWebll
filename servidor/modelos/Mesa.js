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
        type: String
    },
    cantidadSillas: {
        type: Number
    },
    restaurante: {
        type: String
    },
    estado: {
        type: String
    }
})

const Mesa = mongoose.model('restaurante', mesaSchema);

module.exports = Restaurante;