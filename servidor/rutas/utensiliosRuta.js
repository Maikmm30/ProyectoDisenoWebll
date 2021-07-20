const router = require("express").Router();
let Equipo = require("../modelos/Equipo");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoEquipo = req.body.codigoEquipo;
  const nombreEquipo = req.body.nombreEquipo;
  const cantidadEquipo = req.body.cantidadEquipo;
  const restauranteEquipo = req.body.restauranteEquipo;
  const marcaEquipo = req.body.marcaEquipo;
  const descripcionEquipo = req.body.descripcionEquipo;
  const estadoEquipo = req.body.estadoEquipo;

  try {
    const equipo = new Equipo({
      codigo: codigoEquipo,
      nombre: nombreEquipo,
      cantiad: cantidadEquipo,
      restaurante: restauranteEquipo,
      marca: marcaEquipo,
      decripcion: descripcionEquipo,
      estado: estadoEquipo
    });
    await equipo.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;