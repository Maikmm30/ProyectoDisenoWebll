const router = require("express").Router();
let BebidasCaliente = require("../modelos/Bebidas_calientes");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoBebidaCaliente = req.body.codigoBebidaCaliente;
  const nombreBebidaCaliente = req.body.nombreBebidaCaliente;
  const ingredientesBebidaCaliente = req.body.ingredientesBebidaCaliente;
  const precioBebidaCaliente = req.body.precioBebidaCaliente;
  const restauranteBebidaCaliente = req.body.restauranteBebidaCaliente;
  const estadoBebidaCaliente = req.body.estadoBebidaCaliente;

  try {
    const bebidaCaliente = new BebidasCaliente({
      codigo: codigoBebidaCaliente,
      nombre: nombreBebidaCaliente,
      ingredientes: ingredientesBebidaCaliente,
      precio: precioBebidaCaliente,
      restaurante: restauranteBebidaCaliente,
      estado: estadoBebidaCaliente,
    });
    await bebidaCaliente.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;