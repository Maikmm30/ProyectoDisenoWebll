const router = require("express").Router();
let Especialidades = require("../modelos/Especialidades");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoEspecialidad = req.body.codigoEspecialidad;
  const nombreEspecialidad = req.body.nombreEspecialidad;
  const ingredientesEspecialidad = req.body.ingredientesEspecialidad;
  const precioEspecialidad = req.body.precioEspecialidad;
  const detalleEspecialidad = req.body.detalleEspecialidad;
  const restauranteEspecialidad = req.body.restauranteEspecialidad;
  const estadoEspecialidad = req.body.estadoEspecialidad;

  try {
    const especialidad = new Especialidades({
      codigo: codigoEspecialidad,
      nombre: nombreEspecialidad,
      ingredientes: ingredientesEspecialidad,
      precio: precioEspecialidad,
      detalle: detalleEspecialidad,
      restaruante: restauranteEspecialidad,
      estado: estadoEspecialidad,
    });
    await especialidad.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;