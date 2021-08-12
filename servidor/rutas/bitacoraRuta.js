const router = require("express").Router();
let Bitacora = require("../modelos/Bitacora");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();

router.route("/id").get((req, res) => {
  
  Consecutivo.find({nombre: 'bitacora'}).select('valorConsecutivo')
      .then((consecutivo) => res.json(consecutivo))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/agregar", async (req, res) => {

    var valorConsecutivo;
    //Se obtiene el consecutivo//
    await Consecutivo.find({ nombre: 'bitacora' })
        .then((consecutivo) => {
        valorConsecutivo = parseInt(consecutivo[0].valorConsecutivo) + 1;
    })

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;


    const codigoBitacora = 'BIT'+valorConsecutivo;
    const usuarioBitacora = req.body.usuarioBitacora;
    const rolBitacora = req.body.rolBitacora;
    const fechaBitacora = dateTime;
    const descripcionBitacora = req.body.descripcionBitacora;

    try {
        const bitacora = new Bitacora({
        codigo: codigoBitacora,
        usuario: usuarioBitacora,
        rol_usuario: rolBitacora,
        fecha: fechaBitacora,
        descripcion: descripcionBitacora,
        });
        await bitacora.save();
        await Consecutivo.findOneAndUpdate({ codigo: '24' }, { valorConsecutivo: valorConsecutivo }, (err, consecutivo) => {
        });
        res.send("inserted data");
    } catch (err) {
        console.log(err);
        res.status(400).send(error)
    }
});

module.exports = router;