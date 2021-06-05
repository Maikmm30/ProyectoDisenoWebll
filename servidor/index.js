const express = require ('express')
const mongoose = require ('mongoose')
const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://tefest07:tefest07@cluster0.jwptf.mongodb.net/proyectoDB?retryWrites=true&w=majority',{
    useNewUrlParser: true
})

app.listen(3001, ()=>{

    console.log('Server running on port 3001...')
})