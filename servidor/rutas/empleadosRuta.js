const router = require("express").Router();
let Empleado = require("../modelos/Empleados");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();


router.route("/").get((req, res) => {
  Empleado.find({ estado: { $ne: 'false' } })
    .then((empleado) => res.json(empleado))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get((req, res) => {
  
  Consecutivo.find({nombre: 'empleado'}).select('valorConsecutivo')
      .then((consecutivo) => res.json(consecutivo))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/agregar", async (req, res) => {
  const codigoEmpleado = req.body.codigoEmpleado;
  const cedulaEmpleado = req.body.cedulaEmpleado;
  const numeroEmpleado = req.body.numeroEmpleado;
  const nombreEmpleado = req.body.nombreEmpleado;
  const primerApellidoEmpleado = req.body.primerApellidoEmpleado;
  const segundoApellidoEmpleado = req.body.segundoApellidoEmpleado;
  const telefono1Empleado = req.body.telefono1Empleado;
  const telefono2Empleado = req.body.telefono2Empleado;
  const puestoEmpleado = req.body.puestoEmpleado;
  const nacionalidadEmpleado = req.body.nacionalidadEmpleado;
  const restauranteEmpleado = req.body.restauranteEmpleado;
  const estadoEmpleado= req.body.estadoEmpleado;

  try {
      const empleado = new Empleado({
          codigo: codigoEmpleado,
          cedula: cedulaEmpleado,
          numero: numeroEmpleado,
          nombre: nombreEmpleado,
          primerApellido: primerApellidoEmpleado,
          segundoApellido: segundoApellidoEmpleado,
          telefono1:telefono1Empleado,
          telefono2:telefono2Empleado,
          puesto: puestoEmpleado,
          nacionalidad: nacionalidadEmpleado,
          restaurante: restauranteEmpleado,
          estado: estadoEmpleado
      });
      await empleado.save();
      res.send("inserted data");
  } catch (err) {
      console.log(err);
      res.status(400).send(error)
  }
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