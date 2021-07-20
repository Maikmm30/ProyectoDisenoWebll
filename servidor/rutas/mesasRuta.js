const router = require("express").Router();
let Mesa = require("../modelos/Mesa");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoMesa = req.body.codigoMesa;
  const nombreMesa = req.body.nombreMesa;
  const cantidadSillasMesa = req.body.cantidadSillasMesa;
  const restauranteMesa = req.body.restauranteMesa;
  const numeroMesa = req.body.numeroMesa;
  const estadoMesa = req.body.estadoMesa;

  try {
    const mesa = new Mesa({
      codigo: codigoMesa,
      nombre: nombreMesa,
      numero: numeroMesa,
      cantidadSillas: cantidadSillasMesa,
      restaurante: restauranteMesa,
      estado: estadoMesa
    });
    await mesa.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;