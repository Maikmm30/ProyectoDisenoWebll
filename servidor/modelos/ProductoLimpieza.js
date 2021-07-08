const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productoLimpiezaSchema = new Schema({
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
    unidadDeMedida: {
        type: String
    },
    estado : {
        type: Boolean
    }
})

const ProductoLimpieza = mongoose.model('productoLimpieza', productoLimpiezaSchema);

module.exports = ProductoLimpieza;