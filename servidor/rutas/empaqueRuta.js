const router = require("express").Router();
let Empaque = require("../modelos/Empaque");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();


router.route("/").get((req, res) => {
  Empaque.find({ estado: { $ne: 'false' } })
      .then((empaque) => res.json(empaque))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get((req, res) => {
  
  Consecutivo.find({nombre: 'empaque'}).select('valorConsecutivo')
      .then((consecutivo) => res.json(consecutivo))
      .catch((err) => res.status(400).json("Error: " + err));
});


router.post("/agregar", async (req, res) => {
  const codigoEmpaque = req.body.codigoEmpaque;
  const nombreEmpaque = req.body.nombreEmpaque;
  const cantidadEmpaque = req.body.cantidadEmpaque;
  const restauranteEmpaque = req.body.restauranteEmpaque;
  const marcaEmpaque = req.body.marcaEmpaque;
  const descripcionEmpaque = req.body.descripcionEmpaque;
  const estadoEmpaque = req.body.estadoEmpaque;

  try {
    const empaque = new Empaque({
      codigo: codigoEmpaque,
      nombre: nombreEmpaque,
      cantidad: cantidadEmpaque,
      restaurante: restauranteEmpaque,
      marca: marcaEmpaque,
      decripcion: descripcionEmpaque,
      estado: estadoEmpaque,
    });
    await empaque.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const empaqueNuevo = req.body.empaqueNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Empaque.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: empaqueNuevo }, (err, empaque) => {
      res.json(empaque);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  Empaque.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(empaque => res.json(empaque))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
    await Empaque.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, empaque) => {
      res.json(empaque);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})

module.exports = router;