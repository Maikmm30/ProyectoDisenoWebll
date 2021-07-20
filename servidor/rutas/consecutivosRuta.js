const router = require("express").Router();
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoConsecutivo = req.body.codigoConsecutivo;
  const tipoConsecutivo = req.body.tipoConsecutivo;
  const descripcionConsecutivo = req.body.descripcionConsecutivo;
  const nombreConsecutivo = req.body.nombreConsecutivo;
  const valorConsecutivo = req.body.valorConsecutivo;
  const contienePrefijoConsecutivo = req.body.contienePrefijoConsecutivo;
  const prefijoConsecutivo = req.body.prefijoConsecutivo;
  const estadoConsecutivo = req.body.estadoConsecutivo;


  try {
    const consecutivo = new Consecutivo({
      codigo: codigoConsecutivo,
      tipo: tipoConsecutivo,
      descripcion: descripcionConsecutivo,
      nombre: nombreConsecutivo,
      valorConsecutivo: valorConsecutivo,
      contienePrefijo: contienePrefijoConsecutivo,
      prefijo: prefijoConsecutivo,
      estado: estadoConsecutivo,
    });
    await consecutivo.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;