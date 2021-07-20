const router = require("express").Router();
let BebidasVinos = require("../modelos/Bebidas_vinos");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoBebidaVino = req.body.codigoBebidaVino;
  const nombreBebidaVino = req.body.nombreBebidaVino;
  const marcaBebidaVino = req.body.marcaBebidaVino;
  const nacionalidadBebidaVino = req.body.nacionalidadBebidaVino;
  const anioCosechaBebidaVino = req.body.anioCosechaBebidaVino;
  const precioUnitarioBebidaVino = req.body.precioUnitarioBebidaVino;
  const precioBotellaBebidaVino = req.body.precioBotellaBebidaVino;
  const restauranteBebidaVino = req.body.restauranteBebidaVino;
  const cantidadBebidaVino = req.body.cantidadBebidaVino;
  const descripcionBebidaVino = req.body.descripcionBebidaVino;
  //const imagenBebidaGaseosa = ;
  const estadoBebidaVino = req.body.estadoBebidaVino;

  try {
    const bebidaVino = new BebidasVinos({
      codigo: codigoBebidaVino,
      nombre: nombreBebidaVino,
      marca: marcaBebidaVino,
      nacionalidad: nacionalidadBebidaVino,
      anioCosecha: anioCosechaBebidaVino,
      precioUnitario: precioUnitarioBebidaVino,
      precioBotella: precioBotellaBebidaVino,
      restaurante: restauranteBebidaVino,
      cantidad: cantidadBebidaVino,
      descipcion: descripcionBebidaVino,
      estado: estadoBebidaVino,
    });
    await bebidaVino.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;