const router = require("express").Router();
let Tecnologia = require("../modelos/Tecnologia");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoTecnologia = req.body.codigoTecnologia;
  const nombreTecnologia = req.body.nombreTecnologia;
  const cantidadTecnologia = req.body.cantidadTecnologia;
  const restauranteTecnologia = req.body.restauranteTecnologia;
  const marcaTecnologia = req.body.marcaTecnologia;
  const descripcionTecnologia = req.body.descripcionTecnologia;
  const estadoTecnologia = req.body.estadoTecnologia;

  try {
    const tecnologia = new Tecnologia({
      codigo: codigoTecnologia,
      nombre: nombreTecnologia,
      cantiad: cantidadTecnologia,
      restaurante: restauranteTecnologia,
      marca: marcaTecnologia,
      decripcion: descripcionTecnologia,
      estado: estadoTecnologia
    });
    await tecnologia.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;