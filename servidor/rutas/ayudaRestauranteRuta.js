const router = require("express").Router();
let UsuarioActividad = require("../modelos/Usuario_actividad");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
    UsuarioActividad.find({codigo: '3'})
      .then((usuarioactividad) => res.json(usuarioactividad))
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router;