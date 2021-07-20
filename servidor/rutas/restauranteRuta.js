const router = require("express").Router();
let Restaurante = require("../modelos/Restaurante");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoRestaurante = req.body.codigoRestaurante;
  const nombreRestaurante = req.body.nombreRestaurante;
  const especialidadRestaurante = req.body.especialidadRestaurante;
  const direccionRestaurante = req.body.direccionRestaurante;
  const telefonoRestaurante = req.body.telefonoRestaurante;
  const estadoRestaurante = req.body.estadoRestaurante;

  try {
    const restaurante = new Restaurante({
      codigo: codigoRestaurante,
      nombre: nombreRestaurante,
      especialidad: especialidadRestaurante,
      direccion: direccionRestaurante,
      telefono: telefonoRestaurante,
      estado: estadoRestaurante,
    });
    await restaurante.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;