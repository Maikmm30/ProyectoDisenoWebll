const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let paisSchema = new Schema({
  codigo: {
    type: String
  },
  nombre: {
    type: String
  },
  rollno: {
    type: Number
  }
})
module.exports = mongoose.model('Pais', paisSchema)