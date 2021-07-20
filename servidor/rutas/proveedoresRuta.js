const router = require("express").Router();
let Proveedor = require("../modelos/Proveedor");
const express = require("express");
const app = express();

router.post("/agregar", async (req, res) => {
  const codigoProveedor = req.body.codigoProveedor;
  const cedulaProveedor = req.body.cedulaProveedor;
  const fechaProveedor = req.body.fechaProveedor;
  const nombreProveedor = req.body.nombreProveedor;
  const primerApellidoProveedor = req.body.primerApellidoProveedor;
  const segundoApellidoProveedor = req.body.segundoApellidoProveedor;
  const direccionProveedor = req.body.direccionProveedor;
  const telefonoOficinaProveedor = req.body.telefonoOficinaProveedor;
  const faxProveedor = req.body.faxProveedor;
  const celularProveedor = req.body.celularProveedor;
  const estadoProveedor = req.body.estadoProveedor;

  try {
    const proveedor = new Proveedor({
      codigo: codigoProveedor,
      cedula: cedulaProveedor,
      fecha: fechaProveedor,
      nombre: nombreProveedor,
      primerApellido: primerApellidoProveedor,
      segundoApellido: segundoApellidoProveedor,
      direccion: direccionProveedor,
      telefonoOficina: telefonoOficinaProveedor,
      fax: faxProveedor,
      celular: celularProveedor, 
      estado: estadoProveedor,
    });
    await proveedor.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const proveedorNuevo = req.body.proveedorNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Proveedor.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: proveedorNuevo }, (err, proveedor) => {
      res.json(proveedor);

    });
  }
  catch (err) {
    res.status(400).send(error)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca

  Proveedor.find({ codigo: codigoBusca, nombre: nombreBusca })
      .then(proveedor => res.json(proveedor))
      .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

  const codigoBusca = req.body.codigoBusca

  try {
      await Proveedor.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, proveedor) => {
          res.json(proveedor);
      });
  }
  catch (err) {
      res.send('error' + err);
  }
})

module.exports = router;