
const router = require("express").Router();
let Cliente = require("../modelos/Cliente");
const express = require("express");
const app = express();


router.route("/").get((req, res) => {
    Cliente.find({ estado: { $ne: 'false' }})
      .then((cliente) => res.json(cliente))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  
  

  router.route("/cuentaClientes").get((req, res) => {
    Cliente.count({})
      .then((cliente) => res.json(cliente))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  
module.exports = router;