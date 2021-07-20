const router = require("express").Router();
let BebidasGaseosas = require("../modelos/Bebidas_gaseosas");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoBebidaGaseosa = req.body.codigoBebidaGaseosa;
  const nombreBebidaGaseosa = req.body.nombreBebidaGaseosa;
  const marcaBebidaGaseosa = req.body.marcaBebidaGaseosa;
  const nacionalidadBebidaGaseosa = req.body.nacionalidadBebidaGaseosa;
  const precioBebidaGaseosa = req.body.precioBebidaGaseosa;
  const restauranteBebidaGaseosa = req.body.restauranteBebidaGaseosa;
  const cantidadBebidaGaseosa = req.body.cantidadBebidaGaseosa;
  const descripcionBebidaGaseosa = req.body.descripcionBebidaGaseosa;
  //const imagenBebidaGaseosa = ;
  const estadoBebidaGaseosa = req.body.estadoBebidaCaliente;

  try {
    const bebidaGaseosa = new BebidasGaseosas({
      codigo: codigoBebidaGaseosa,
      nombre: nombreBebidaGaseosa,
      marca: marcaBebidaGaseosa,
      nacionalidad: nacionalidadBebidaGaseosa,
      precio: precioBebidaGaseosa,
      restaurante: restauranteBebidaGaseosa,
      cantidad: cantidadBebidaGaseosa,
      descipcion: descripcionBebidaGaseosa,
      estado: estadoBebidaGaseosa,
    });
    await bebidaGaseosa.save();
    res.send("inserted data");
  } catch (err) {
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

  BebidaGaseosa.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(bebidaGaseosa => res.json(bebidaGaseosa))
    .catch(err => res.status(400).json('Error: ' + err));
})



router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
    await BebidaGaseosa.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, bebidaGaseosa) => {
      res.json(bebidaGaseosa);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})

module.exports = router;