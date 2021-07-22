const router = require("express").Router();
let Puesto = require("../modelos/Puesto");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  Puesto.find({ estado: { $ne: 'false' } })
      .then((puesto) => res.json(puesto))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/agregar", async (req, res) => {
  const codigoPuesto = req.body.codigoPuesto;
  const nombrePuesto = req.body.nombrePuesto;
  const rolPuesto = req.body.rolPuesto;
  const relacionPuesto = req.body.relacionPuesto;
  const estadoPuesto = req.body.estadoPuesto;

  try {
    const puesto = new Puesto({
      codigo: codigoPuesto,
      nombre: nombrePuesto,
      rol: rolPuesto,
      relacion: relacionPuesto,
      estado: estadoPuesto,
    });
    await puesto.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const puestoNuevo = req.body.puestoNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Puesto.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: puestoNuevo }, (err, puesto) => {
      res.json(puesto);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  Puesto.find({ codigo: codigoBusca, nombre: nombreBusca })
      .then(puesto => res.json(puesto))
      .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
      await Puesto.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, puesto) => {
          res.json(puesto);
      });
  }
  catch (err) {
      res.send('error' + err);
  }
})

module.exports = router;