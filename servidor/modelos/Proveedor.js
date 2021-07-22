const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let proveedorSchema = new Schema({
    codigo: {
        type: String
    },
    cedula: {
        type: String
    },
    fecha: {
        type: Date
    },
    nombre: {
        type: String
    },
    primerApellido: {
        type: String
    },
    segundoApellido: {
        type: String
    },
    direccion: {
        type: String
    },
    telefonoOficina: {
        type: Number
    },
    fax: {
        type: Number
    },
    celular: {
        type: Number    
    },
    estado: {
        type: Boolean
    }
})

const Proveedor = mongoose.model('proveedor', proveedorSchema, 'proveedor');

module.exports = Proveedor;