const router = require("express").Router();
let Cliente = require("../modelos/Cliente");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
    Cliente.find({ estado: { $ne: 'false' } })
        .then((clientes) => res.json(clientes))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/id").get((req, res) => {

    Consecutivo.find({ nombre: 'clientesMesa' }).select('valorConsecutivo')
        .then((consecutivo) => res.json(consecutivo))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/agregar", async (req, res) => {
    const codigoClienteMesa = req.body.codigoClienteMesa;
    const nombreCompletoClienteMesa = req.body.nombreCompleto;
    const montoPagadoClienteMesa = req.body.montoPagado;
    const restauranteClienteMesa = req.body.restaurante;
    const detalleClienteMesa = req.body.detalle;
    const reservacionClienteMesa = req.body.reservacion;
    const barraClienteMesa = req.body.barra;
    const fechaClienteMesa = req.body.fecha;
    const estadoClienteMesa = req.body.estado;
    const tipoClienteClienteMesa = req.body.tipoCliente;

    try {
        const clienteMesa = new Cliente({
            codigo: codigoClienteMesa,
            nombreCompleto: nombreCompletoClienteMesa,
            restaurante: restauranteClienteMesa,
            detalle: detalleClienteMesa,
            reservacion: reservacionClienteMesa,
            barra: barraClienteMesa,
            fecha: fechaClienteMesa,
            estado: estadoClienteMesa,
            tipoCliente: tipoClienteClienteMesa,
            montoPagado: montoPagadoClienteMesa,
            montoPagado: montoPagadoClienteMesa
        });
        await clienteMesa.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});

router.put("/update", async (req, res) => {
    const codigoActualiza = req.body.codigoActualiza;
    const clienteMesaNuevo = req.body.clienteMesaNuevo;
    const columnaSeleccionada = req.body.columnaSeleccionada;
    try {
        await Pais.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: clienteMesaNuevo }, (err, clienteMesa) => {
            res.json(clienteMesa);

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