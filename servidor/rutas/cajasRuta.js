const router = require("express").Router();
let Caja = require("../modelos/Cajas");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();


router.route("/").get((req, res) => {
  Caja.find({ estado: { $ne: 'false' } })
      .then((caja) => res.json(caja))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get((req, res) => {
  
  Consecutivo.find({nombre: 'caja'}).select('valorConsecutivo')
      .then((consecutivo) => res.json(consecutivo))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/agregar", async (req, res) => {
  const codigoCaja = req.body.codigoCaja;
  const fechaCaja = req.body.fechaCaja;
  const descripcionCaja = req.body.descripcionCaja;
  const restauranteCaja = req.body.restauranteCaja;
  const entradaDineroCaja = req.body.entradaDineroCaja;
  const aperturaCaja = req.body.aperturaCaja;
  const cierreCaja = req.body.cierreCaja;
  const estadoCaja = req.body.estadoCaja;

  try {
    const caja = new Caja({
      codigo: codigoCaja,
      fecha: fechaCaja,
      descripcion: descripcionCaja,
      restaurante: restauranteCaja,
      entradaDinero: entradaDineroCaja,
      aperturaCaja: aperturaCaja,
      cierreCaja: cierreCaja,
      estado: estadoCaja,
    });
    await caja.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.route("/buscar").post((req, res) => {
    const codigoBusca = req.body.codigoBusca
   
    Caja.find({ codigo: codigoBusca})
      .then(caja => res.json(caja))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  
module.exports = router;