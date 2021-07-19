const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
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
    telefonoFijo: {
        type: Number
    },
    telefonoCelular: {
        type: Number
    },
    usuario: {
        type: String
    },
    password: {
        type: String
    },
    rol: {
        type: String
    },
    estado: {
        type: Boolean
    }
})

const Usuario = mongoose.model('usuario', usuarioSchema, 'usuario');

module.exports = Usuario;