const router = require("express").Router();
let Buffet = require("../modelos/Buffet");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
    Buffet.find({ estado: { $ne: 'false' } })
        .then((buffets) => res.json(buffets))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/names").get((req, res) => {
    Buffet.find({ estado: { $ne: 'false' } }).select('nombre')
      .then((restaurante) => res.json(restaurante))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/precios").get((req, res) => {
Buffet.find({ estado: { $ne: 'false' } }).select('precio')
    .then((restaurante) => res.json(restaurante))
    .catch((err) => res.status(400).json("Error: " + err));
});
  

router.route("/id").get((req, res) => {
  
    Consecutivo.find({nombre: 'buffet'}).select('valorConsecutivo')
        .then((consecutivo) => res.json(consecutivo))
        .catch((err) => res.status(400).json("Error: " + err));
  });
  

router.post("/agregar", async (req, res) => {
    const codigoBuffet = req.body.codigoBuffet;
    const numeroBuffet = req.body.numeroBuffet;
    const nombreBuffet = req.body.nombreBuffet;
    const precioBuffet = req.body.precioBuffet;
    const tipoBuffet = req.body.tipoBuffet;
    const unidadBuffet = req.body.unidadBuffet;
    const estadoBuffet = req.body.estadoBuffet;

    try {
        const buffet = new Buffet({
            codigo: codigoBuffet,
            numero: numeroBuffet,
            nombre: nombreBuffet,
            precio: precioBuffet,
            tipoComida: tipoBuffet,
            unidadMedida: unidadBuffet,
            estado: estadoBuffet
        });
        await buffet.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
        res.status(400).send(error)
    }
});

router.put("/update", async (req, res) => {
    const codigoActualiza = req.body.codigoActualiza;
    const buffetNuevo = req.body.buffetNuevo;
    const columnaSeleccionada = req.body.columnaSeleccionada;
    try {
        await Buffet.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: buffetNuevo }, (err, buffet) => {
            res.json(buffet);

        });
    }
    catch (err) {
        res.send('error' + err);
    }
})


router.route("/buscar").post((req, res) => {
    const codigoBusca = req.body.codigoBusca
    const nombreBusca = req.body.nombreBusca

    Buffet.find({ codigo: codigoBusca, nombre: nombreBusca })
        .then(buffet => res.json(buffet))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route("/buscarNombre").post((req, res) => {
    const nombreBusca = req.body.nombreBusca

    Buffet.find({nombre: nombreBusca }).select('precio')
        .then(buffet => res.json(buffet))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {

    const codigoBusca = req.body.codigoBusca

    try {
        await Buffet.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, buffet) => {
            res.json(buffet);
        });
    }
    catch (err) {
        res.status(400).send(error)
    }
})

module.exports = router;