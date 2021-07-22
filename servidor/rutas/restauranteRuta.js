const router = require("express").Router();
let Restaurante = require("../modelos/Restaurante");
const express = require("express");


router.route("/").get((req, res) => {
  Restaurante.find({ estado: { $ne: 'false' } })
    .then((restaurante) => res.json(restaurante))
    .catch((err) => res.status(400).json("Error: " + err));
});



router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const restauNuevo = req.body.restauNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Restaurante.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: restauNuevo }, (err, restaurante) => {
      res.json(restaurante);

    });
  }
  catch (err) {
    res.send('error' + err);
  }
})

const app = express();

router.post("/agregar", async (req, res) => {
  const codigoRestaurante = req.body.codigoRestaurante;
  const nombreRestaurante = req.body.nombreRestaurante;
  const especialidadRestaurante = req.body.especialidadRestaurante;
  const direccionRestaurante = req.body.direccionRestaurante;
  const telefonoRestaurante = req.body.telefonoRestaurante;
  const estadoRestaurante = req.body.estadoRestaurante;

  try {
    const restaurante = new Restaurante({
      codigo: codigoRestaurante,
      nombre: nombreRestaurante,
      especialidad: especialidadRestaurante,
      direccion: direccionRestaurante,
      telefono: telefonoRestaurante,
      estado: estadoRestaurante,
    });
    await restaurante.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});



router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  Restaurante.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(restaurante => res.json(restaurante))
    .catch(err => res.status(400).json('Error: ' + err));
})



router.put("/eliminar", async (req, res) => {
  const codigoBusca = req.body.codigoBusca

  try {
    await Restaurante.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, restaurante) => {
      res.json(restaurante);
    });
  }
  catch (err) {
    res.send('error' + err);
  }

})

module.exports = router;