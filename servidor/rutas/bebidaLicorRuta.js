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
      res.send('error' + err);
  }
})

module.exports = router;