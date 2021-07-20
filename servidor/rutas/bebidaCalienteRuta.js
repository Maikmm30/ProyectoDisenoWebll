const router = require("express").Router();
let BebidasCaliente = require("../modelos/Bebidas_calientes");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoBebidaCaliente = req.body.codigoBebidaCaliente;
  const nombreBebidaCaliente = req.body.nombreBebidaCaliente;
  const ingredientesBebidaCaliente = req.body.ingredientesBebidaCaliente;
  const precioBebidaCaliente = req.body.precioBebidaCaliente;
  const restauranteBebidaCaliente = req.body.restauranteBebidaCaliente;
  const estadoBebidaCaliente = req.body.estadoBebidaCaliente;

  try {
    const bebidaCaliente = new BebidasCaliente({
      codigo: codigoBebidaCaliente,
      nombre: nombreBebidaCaliente,
      ingredientes: ingredientesBebidaCaliente,
      precio: precioBebidaCaliente,
      restaurante: restauranteBebidaCaliente,
      estado: estadoBebidaCaliente,
    });
    await bebidaCaliente.save();
    res.send("inserted data");
  } catch (err) {
    res.status(400).send(error)
    console.log(err);
  }
});


/*router.put("/update", async (req, res) => {
  const paisActualiza = req.body.paisActualiza;
  const paisNuevo = req.body.paisNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try{
  await Pais.findOneAndUpdate({[columnaSeleccionada] : paisActualiza}, {[columnaSeleccionada] : paisNuevo} , (err, pais)=>{
    res.json(pais);

  });
  }
  catch(err){
    res.send('error'+ err);
  }
})*/


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  BebidaCaliente.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(bebidaCaliente => res.json(bebidaCaliente))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {
  const codigoBusca = req.body.codigoBusca
  try {
    await BebidaCaliente.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, bebidaCaliente) => {
      res.json(bebidaCaliente);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})

module.exports = router;