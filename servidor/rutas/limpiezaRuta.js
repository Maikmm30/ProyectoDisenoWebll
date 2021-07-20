const router = require("express").Router();
let Limpieza = require("../modelos/Empaque");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoLimpieza = req.body.codigoLimpieza;
  const nombreLimpieza = req.body.nombreLimpieza;
  const cantidadLimpieza = req.body.cantidadLimpieza;
  const restauranteLimpieza = req.body.restauranteLimpieza;
  const marcaLimpieza = req.body.marcaLimpieza;
  const tipoDeArticuloLimpieza = req.body.tipoDeArticuloLimpieza;
  const unidadDeMedidaLimpieza = req.body.unidadDeMedidaLimpieza;
  const descripcionLimpieza = req.body.descripcionLimpieza;
  const estadoLimpieza = req.body.estadoLimpieza;
  const cantidadDeMedidaLimpieza = req.body.cantidadDeMedidaLimpieza;

  try {
    const limpieza = new Limpieza({
      codigo: codigoLimpieza,
      nombre: nombreLimpieza,
      cantidad: cantidadLimpieza,
      restaurante: restauranteLimpieza,
      marca: marcaLimpieza,
      tipoDeArticulo: tipoDeArticuloLimpieza,
      unidadDeMedida: unidadDeMedidaLimpieza,
      decripcion: descripcionLimpieza,
      cantidadDeMedida: cantidadDeMedidaLimpieza,
      estado: estadoLimpieza,
    });
    await limpieza.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;