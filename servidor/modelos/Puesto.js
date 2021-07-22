const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let puestoSchema = new Schema({
    codigo: {
        type: String
    },
    nombre: {
        type: String
    },
    rol: {
        type: String
    },
    relacion: {
        type: String
    },
    estado: {
        type: Boolean
    }
})

const Puesto = mongoose.model('puesto', puestoSchema,'puesto');

module.exports = Puesto;