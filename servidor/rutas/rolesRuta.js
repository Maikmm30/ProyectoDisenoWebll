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

module.exports = router;