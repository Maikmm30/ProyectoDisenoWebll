const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tecnologiaSchema = new Schema({
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
    descripcion: {
        type: String
    },
    estado : {
        type: Boolean
    }
})

const Tecnologia = mongoose.model('tecnologia', tecnologiaSchema,'tecnologia');

module.exports = Tecnologia;