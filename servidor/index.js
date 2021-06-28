const express = require ('express')
const mongoose = require ('mongoose')
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json())
const paisRutas = require('./rutas/paisRuta')
app.use('/paises', paisRutas);


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://dbAdmin:Admin$db1@cluster0.oznix.mongodb.net/ProyectoDiseno?retryWrites=true&w=majority',{
    useNewUrlParser: true
})
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("****Conectado a la base de datos****");
})

app.listen(3001, ()=>{

    console.log('Server running on port 3001...')
})
