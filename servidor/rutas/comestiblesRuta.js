const router = require("express").Router();
let Comestible = require("../modelos/Comestible");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();


router.route("/").get((req, res) => {
  Comestible.find({ estado: { $ne: 'false' } })
      .then((comestible) => res.json(comestible))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get((req, res) => {
  
  Consecutivo.find({nombre: 'comestible'}).select('valorConsecutivo')
      .then((consecutivo) => res.json(consecutivo))
      .catch((err) => res.status(400).json("Error: " + err));
});


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
      cantidad: cantidadComestible,
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
    res.status(400).send(error)
  }
});

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const comestibleNuevo = req.body.comestibleNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Comestible.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: comestibleNuevo }, (err, comestible) => {
      res.json(comestible);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca
  
  Comestible.find({ codigo: codigoBusca , nombre: nombreBusca})
      .then(comestible => res.json(comestible))
      .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
    await Comestible.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, comestible) => {
      res.json(comestible);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})


module.exports = router;