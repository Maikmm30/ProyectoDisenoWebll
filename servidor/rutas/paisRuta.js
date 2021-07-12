const router = require("express").Router();
let Pais = require("../modelos/Pais");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  Pais.find()
    .then((paises) => res.json(paises))
    .catch((err) => res.status(400).json("Error: " + err));
});

/*router.route('/buscar').get((req,res) => {
  console.log(req.body.nombrePais);
  Pais.find({nombre:req.body.nombrePais})
    .then(pais=>res.json(pais))
    .catch(err => res.status(400).json('Error: ' + err));
})*/

/*router.route('/agregar').post((req, res, next) => {
  Pais.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});*/

router.post("/agregar", async (req, res) => {
  const nombrePais = req.body.nombrePais;
  const codigoPais = req.body.codigoPais;
  const estadoPais = req.body.estadoPais;

  try {
    const pais = new Pais({
      codigo: codigoPais,
      nombre: nombrePais,
      estado: estadoPais,
    });
    await pais.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.put("/update", async (req, res) => {
  const paisActualiza = req.body.paisActualiza;
  const paisNuevo = req.body.paisNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try{
  await Pais.findOneAndUpdate({[columnaSeleccionada] : paisActualiza}, {[columnaSeleccionada] : paisNuevo} , (err, pais)=>{
    res.json(pais);

  });
  }
  catch(err){
    res.send('error');
  }
})
/*
// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
*/
module.exports = router;