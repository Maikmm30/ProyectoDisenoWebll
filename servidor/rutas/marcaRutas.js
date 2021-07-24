const router = require("express").Router();
let Marca = require("../modelos/Marca");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  Marca.find({ estado: { $ne: 'false' } })
    .then((marca) => res.json(marca))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/names").get((req, res) => {
  Marca.find({ estado: { $ne: 'false' } }).select('nombre')
    .then((restaurante) => res.json(restaurante))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get((req, res) => {
  
  Consecutivo.find({nombre: 'marca'}).select('valorConsecutivo')
      .then((consecutivo) => res.json(consecutivo))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/agregar", async (req, res) => {
  const codigoMarca = req.body.codigoMarca;
  const numeroMarca = req.body.numeroMarca;
  const nombreMarca = req.body.nombreMarca;
  const nacionalidadMarca = req.body.nacionalidadMarca;
  const descripcionMarca = req.body.descripcionMarca;
  const cedulaJuridicaMarca = req.body.cedulaJuridicaMarca;
  const empresaMarca = req.body.empresaMarca;
  const detalleEmpresaMarca = req.body.detalleEmpresaMarca;
  const telefonoEmpresaMarca = req.body.telefonoEmpresaMarca;
  const estadoMarca = req.body.estadoMarca;

  try {
    const marca = new Marca({
      codigo: codigoMarca,
      nombre: numeroMarca,
      nombre: nombreMarca,
      nacionalidad: nacionalidadMarca,
      descripcion: descripcionMarca,
      cedulaJuridica: cedulaJuridicaMarca,
      empresa: empresaMarca,
      detalle: detalleEmpresaMarca,
      telefono: telefonoEmpresaMarca,
      estado: estadoMarca,
    });
    await marca.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

  
  /*router.put("/update", async (req, res) => {
    const codigoActualiza = req.body.codigoActualiza;
    const marcaNuevo = req.body.marcaNuevo;
    const columnaSeleccionada = req.body.columnaSeleccionada;
    try {
      await Marca.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: marcaNuevo }, (err, marca) => {
        res.json(marca);
  
      });
    }
    catch (err) {
      res.status(400).send(error)
    }
  })
  
  
  router.route("/buscar").post((req, res) => {
    const codigoBusca = req.body.codigoBusca
    const nombreBusca = req.body.nombreBusca
  
    Marca.find({ codigo: codigoBusca, nombre: nombreBusca })
        .then(marca => res.json(marca))
        .catch(err => res.status(400).json('Error: ' + err));
  })*/
router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const marcaNuevo = req.body.marcaNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Marca.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: marcaNuevo }, (err, marca) => {
      res.json(marca);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  Marca.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(marca => res.json(marca))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {
  const codigoBusca = req.body.codigoBusca

  try {
    await Marca.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, marca) => {
      res.json(marca);
    });
  }
  catch (err) {
    res.send('error' + err);
  }
})



module.exports = router;