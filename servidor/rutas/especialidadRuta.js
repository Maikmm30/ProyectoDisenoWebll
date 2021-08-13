const router = require("express").Router();
let Especialidad = require("../modelos/Especialidades");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  Especialidad.find({ estado: { $ne: 'false' } })
      .then((especialidad) => res.json(especialidad))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get((req, res) => {
  
  Consecutivo.find({nombre: 'especialidad'}).select('valorConsecutivo')
      .then((consecutivo) => res.json(consecutivo))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/agregar", async (req, res) => {
  const codigoEspecialidad = req.body.codigoEspecialidad;
  const nombreEspecialidad = req.body.nombreEspecialidad;
  const ingredientesEspecialidad = req.body.ingredientesEspecialidad;
  const precioEspecialidad = req.body.precioEspecialidad;
  const detalleEspecialidad = req.body.detalleEspecialidad;
  const restauranteEspecialidad = req.body.restauranteEspecialidad;
  const estadoEspecialidad = req.body.estadoEspecialidad;

  try {
    const especialidad = new Especialidad({
      codigo: codigoEspecialidad,
      nombre: nombreEspecialidad,
      ingredientes: ingredientesEspecialidad,
      precio: precioEspecialidad,
      detalle: detalleEspecialidad,
      restaurante: restauranteEspecialidad,
      estado: estadoEspecialidad,
    });
    await especialidad.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const especialNuevo = req.body.especialNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Especialidad.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: especialNuevo }, (err, especial) => {
      res.json(especial);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  Especialidad.find({ codigo: codigoBusca, nombre: nombreBusca })
      .then(especialidad => res.json(especialidad))
      .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
      await Especialidad.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, especialidad) => {
          res.json(especialidad);
      });
  }
  catch (err) {
      res.send('error' + err);
  }
})

router.route("/obtenerEspecialidades").post((req, res) => {
  const restauranteClienteMesa = req.body.restauranteClienteMesa;

  Especialidad.find({ estado: { $ne: 'false' }, restaurante: restauranteClienteMesa}).select('nombre').select('precio')
      .then((oc) => res.json(oc))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/buscarNombre").post((req, res) => {
  const nombreBusca = req.body.nombreBusca
  const restauranteClienteMesa = req.body.restauranteClienteMesa;

  Especialidad.find({estado: { $ne: 'false' }, restaurante: restauranteClienteMesa, nombre: nombreBusca }).select('precio')
      .then(buffet => res.json(buffet))
      .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;