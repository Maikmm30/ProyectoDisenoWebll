const router = require("express").Router();
let Empaque = require("../modelos/Empaque");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoEmpaque = req.body.codigoEmpaque;
  const nombreEmpaque = req.body.nombreEmpaque;
  const cantidadEmpaque = req.body.cantidadEmpaque;
  const restauranteEmpaque = req.body.restauranteEmpaque;
  const marcaEmpaque = req.body.marcaEmpaque;
  const descripcionEmpaque = req.body.descripcionEmpaque;
  const estadoEmpaque = req.body.estadoEmpaque;

  try {
    const empaque = new Empaque({
      codigo: codigoEmpaque,
      nombre: nombreEmpaque,
      cantiad: cantidadEmpaque,
      restaurante: restauranteEmpaque,
      marca: marcaEmpaque,
      decripcion: descripcionEmpaque,
      estado: estadoEmpaque,
    });
    await empaque.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;