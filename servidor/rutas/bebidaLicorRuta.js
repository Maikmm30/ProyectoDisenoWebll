const router = require("express").Router();
let BebidasLicores = require("../modelos/Bebidas_licores");
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
    const bebidaLicor = new BebidasLicores({
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
    console.log(err);
  }
});

module.exports = router;