const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let restauranteActividadSchema = new Schema({
    codigo: {
        type: String
    },
    codigo_restaurante: {
        type: String
    },
    fecha: {
        type: date
    },
    descripcion: {
        type: String
    }
})

const RestauranteActividad = mongoose.model('restauranteActividad', restauranteActividadSchema);

module.exports = RestauranteActividad;