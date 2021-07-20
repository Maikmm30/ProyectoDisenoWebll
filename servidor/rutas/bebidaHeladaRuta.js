const router = require("express").Router();
let BebidasHelada = require("../modelos/Bebidas_heladas");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoBebidaHelada = req.body.codigoBebidaHelada;
  const nombreBebidaHelada = req.body.nombreBebidaHelada;
  const ingredientesBebidaHelada = req.body.ingredientesBebidaHelada;
  const precioBebidaHelada = req.body.precioBebidaHelada;
  const restauranteBebidaHelada = req.body.restauranteBebidaHelada;
  const estadoBebidaHelada = req.body.estadoBebidaHelada;

  try {
    const bebidaHelada = new BebidasHelada({
      codigo: codigoBebidaHelada,
      nombre: nombreBebidaHelada,
      ingredientes: ingredientesBebidaHelada,
      precio: precioBebidaHelada,
      restaurante: restauranteBebidaHelada,
      estado: estadoBebidaHelada,
    });
    await bebidaHelada.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;