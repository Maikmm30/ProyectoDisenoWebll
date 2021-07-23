const router = require("express").Router();
let Empleado = require("../modelos/Empleados");
const express = require("express");
const app = express();


router.route("/").get((req, res) => {
  Empleado.find({ estado: { $ne: 'false' } })
    .then((empleado) => res.json(empleado))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const empleadoNuevo = req.body.empleadoNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Empleado.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: empleadoNuevo }, (err, empleado) => {
      res.json(empleado);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})

router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  Empleado.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(empleado => res.json(empleado))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
    await Empleado.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, empleado) => {
      res.json(empleado);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})

module.exports = router;