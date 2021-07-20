const router = require("express").Router();
let Proveedor = require("../modelos/Proveedor");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoProveedor = req.body.codigoProveedor;
  const cedulaProveedor = req.body.cedulaProveedor;
  const fechaProveedor = req.body.fechaProveedor;
  const nombreProveedor = req.body.nombreProveedor;
  const primerApellidoProveedor = req.body.primerApellidoProveedor;
  const segundoApellidoProveedor = req.body.segundoApellidoProveedor;
  const direccionProveedor = req.body.direccionProveedor;
  const telefonoOficinaProveedor = req.body.telefonoOficinaProveedor;
  const faxProveedor = req.body.faxProveedor;
  const celularProveedor = req.body.celularProveedor;
  const estadoProveedor = req.body.estadoProveedor;

  try {
    const proveedor = new Proveedor({
      codigo: codigoProveedor,
      cedula: cedulaProveedor,
      fecha: fechaProveedor,
      nombre: nombreProveedor,
      primerApellido: primerApellidoProveedor,
      segundoApellido: segundoApellidoProveedor,
      direccion: direccionProveedor,
      telefonoOficina: telefonoOficinaProveedor,
      fax: faxProveedor,
      celular: celularProveedor, 
      estado: estadoProveedor,
    });
    await proveedor.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;