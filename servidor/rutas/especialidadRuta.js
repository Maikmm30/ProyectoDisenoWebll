const router = require("express").Router();
let Especialidades = require("../modelos/Especialidades");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoEspecialidad = req.body.codigoEspecialidad;
  const nombreEspecialidad = req.body.nombreEspecialidad;
  const ingredientesEspecialidad = req.body.ingredientesEspecialidad;
  const precioEspecialidad = req.body.precioEspecialidad;
  const detalleEspecialidad = req.body.detalleEspecialidad;
  const restauranteEspecialidad = req.body.restauranteEspecialidad;
  const estadoEspecialidad = req.body.estadoEspecialidad;

  try {
    const especialidad = new Especialidades({
      codigo: codigoEspecialidad,
      nombre: nombreEspecialidad,
      ingredientes: ingredientesEspecialidad,
      precio: precioEspecialidad,
      detalle: detalleEspecialidad,
      restaruante: restauranteEspecialidad,
      estado: estadoEspecialidad,
    });
    await especialidad.save();
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

  Especialidad.find({ codigo: codigoBusca, nombre: nombreBusca })
      .then(especialidad => res.json(especialidad))
      .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
      await Especialidad.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, especialidad) => {
          res.json(especialidad);
      });
  }
  catch (err) {
      res.send('error' + err);
  }
})

module.exports = router;