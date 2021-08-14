const router = require("express").Router();
let Usuario = require("../modelos/Usuario");
const express = require("express");
var bcrypt = require('bcryptjs');
const app = express();

router.post("/", async (req, res) => {

  const usuarioBusca = req.body.usuarioBusca;
  const passBusca = req.body.passBusca;

  const usuario = await Usuario.findOne({ usuario: usuarioBusca })

  if (!usuario) {
    return res.send(false)
  } else if (usuario) {
    return res.json(await bcrypt.compare(passBusca, usuario.password))
  }
});

module.exports = router;
