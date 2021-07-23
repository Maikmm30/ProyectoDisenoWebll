const router = require("express").Router();
let Marca = require("../modelos/Marca");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  Marca.find({ estado: { $ne: 'false' } })
      .then((marca) => res.json(marca))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/names").get((req, res) => {
  Marca.find({ estado: { $ne: 'false' } }).select('nombre')
    .then((restaurante) => res.json(restaurante))
    .catch((err) => res.status(400).json("Error: " + err));
});
  
  router.put("/update", async (req, res) => {
    const codigoActualiza = req.body.codigoActualiza;
    const marcaNuevo = req.body.marcaNuevo;
    const columnaSeleccionada = req.body.columnaSeleccionada;
    try {
      await Marca.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: marcaNuevo }, (err, marca) => {
        res.json(marca);
  
      });
    }
    catch (err) {
      res.status(400).send(error)
    }
  })
  
  
  router.route("/buscar").post((req, res) => {
    const codigoBusca = req.body.codigoBusca
    const nombreBusca = req.body.nombreBusca
  
    Marca.find({ codigo: codigoBusca, nombre: nombreBusca })
        .then(marca => res.json(marca))
        .catch(err => res.status(400).json('Error: ' + err));
  })


module.exports = router;