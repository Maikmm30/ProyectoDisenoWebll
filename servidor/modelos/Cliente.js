const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clienteSchema = new Schema({
    codigo: {
        type: String
    },
    nombreCompleto: {
        type: String
    },
    montoPagado: {
        type: Number
    },
    restaurante: {
        type: String
    },
    detalle: {
        type: String
    },
    reservacion: {
        type: Boolean
    },
    barra : {
        type: Boolean
    },
    fecha : {
        type: Date
    },
    estado : {
        type: Boolean
    }
})

const Cliente = mongoose.model('cliente', clienteSchema);

module.exports = Cliente;