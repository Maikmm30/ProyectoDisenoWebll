const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let marcaSchema = new Schema({
    codigo: {
        type: String
    },
    nombre: {
        type: String
    },
    telefono: {
        type: Number
    },
    nacionalidad: {
        type: String
    },
    empresa: {
        type: String
    },
    descripcion: {
        type: String
    },
    estado: {
        type: Boolean
    },
})

const Marca = mongoose.model('marca', marcaSchema, 'marca');

module.exports = Marca;