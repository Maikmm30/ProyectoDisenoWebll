const router = require("express").Router();
let Cliente = require("../modelos/Cliente");
let Consecutivo = require("../modelos/Consecutivos");
const express = require("express");
const app = express();

router.route("/").get((req, res) => {
    Cliente.find({ estado: { $ne: 'false' }, tipoCliente: "Mesa" })
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
    const nombreCompletoClienteMesa = req.body.nombreCompletoClienteMesa;
    const nombreMesaClienteMesa = req.body.nombreMesaClienteMesa;
    const montoPagadoClienteMesa = req.body.montoPagadoClienteMesa;
    const restauranteClienteMesa = req.body.restauranteClienteMesa;
    const detalleClienteMesa = 'Pedido en Mesa';
    const reservacionClienteMesa = req.body.reservacionClienteMesa;
    const barraClienteMesa = false;
    const fechaLlegadaClienteMesa = req.body.fechaLlegadaClienteMesa;
    const fechaReservacionClienteMesa = req.body.fechaReservacionClienteMesa;
    const horaEntradaClienteMesa = req.body.horaEntradaClienteMesa;
    const horaSalidaClienteMesa = req.body.horaSalidaClienteMesa;
    const duracionClienteMesa = req.body.duracionClienteMesa;
    const estadoClienteMesa = true;
    const numeroMesaClienteMesa = req.body.numeroMesaClienteMesa;
    const pedidoSilla1ClienteMesa = req.body.pedidoSilla1ClienteMesa;
    const pedidoSilla2ClienteMesa = req.body.pedidoSilla2ClienteMesa;
    const pedidoSilla3ClienteMesa = req.body.pedidoSilla3ClienteMesa;
    const pedidoSilla4ClienteMesa = req.body.pedidoSilla4ClienteMesa;
    const precioSilla1ClienteMesa = req.body.precioSilla1ClienteMesa;
    const precioSilla2ClienteMesa = req.body.precioSilla2ClienteMesa;
    const precioSilla3ClienteMesa = req.body.precioSilla3ClienteMesa;
    const precioSilla4ClienteMesa = req.body.precioSilla4ClienteMesa;
    const estadoCuentaClienteMesa = req.body.estadoCuentaClienteMesa;
    const ocupadoClienteMesa = false;

    try {
        const clienteMesa = new Cliente({
            codigo: codigoClienteMesa,
            nombreCompleto: nombreCompletoClienteMesa,
            nombreMesa: nombreMesaClienteMesa,
            montoPagado: montoPagadoClienteMesa,
            restaurante: restauranteClienteMesa,
            detalle: detalleClienteMesa,
            reservacion: reservacionClienteMesa,
            barra: barraClienteMesa,
            fechaLlegada: fechaLlegadaClienteMesa,
            fechaReservacion: fechaReservacionClienteMesa,
            horaEntrada: horaEntradaClienteMesa,
            horaSalida: horaSalidaClienteMesa,
            duracion: duracionClienteMesa,
            estado: estadoClienteMesa,
            numeroMesa: numeroMesaClienteMesa,
            pedidoSilla1: pedidoSilla1ClienteMesa,
            pedidoSilla2: pedidoSilla2ClienteMesa,
            pedidoSilla3: pedidoSilla3ClienteMesa,
            pedidoSilla4: pedidoSilla4ClienteMesa,
            precioSilla1: precioSilla1ClienteMesa,
            precioSilla2: precioSilla2ClienteMesa,
            precioSilla3: precioSilla3ClienteMesa,
            precioSilla4: precioSilla4ClienteMesa,
            estadoCuenta: estadoCuentaClienteMesa,
            tipoCliente: 'Mesa',
            ocupado: ocupadoClienteMesa
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
        await Cliente.findOneAndUpdate({ codigo: codigoActualiza }, { [columnaSeleccionada]: clienteMesaNuevo }, (err, clienteMesa) => {
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

router.route("/obtenerOcupado").post((req, res) => {
    const restauranteClienteMesa = req.body.restauranteClienteMesa;

    Cliente.find({ estado: { $ne: 'false' }, tipoCliente: "Mesa", restaurante: restauranteClienteMesa }).select('ocupado').select('nombreMesa')
        .then((oc) => res.json(oc))
        .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/obtenerReservaciones").post((req, res) => {
    const restauranteClienteMesa = req.body.restauranteClienteMesa;

    Cliente.find({ estado: { $ne: 'false' }, tipoCliente: "Mesa", restaurante: restauranteClienteMesa }).select('reservacion')
        .then((oc) => res.json(oc))
        .catch((err) => res.status(400).json("Error: " + err));
});


router.put("/updateMesaDisponible", async (req, res) => {
    const nombreMesaClienteMesa = req.body.nombreMesaClienteMesa;
    const estadoMesaClienteMesa = req.body.estadoMesaClienteMesa;
    const restauranteClienteMesa = req.body.restauranteClienteMesa;
    
    try {
        await Cliente.findOneAndUpdate({ nombreMesa: nombreMesaClienteMesa, restaurante: restauranteClienteMesa }, { ocupado: estadoMesaClienteMesa }).then((nombreMesa) => {
            res.json('update realizado'+nombreMesa);

        }) ;
    }
    catch (err) {
        res.send('error' + err);
    }
})

module.exports = router;