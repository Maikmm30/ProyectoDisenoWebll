const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clienteSchema = new Schema({
    codigo: {
        type: String
    },
    nombreCompleto: {
        type: String
    },
    nombreMesa: {
        type: String
    },
    montoPagado: {
        type: Number
    },
    restaurante: {
        type: String
    },
    horaEntrada: {
        type: String
    },
    horaSalida: {
        type: String
    },
    duracion: {
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
    fechaLlegada : {
        type: String
    },
    fechaReservacion: {
        type: String
    },
    estado : {
        type: Boolean
    }, 
    tipoCliente: { //Mesa o Barra
        type: String
    },
    numeroMesa: {
        type: Number
    },
    pedidoSilla1:{
        type: String
    },
    pedidoSilla2:{
        type: String
    },
    pedidoSilla3:{
        type: String
    },
    pedidoSilla4:{
        type: String
    },
    precioSilla1:{
        type: Number
    },
    precioSilla2:{
        type: Number
    },
    precioSilla3:{
        type: Number
    },
    precioSilla4:{
        type: Number
    },
    pedidoBarra:{
        type: String
    },
    precioBarra: {
        type: Number
    },
    numeroSillaBarra: {
        type: Number
    },
    estadoCuenta:{
        type: String
    },
    ocupado:{
        type:Boolean
    }

})

const Cliente = mongoose.model('cliente', clienteSchema, 'cliente');

module.exports = Cliente;