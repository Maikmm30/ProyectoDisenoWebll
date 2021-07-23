const router = require("express").Router();
let Tecnologia = require("../modelos/Tecnologia");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  Tecnologia.find({ estado: { $ne: 'false' } })
      .then((tecnologia) => res.json(tecnologia))
      .catch((err) => res.status(400).json("Error: " + err));
});
  
router.route("/id").get((req, res) => {
  
  Consecutivo.find({nombre: 'tecnologia'}).select('valorConsecutivo')
      .then((consecutivo) => res.json(consecutivo))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/agregar", async (req, res) => {
  const codigoTecnologia = req.body.codigoTecnologia;
  const nombreTecnologia = req.body.nombreTecnologia;
  const cantidadTecnologia = req.body.cantidadTecnologia;
  const restauranteTecnologia = req.body.restauranteTecnologia;
  const marcaTecnologia = req.body.marcaTecnologia;
  const descripcionTecnologia = req.body.descripcionTecnologia;
  const estadoTecnologia = req.body.estadoTecnologia;

  try {
    const tecnologia = new Tecnologia({
      codigo: codigoTecnologia,
      nombre: nombreTecnologia,
      cantidad: cantidadTecnologia,
      restaurante: restauranteTecnologia,
      marca: marcaTecnologia,
      decripcion: descripcionTecnologia,
      estado: estadoTecnologia
    });
    await tecnologia.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const tecnologiaNuevo = req.body.tecnologiaNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Tecnologia.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: tecnologiaNuevo }, (err, tecnologia) => {
      res.json(tecnologia);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  Tecnologia.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(tecnologia => res.json(tecnologia))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
    await Tecnologia.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, tecnologia) => {
      res.json(tecnologia);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})

module.exports = router;