const router = require("express").Router();
let Pais = require("../modelos/Pais");
let Consecutivo = require("../modelos/Consecutivos");
let Bitacora = require("../modelos/Bitacora");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
  Pais.find({ estado: { $ne: 'false' } })
    .then((paises) => res.json(paises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/names").get((req, res) => {
  Pais.find({ estado: { $ne: 'false' } }).select('nombre')
    .then((restaurante) => res.json(restaurante))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get(async (req, res) => {

  Consecutivo.find({ nombre: 'pais' }).select('valorConsecutivo')
    .then((consecutivo) => {
      res.json(consecutivo)
    })
    .catch((err) => res.status(400).json("Error: " + err));


});

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

  //Agregar a bitacora
  //Get current time and date
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;

  var valorConsecutivo;
  //Se obtiene el consecutivo//
  await Consecutivo.find({ nombre: 'bitacora' })
    .then((consecutivo) => {
      valorConsecutivo = parseInt(consecutivo[0].valorConsecutivo) + 1;
    })

  //Se actualiza el consecutivo en la tabla
  await Consecutivo.findOneAndUpdate({ codigo: '24' }, { valorConsecutivo: valorConsecutivo }, (err, consecutivo) => {
  });
  //*********//

  var usuario = req.body.bitacoraUsuario
  var rol_usuario = req.body.bitacoraRol
  var descripcion = "Se inserto el Pais con el codigo " + codigoPais;

  try {
    const bitacora = new Bitacora({
      codigo: "BIT" + valorConsecutivo,
      usuario: usuario,
      rol_usuario: rol_usuario,
      fecha: dateTime,
      descripcion: descripcion
    });
    await bitacora.save();

  } catch (err) {
    console.log(err)
  }

});

router.put("/update", async (req, res) => {
  const codigoActualiza = req.body.codigoActualiza;
  const paisNuevo = req.body.paisNuevo;
  const columnaSeleccionada = req.body.columnaSeleccionada;
  try {
    await Pais.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: paisNuevo }, (err, pais) => {
      res.json(pais);

    });
  }
  catch (err) {
    res.send('error' + err);
  }


  //Agregar a bitacora
  //Get current time and date
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;

  var valorConsecutivo;
  //Se obtiene el consecutivo//
  await Consecutivo.find({ nombre: 'bitacora' })
    .then((consecutivo) => {
      valorConsecutivo = parseInt(consecutivo[0].valorConsecutivo) + 1;
    })

  //Se actualiza el consecutivo en la tabla
  await Consecutivo.findOneAndUpdate({ codigo: '24' }, { valorConsecutivo: valorConsecutivo }, (err, consecutivo) => {
  });
  //*********//

  var usuario = req.body.bitacoraUsuario
  var rol_usuario = req.body.bitacoraRol
  var descripcion = "Se actualizo el Pais con el codigo " + codigoActualiza;

  try {
    const bitacora = new Bitacora({
      codigo: "BIT" + valorConsecutivo,
      usuario: usuario,
      rol_usuario: rol_usuario,
      fecha: dateTime,
      descripcion: descripcion
    });
    await bitacora.save();

  } catch (err) {
    console.log(err)
  }
})


router.route("/buscar").post((req, res) => {
  const codigoBusca = req.body.codigoBusca
  const nombreBusca = req.body.nombreBusca
  Pais.find({ codigo: codigoBusca, nombre: nombreBusca })
    .then(pais => res.json(pais))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {
  const codigoBusca = req.body.codigoBusca

  try {
    await Pais.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, pais) => {
      res.json(pais);
    });
  }
  catch (err) {
    res.send('error' + err);
  }

  //Agregar a bitacora
  //Get current time and date
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;

  var valorConsecutivo;
  //Se obtiene el consecutivo//
  await Consecutivo.find({ nombre: 'bitacora' })
    .then((consecutivo) => {
      valorConsecutivo = parseInt(consecutivo[0].valorConsecutivo) + 1;
    })

  //Se actualiza el consecutivo en la tabla
  await Consecutivo.findOneAndUpdate({ codigo: '24' }, { valorConsecutivo: valorConsecutivo }, (err, consecutivo) => {
  });
  //*********//

  var usuario = req.body.bitacoraUsuario
  var rol_usuario = req.body.bitacoraRol
  var descripcion = "Se elimino el Pais con el codigo " + codigoBusca;

  try {
    const bitacora = new Bitacora({
      codigo: "BIT" + valorConsecutivo,
      usuario: usuario,
      rol_usuario: rol_usuario,
      fecha: dateTime,
      descripcion: descripcion
    });
    await bitacora.save();

  } catch (err) {
    console.log(err)
  }
})

router.route("/obtenerCodigos").get((req, res) => {
  Pais.find({}, { codigo: 1, estado: 0 })
    .then(pais => res.json(pais))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;