const router = require("express").Router();
let Rol = require("../modelos/Roles");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoRol = req.body.codigoRol;
  const nombreRol = req.body.nombreRol;
  const descripcionRol = req.body.descripcionRol;
  const estadoRol = req.body.estadoRol;

  try {
    const rol = new Rol({
      codigo: codigoRol,
      nombre: nombreRol,
      descripcion: descripcionRol,
      estado: estadoRol,
    });
    await rol.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const rolNuevo = req.body.rolNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Rol.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: rolNuevo }, (err, rol) => {
      res.json(rol);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  Rol.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(rol => res.json(rol))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
    await Rol.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, rol) => {
      res.json(rol);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})

module.exports = router;