const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bebidasCalientesSchema = new Schema({
    codigo: {
        type: String
    },
    nombre: {
        type: String
    },
    precio: {
        type: Number
    },
    restaurante: {
        type: String
    },
    ingredientes: {
        type: String
    },
    descripcion: {
        type: String
    }
})

const BebidasCalientes = mongoose.model('bebidasCalientes', bebidasCalientesSchema);

module.exports = BebidasCalientes;