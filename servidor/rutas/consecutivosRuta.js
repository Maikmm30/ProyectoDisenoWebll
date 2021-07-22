const router = require("express").Router();
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();


router.route("/").get((req, res) => {
  Consecutivo.find({ estado: { $ne: 'false' } })
      .then((consecutivo) => res.json(consecutivo))
      .catch((err) => res.status(400).json("Error: " + err));
});

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

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const consecutivoNuevo = req.body.consecutivoNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Consecutivo.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: consecutivoNuevo }, (err, consecutivo) => {
      res.json(consecutivo);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


module.exports = router;