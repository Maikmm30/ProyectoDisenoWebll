const router = require("express").Router();
let Usuario = require("../modelos/Usuario");
const express = require("express");
const app = express();

router.post("/", async(req, res) => {
  const usuarioBusca = req.body.usuarioBusca;
  const passBusca = req.body.passBusca;
 await Usuario.findOne(
    {
      usuario: usuarioBusca,
      password: passBusca,
    }, function (err, user){
        if(!user){
           return res.send(false)
        }
        if(user){
            return res.json(user)
        }
        
    })
});

module.exports = router;
