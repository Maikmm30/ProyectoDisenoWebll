const router = require("express").Router();
let UnidadMedida = require("../modelos/Unidad_medida");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  UnidadMedida.find({ estado: { $ne: 'false' } })
      .then((unidadMedida) => res.json(unidadMedida))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/names").get((req, res) => {
  UnidadMedida.find({ estado: { $ne: 'false' } }).select('unidadMedida')
    .then((restaurante) => res.json(restaurante))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get((req, res) => {
  
  Consecutivo.find({nombre: 'unidadMedida'}).select('valorConsecutivo')
      .then((consecutivo) => res.json(consecutivo))
      .catch((err) => res.status(400).json("Error: " + err));
});

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
      unidadMedida: unidadUnidadMedida,
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

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const unidadNuevo = req.body.unidadNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await UnidadMedida.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: unidadNuevo }, (err, unidadMedida) => {
      res.json(unidadMedida);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const detalleBusca = req.body.detalleBusca

  UnidadMedida.find({ codigo: codigoBusca, detalle: detalleBusca })
    .then(unidad => res.json(unidad))
    .catch(err => res.status(400).json('Error: ' + err));
})


router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
    await UnidadMedida.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, unidadMedida) => {
      res.json(unidadMedida);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})

module.exports = router;