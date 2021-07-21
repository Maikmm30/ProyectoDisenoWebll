const router = require("express").Router();
let BebidasHelada = require("../modelos/Bebidas_heladas");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  BebidasHelada.find({ estado: { $ne: 'false' } })
      .then((bebidaHelada) => res.json(bebidaHelada))
      .catch((err) => res.status(400).json("Error: " + err));
});


router.post("/agregar", async (req, res) => {
  const codigoBebidaHelada = req.body.codigoBebidaHelada;
  const nombreBebidaHelada = req.body.nombreBebidaHelada;
  const ingredientesBebidaHelada = req.body.ingredientesBebidaHelada;
  const precioBebidaHelada = req.body.precioBebidaHelada;
  const restauranteBebidaHelada = req.body.restauranteBebidaHelada;
  const estadoBebidaHelada = req.body.estadoBebidaHelada;

  try {
    const bebidaHelada = new BebidasHelada({
      codigo: codigoBebidaHelada,
      nombre: nombreBebidaHelada,
      ingredientes: ingredientesBebidaHelada,
      precio: precioBebidaHelada,
      restaurante: restauranteBebidaHelada,
      estado: estadoBebidaHelada,
    });
    await bebidaHelada.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});


router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const bebidaNuevo = req.body.bebidaNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await BebidasHelada.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: bebidaNuevo }, (err, bebidaHelada) => {
      res.json(bebidaHelada);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  BebidasHelada.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(bebidaHelada => res.json(bebidaHelada))
    .catch(err => res.status(400).json('Error: ' + err));
})



router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
    await BebidaHelada.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, bebidaHelada) => {
      res.json(bebidaHelada);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})

module.exports = router;