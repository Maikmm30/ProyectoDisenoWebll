const router = require("express").Router();
let Caja = require("../modelos/Cajas");
const express = require("express");
const app = express();


router.route("/").get((req, res) => {
  Caja.find({ estado: { $ne: 'false' } })
      .then((caja) => res.json(caja))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/buscar").post((req, res) => {
    const codigoBusca = req.body.codigoBusca
   
    Caja.find({ codigo: codigoBusca})
      .then(caja => res.json(caja))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  
module.exports = router;