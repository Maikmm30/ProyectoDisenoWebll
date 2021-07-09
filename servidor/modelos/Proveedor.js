const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let proveedorSchema = new Schema({
    codigo: {
        type: String
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
    telefonoOficina: {
        type: Number
    },
    fax: {
        type: String
    },
    celular: {
        type: String
    },estado: {
        type: String
    }
})

const Proveedor = mongoose.model('proveedor', proveedorSchema);

module.exports = Proveedor;