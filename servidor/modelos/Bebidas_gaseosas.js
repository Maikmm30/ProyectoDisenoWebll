const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bebidasGaseosasSchema = new Schema({
    codigo: {
        type: String
    },
    nombre: {
        type: String
    },
    marca: {
        type: String
    },
    nacionalidad: {
        type: String
    },
    precio: {
        type: Number
    },
    restaurante: {
        type: String
    },
    cantidad: {
        type: Number
    },
    descripcion: {
        type: String
    },
    estado: {
        type: Boolean
    }
})

const BebidasGaseosas = mongoose.model('bebidasGaseosas', bebidasGaseosasSchema,'bebidasGaseosas');

module.exports = BebidasGaseosas;