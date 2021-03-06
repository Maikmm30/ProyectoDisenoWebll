const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bebidasVinosSchema = new Schema({
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
    precioUnitario: {
        type: Number
    },
    precioBotella: {
        type: Number
    },
    anioCosecha: {
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
    tipoVenta: {
        type: String
    },
   estado: {
        type: String
    }
})

const BebidasVinos = mongoose.model('bebidasVinos', bebidasVinosSchema,'bebidasVinos');

module.exports = BebidasVinos;