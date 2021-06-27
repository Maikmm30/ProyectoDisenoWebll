const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let paisSchema = new Schema({
  codigo: {
    type: String
  },
  nombre: {
    type: String
  }
})

const Pais =  mongoose.model('pais', paisSchema);
module.exports = Pais;