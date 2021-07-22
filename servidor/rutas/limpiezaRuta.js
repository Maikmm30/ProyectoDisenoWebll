const router = require("express").Router();
let Limpieza = require("../modelos/Limpieza");
const express = require("express");
const app = express();


router.route("/").get((req, res) => {
  Limpieza.find({ estado: { $ne: 'false' } })
      .then((limpieza) => res.json(limpieza))
      .catch((err) => res.status(400).json("Error: " + err));
});

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

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const limpiezaNuevo = req.body.limpiezaNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Limpieza.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: limpiezaNuevo }, (err, limpieza) => {
      res.json(limpieza);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  Limpieza.find({ codigo: codigoBusca, nombre: nombreBusca })
      .then(limpieza => res.json(limpieza))
      .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
      await Limpieza.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, limpieza) => {
          res.json(limpieza);
      });
  }
  catch (err) {
      res.send('error' + err);
  }
})

module.exports = router;