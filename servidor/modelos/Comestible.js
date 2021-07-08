const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let comestibleSchema = new Schema({
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
    tipoDeComestible: {
        type: String
    },
    claseDeComestible : {
        type: String
    },
    lineaDeComestible : {
        type: String
    },
    unidadDeMedida : {
        type: String
    },
    estado : {
        type: Boolean
    }
})

const Comestible = mongoose.model('comestible', comestibleSchema);

module.exports = Comestible;