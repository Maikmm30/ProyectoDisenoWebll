const router = require("express").Router();
let BebidasGaseosas = require("../modelos/Bebidas_gaseosas");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoBebidaGaseosa = req.body.codigoBebidaGaseosa;
  const nombreBebidaGaseosa = req.body.nombreBebidaGaseosa;
  const marcaBebidaGaseosa = req.body.marcaBebidaGaseosa;
  const nacionalidadBebidaGaseosa = req.body.nacionalidadBebidaGaseosa;
  const precioBebidaGaseosa = req.body.precioBebidaGaseosa;
  const restauranteBebidaGaseosa = req.body.restauranteBebidaGaseosa;
  const cantidadBebidaGaseosa = req.body.cantidadBebidaGaseosa;
  const descripcionBebidaGaseosa = req.body.descripcionBebidaGaseosa;
  //const imagenBebidaGaseosa = ;
  const estadoBebidaGaseosa = req.body.estadoBebidaCaliente;

  try {
    const bebidaGaseosa = new BebidasGaseosas({
      codigo: codigoBebidaGaseosa,
      nombre: nombreBebidaGaseosa,
      marca: marcaBebidaGaseosa,
      nacionalidad: nacionalidadBebidaGaseosa,
      precio: precioBebidaGaseosa,
      restaurante: restauranteBebidaGaseosa,
      cantidad: cantidadBebidaGaseosa,
      descipcion: descripcionBebidaGaseosa,
      estado: estadoBebidaGaseosa,
    });
    await bebidaGaseosa.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;