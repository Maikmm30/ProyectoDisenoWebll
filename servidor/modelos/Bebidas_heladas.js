const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bebidasHeladasSchema = new Schema({
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
    restaurante: {
        type: String
    },
    descripcion: {
        type: String
    }
})

const BebidasHeladas = mongoose.model('bebidasHeladas', bebidasHeladasSchema);

module.exports = BebidasHeladas;