const router = require("express").Router();
let UnidadMedida = require("../modelos/Unidad_medida");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoUnidadMedida = req.body.codigoUnidadMedida;
  const unidadUnidadMedida = req.body.unidadUnidadMedida;
  const escalaUnidadMedida = req.body.escalaUnidadMedida;
  const detalleUnidadMedida = req.body.detalleUnidadMedida;
  const simbologiaUnidadMedida = req.body.simbologiaUnidadMedida;
  const simboloUnidadMedida = req.body.simboloUnidadMedida;
  const estadoUnidadMedida = req.body.estadoUnidadMedida;

  try {
    const unidadMedida = new UnidadMedida({
      codigo: codigoUnidadMedida,
      unidadmedida: unidadUnidadMedida,
      escala: escalaUnidadMedida,
      detalle: detalleUnidadMedida,
      simbologia: simbologiaUnidadMedida,
      siimbolo: simboloUnidadMedida,
      estado: estadoUnidadMedida
    });
    await unidadMedida.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;