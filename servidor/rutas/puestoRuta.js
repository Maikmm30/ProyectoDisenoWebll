const router = require("express").Router();
let Puesto = require("../modelos/Puesto");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoPuesto = req.body.codigoPuesto;
  const nombrePuesto = req.body.nombrePuesto;
  const rolPuesto = req.body.rolPuesto;
  const relacionPuesto = req.body.relacionPuesto;
  const estadoPuesto = req.body.estadoPuesto;

  try {
    const puesto = new Puesto({
      codigo: codigoPuesto,
      nombre: nombrePuesto,
      rol: rolPuesto,
      relacion: relacionPuesto,
      estado: estadoPuesto,
    });
    await puesto.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;