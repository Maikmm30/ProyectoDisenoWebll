const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let limpiezaSchema = new Schema({
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
    tipoDeArticulo: {
        type: String
    },
    cantidadDeMedida: {
        type: Number
    },
    unidadDeMedida : {
        type: String
    },
    descripcion : {
        type: String
    },
    estado : {
        type: Boolean
    }
})

const Limpieza = mongoose.model('limpieza', limpiezaSchema, 'limpieza');

module.exports = Limpieza;