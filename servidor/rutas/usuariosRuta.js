const router = require("express").Router();
let Usuario = require("../modelos/Usuario");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  Usuario.find({ estado: { $ne: 'false' } })
    .then((usuario) => res.json(usuario))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const usuarioNuevo = req.body.usuarioNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Usuario.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: usuarioNuevo }, (err, usuario) => {
      res.json(usuario);

    });
  }
  catch (err) {
    res.send('error' + err);
  }
})

router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  Usuario.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(usuario => res.json(usuario))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
    await Usuario.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, usuario) => {
      res.json(usuario);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})

module.exports = router;