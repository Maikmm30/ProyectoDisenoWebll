const router = require("express").Router();
let BebidaGaseosa = require("../modelos/Bebidas_gaseosas");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  BebidaGaseosa.find({ estado: { $ne: 'false' } })
      .then((bebidaGaseosa) => res.json(bebidaGaseosa))
      .catch((err) => res.status(400).json("Error: " + err));
});



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
  const estadoBebidaGaseosa = req.body.estadoBebidaGaseosa;

  try {
    const bebidaGaseosa = new BebidaGaseosa({
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


router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const bebidaNuevo = req.body.bebidaNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await BebidaGaseosa.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: bebidaNuevo }, (err, bebidaGaseosa) => {
      res.json(bebidaGaseosa);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


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