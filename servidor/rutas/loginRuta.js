const router = require("express").Router();
let Usuario = require("../modelos/Usuario");
const express = require("express");
const app = express();

router.route("/").post((req, res) => {

    const usuarioBusca = req.body.usuarioBusca
    const passBusca = req.body.passBusca
    Usuario.find({
        usuario: usuarioBusca,
        password: passBusca
    }, function(err, result){
        console.log('*--*-*-*'+result.length)
        if(err){
            console.log(err)
        }
        if(result.length===1){
            window.location.href = 'http://localhost:3000/paises'
            // res.send('No existe')
        }
    })
})




module.exports = router;