const router = require("express").Router();
let Consecutivo = require("../modelos/Consecutivos");
let Equipo = require("../modelos/Equipo");
const express = require("express");
const app = express();


router.route("/").get((req, res) => {
  Equipo.find({ estado: { $ne: 'false' } })
      .then((equipo) => res.json(equipo))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get((req, res) => {
  
  Consecutivo.find({nombre: 'equipo'}).select('valorConsecutivo')
      .then((consecutivo) => res.json(consecutivo))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/agregar", async (req, res) => {
  const codigoEquipo = req.body.codigoEquipo;
  const nombreEquipo = req.body.nombreEquipo;
  const cantidadEquipo = req.body.cantidadEquipo;
  const restauranteEquipo = req.body.restauranteEquipo;
  const marcaEquipo = req.body.marcaEquipo;
  const descripcionEquipo = req.body.descripcionEquipo;
  const estadoEquipo = req.body.estadoEquipo;

  try {
    const equipo = new Equipo({
      codigo: codigoEquipo,
      nombre: nombreEquipo,
      cantidad: cantidadEquipo,
      restaurante: restauranteEquipo,
      marca: marcaEquipo,
      decripcion: descripcionEquipo,
      estado: estadoEquipo
    });
    await equipo.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const equipoNuevo = req.body.equipoNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Equipo.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: equipoNuevo }, (err, equipo) => {
      res.json(equipo);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  Equipo.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(equipo => res.json(equipo))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
    await Equipo.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, equipo) => {
      res.json(equipo);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})

module.exports = router;