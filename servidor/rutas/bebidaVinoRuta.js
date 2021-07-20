const router = require("express").Router();
let BebidaVino = require("../modelos/Bebidas_vinos");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoBebidaVino = req.body.codigoBebidaVino;
  const nombreBebidaVino = req.body.nombreBebidaVino;
  const marcaBebidaVino = req.body.marcaBebidaVino;
  const nacionalidadBebidaVino = req.body.nacionalidadBebidaVino;
  const anioCosechaBebidaVino = req.body.anioCosechaBebidaVino;
  const precioUnitarioBebidaVino = req.body.precioUnitarioBebidaVino;
  const precioBotellaBebidaVino = req.body.precioBotellaBebidaVino;
  const restauranteBebidaVino = req.body.restauranteBebidaVino;
  const cantidadBebidaVino = req.body.cantidadBebidaVino;
  const descripcionBebidaVino = req.body.descripcionBebidaVino;
  //const imagenBebidaGaseosa = ;
  const estadoBebidaVino = req.body.estadoBebidaVino;

  try {
    const bebidaVino = new BebidaVino({
      codigo: codigoBebidaVino,
      nombre: nombreBebidaVino,
      marca: marcaBebidaVino,
      nacionalidad: nacionalidadBebidaVino,
      anioCosecha: anioCosechaBebidaVino,
      precioUnitario: precioUnitarioBebidaVino,
      precioBotella: precioBotellaBebidaVino,
      restaurante: restauranteBebidaVino,
      cantidad: cantidadBebidaVino,
      descipcion: descripcionBebidaVino,
      estado: estadoBebidaVino,
    });
    await bebidaVino.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
    res.status(400).send(error)
  }
});


router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const bebidaVinoNuevo = req.body.bebidaVinoNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await BebidaVino.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: bebidaVinoNuevo }, (err, bebidaVino) => {
      res.json(bebidaVino);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  BebidaVino.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(bebidaVino => res.json(bebidaVino))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
    await BebidaVino.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, bebidaVino) => {
      res.json(bebidaVino);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})


module.exports = router;