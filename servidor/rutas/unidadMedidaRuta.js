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

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const unidadMedidaNuevo = req.body.unidadMedidaNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await UnidadMedida.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: unidadMedidaNuevo }, (err, unidadMedida) => {
      res.json(unidadMedida);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  UnidadMedida.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(unidadMedida => res.json(unidadMedida))
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