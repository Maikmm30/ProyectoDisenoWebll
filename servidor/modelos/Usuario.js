const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

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

//Encriptacion
usuarioSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next();
    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if (err)
            return next(err);
        this.password = passwordHash;
        next();
    })
});

module.exports = mongoose.model('usuario', usuarioSchema, 'usuario');