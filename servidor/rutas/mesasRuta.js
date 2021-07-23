const router = require("express").Router();
let Mesa = require("../modelos/Mesa");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  Mesa.find({ estado: { $ne: 'false' } })
      .then((mesa) => res.json(mesa))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get((req, res) => {
  
  Consecutivo.find({nombre: 'mesa'}).select('valorConsecutivo')
      .then((consecutivo) => res.json(consecutivo))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/agregar", async (req, res) => {
  const codigoMesa = req.body.codigoMesa;
  const nombreMesa = req.body.nombreMesa;
  const cantidadSillasMesa = req.body.cantidadSillasMesa;
  const restauranteMesa = req.body.restauranteMesa;
  const numeroMesa = req.body.numeroMesa;
  const estadoMesa = req.body.estadoMesa;

  try {
    const mesa = new Mesa({
      codigo: codigoMesa,
      nombre: nombreMesa,
      numero: numeroMesa,
      cantidadSillas: cantidadSillasMesa,
      restaurante: restauranteMesa,
      estado: estadoMesa
    });
    await mesa.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const mesaNuevo = req.body.mesaNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Mesa.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: mesaNuevo }, (err, mesa) => {
      res.json(mesa);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  Mesa.find({ codigo: codigoBusca, nombre: nombreBusca })
      .then(mesa => res.json(mesa))
      .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
      await Mesa.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, mesa) => {
          res.json(mesa);
      });
  }
  catch (err) {
      res.send('error' + err);
  }
})

module.exports = router;