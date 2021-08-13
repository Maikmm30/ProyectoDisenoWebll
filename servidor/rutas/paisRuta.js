const router = require("express").Router();
let Pais = require("../modelos/Pais");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  Pais.find({ estado: { $ne: 'false' } })
    .then((paises) => res.json(paises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/names").get((req, res) => {
  Pais.find({ estado: { $ne: 'false' } }).select('nombre')
    .then((restaurante) => res.json(restaurante))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get(async (req, res) => {

  Consecutivo.find({ nombre: 'pais' }).select('valorConsecutivo')
    .then((consecutivo) => {
      res.json(consecutivo)
    })
    .catch((err) => res.status(400).json("Error: " + err));


});

router.post("/agregar", async (req, res) => {
  const nombrePais = req.body.nombrePais;
  const codigoPais = req.body.codigoPais;
  const estadoPais = req.body.estadoPais;

  try {
    const pais = new Pais({
      codigo: codigoPais,
      nombre: nombrePais,
      estado: estadoPais,
    });
    await pais.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const paisNuevo = req.body.paisNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Pais.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: paisNuevo }, (err, pais) => {
      res.json(pais);

    });
  }
  catch (err) {
    res.send('error' + err);
  }

})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca
  Pais.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(pais => res.json(pais))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {
  const codigoBusca = req.body.codigoBusca

  try {
    await Pais.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, pais) => {
      res.json(pais);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})

router.route("/obtenerCodigos").get((req, res) => {
  Pais.find({}, { codigo: 1, estado: 0 })
    .then(pais => res.json(pais))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;