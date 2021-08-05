const router = require("express").Router();
let Cliente = require("../modelos/Cliente");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
    Cliente.find({ estado: { $ne: 'false' }, tipoCliente: "Barra" })
        .then((clientes) => res.json(clientes))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get((req, res) => {

    Consecutivo.find({ nombre: 'clientesBarra' }).select('valorConsecutivo')
        .then((consecutivo) => res.json(consecutivo))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/agregar", async (req, res) => {
    const codigoClienteBarra = req.body.codigoClienteBarra;
    const nombreCompletoClienteBarra = req.body.nombreCompleto;
    const montoPagadoClienteBarra = req.body.montoPagado;
    const restauranteClienteBarra = req.body.restaurante;
    const detalleClienteBarra = req.body.detalle;
    const reservacionClienteBarra = req.body.reservacion;
    const barraClienteBarra = req.body.barra;
    const fechaClienteBarra = req.body.fecha;
    const estadoClienteBarra = req.body.estado;
    const tipoCliente = "Barra";

    try {
        const clienteBarra = new Cliente({
            codigo: codigoClienteBarra,
            nombreCompleto: nombreCompletoClienteBarra,
            restaurante: restauranteClienteBarra,
            detalle: detalleClienteBarra,
            reservacion: reservacionClienteBarra,
            barra: barraClienteBarra,
            fecha: fechaClienteBarra,
            estado: estadoClienteBarra,
            tipoCliente: tipoCliente,
            montoPagado: montoPagadoClienteBarra,
            montoPagado: montoPagadoClienteBarra
        });
        await clienteBarra.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});

router.put("/update", async (req, res) => {
    const codigoActualiza = req.body.codigoActualiza;
    const clienteBarraNuevo = req.body.clienteBarraNuevo;
    const columnaSeleccionada = req.body.columnaSeleccionada;
    try {
        await Pais.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: clienteBarraNuevo }, (err, clienteBarra) => {
            res.json(clienteBarra);

        });
    }
    catch (err) {
        res.send('error' + err);
    }
})


router.route("/buscar").post((req, res) => {
    const codigoBusca = req.body.codigoBusca

    Cliente.find({ codigo: codigoBusca })
        .then(cliente => res.json(cliente))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/eliminar", async (req, res) => {
    const codigoBusca = req.body.codigoBusca

    try {
        await Cliente.findOneAndUpdate({ codigo: codigoBusca }, { estado: false }, (err, cliente) => {
            res.json(cliente);
        });
    }
    catch (err) {
        res.send('error' + err);
    }
})

router.route("/obtenerCodigos").get((req, res) => {
    Cliente.find({}, { codigo: 1, estado: 0 })
        .then(cliente => res.json(cliente))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;