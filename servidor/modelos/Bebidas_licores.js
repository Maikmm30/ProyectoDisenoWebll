const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bebidasLicoresSchema = new Schema({
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
    tipoVenta: {
        type: String
    },
    precioUnitario: {
        type: Number
    },
    precioBotella: {
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

const BebidasLicores = mongoose.model('bebidasLicores', bebidasLicoresSchema);

module.exports = BebidasLicores;