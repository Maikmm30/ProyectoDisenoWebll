const router = require("express").Router();
let BebidaLicor = require("../modelos/Bebidas_licores");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoBebidaLicor = req.body.codigoBebidaLicor;
  const nombreBebidaLicor = req.body.nombreBebidaLicor;
  const marcaBebidaLicor = req.body.marcaBebidaLicor;
  const nacionalidadBebidaLicor = req.body.nacionalidadBebidaLicor;
  const tipoVentaBebidaLicor = req.body.tipoVentaBebidaLicor;
  const precioUnitarioBebidaLicor = req.body.precioUnitarioBebidaLicor;
  const precioBotellaBebidaLicor = req.body.precioBotellaBebidaLicor;
  const restauranteBebidaLicor = req.body.restauranteBebidaLicor;
  const cantidadBebidaLicor = req.body.cantidadBebidaLicor;
  const descripcionBebidaLicor = req.body.descripcionBebidaLicor;
  //const imagenBebidaGaseosa = ;
  const estadoBebidaLicor = req.body.estadoBebidaLicor;

  try {
    const bebidaLicor = new BebidaLicor({
      codigo: codigoBebidaLicor,
      nombre: nombreBebidaLicor,
      marca: marcaBebidaLicor,
      nacionalidad: nacionalidadBebidaLicor,
      tipVenta: tipoVentaBebidaLicor,
      precioUnitario: precioUnitarioBebidaLicor,
      precioBotella: precioBotellaBebidaLicor,
      restaurante: restauranteBebidaLicor,
      cantidad: cantidadBebidaLicor,
      descipcion: descripcionBebidaLicor,
      estado: estadoBebidaLicor,
    });
    await bebidaLicor.save();
    res.send("inserted data");
  } catch (err) {
    res.status(400).send(error)
    console.log(err);
  }
});


router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const bebidaLicorNuevo = req.body.bebidaLicorNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await BebidaLicor.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: bebidaLicorNuevo }, (err, bebidaLicor) => {
      res.json(bebidaLicor);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  BebidaLicor.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(bebidaLicor => res.json(bebidaLicor))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
    await BebidaLicor.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, bebidaLicor) => {
      res.json(bebidaLicor);
    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})

module.exports = router;