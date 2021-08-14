const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cajaSchema = new Schema({
    codigo: {
        type: String
    },
    fecha: {
        type: String
    },
    descripcion: {
        type: String
    },
    restaurante: {
        type: String
    },
    entradaDinero: {
        type: Number
    },
    aperturaCaja: {
        type: Boolean
    },
    cierreCaja : {
        type: Boolean
    },
    estado : {
        type: Boolean
    }
})

const Caja = mongoose.model('caja', cajaSchema, 'caja');

module.exports = Caja;