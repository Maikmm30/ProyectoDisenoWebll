const router = require("express").Router();
let Usuario = require("../modelos/Usuario");
let Consecutivo = require("../modelos/Consecutivos");

const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  Usuario.find({ estado: { $ne: 'false' } })
    .then((usuario) => res.json(usuario))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get((req, res) => {
  
  Consecutivo.find({nombre: 'usuario'}).select('valorConsecutivo')
      .then((consecutivo) => res.json(consecutivo))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/agregar", async (req, res) => {
  const codigoUsuario = req.body.codigoUsuario;
  const numeroUsuario = req.body.numeroUsuario;
  const nombreUsuario = req.body.nombreUsuario;
  const primerApellidoUsuario = req.body.primerApellidoUsuario;
  const segundoApellidoUsuario = req.body.segundoApellidoUsuario;
  const telefono1Usuario = req.body.telefono1Usuario;
  const telefono2Usuario = req.body.telefono2Usuario;
  const username = req.body.username;
  const passwordUsuario = req.body.passwordUsuario;
  const rolUsuario= req.body.rolUsuario;
  const estadoUsuario= req.body.estadoUsuario;
  try {
      const usuario = new Usuario({
          codigo: codigoUsuario,
          numero: numeroUsuario,
          nombre: nombreUsuario,
          primerApellido: primerApellidoUsuario,
          segundoApellido: segundoApellidoUsuario,
          telefonoFijo: telefono1Usuario,
          telefonoCelular: telefono2Usuario,
          usuario: username,
          password: passwordUsuario,
          rol: rolUsuario,
          estado: estadoUsuario
      });
      await usuario.save();
      res.send("inserted data");
  } catch (err) {
      console.log(err);
      res.status(400).send(error)
  }
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