const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let paisSchema = new Schema({
  codigo: {
    type: String
  },
  nombre: {
    type: String
  },
  estado: {
    type: Boolean
  }
})

module.exports = mongoose.model('pais', paisSchema);