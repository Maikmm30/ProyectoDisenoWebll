const router = require("express").Router();
let Comestible = require("../modelos/Comestible");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoComestible = req.body.codigoComestible;
  const nombreComestible = req.body.nombreComestible;
  const cantidadComestible = req.body.cantidadComestible;
  const restauranteComestible = req.body.restauranteComestible;
  const marcaComestible = req.body.marcaComestible;
  const tipoDeComestible = req.body.tipoDeComestible;
  const claseDeComestible = req.body.claseDeComestible;
  const lineaDeComestible = req.body.lineaDeComestible;
  const unidadDeMedidaComestible = req.body.unidadDeMedidaComestible;
  const estadoComestible = req.body.estadoComestible;

  try {
    const comestible = new Comestible({
      codigo: codigoComestible,
      nombre: nombreComestible,
      cantiad: cantidadComestible,
      restaurante: restauranteComestible,
      marca: marcaComestible,
      tipoDeComestible: tipoDeComestible,
      claseDeComestible: claseDeComestible,
      lineaDeComestible: lineaDeComestible,
      unidadDeMedida: unidadDeMedidaComestible,
      estado: estadoComestible,
    });
    await comestible.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;