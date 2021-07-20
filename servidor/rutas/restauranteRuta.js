const router = require("express").Router();
let Restaurante = require("../modelos/Restaurante");
const express = require("express");

router.put("/update", async (req, res) => {
    const codigoActualiza = req.body.codigoActualiza;
    const restauNuevo = req.body.restauNuevo;
    const columnaSeleccionada = req.body.columnaSeleccionada;
    try{
    await Restaurante.findOneAndUpdate({codigo : codigoActualiza}, {[columnaSeleccionada] : restauNuevo} , (err, restaurante)=>{
      res.json(restaurante);
  
    });
    }
    catch(err){
      res.send('error'+ err);
    }
  })
  

module.exports = router;