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

    Consecutivo.find({ nombre: 'cliente' }).select('valorConsecutivo')
        .then((consecutivo) => res.json(consecutivo))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/agregar", async (req, res) => {
    console.log("AGREGAR")
    const codigoClienteBarra = req.body.codigoClienteBarra;
    const nombreCompletoClienteBarra = req.body.nombreCompletoClienteBarra;
    //const nombreMesaClienteBarra = req.body.nombreMesaClienteBarra;
    const nombreMesaClienteBarra = 'Barra Silla';
    const montoPagadoClienteBarra = req.body.montoPagadoClienteBarra;
    const restauranteClienteBarra = req.body.restauranteClienteBarra;
    //const detalleClienteBarra = req.body.detalleClienteBarra;
    const detalleClienteBarra = 'Pedido en la Barra';
    //const reservacionClienteBarra = req.body.reservacionClienteBarra;
    const reservacionClienteBarra = false;
    //const barraClienteBarra = req.body.barraClienteBarra;
    const barraClienteBarra = true;
    //const fechaClienteBarra = req.body.fechaClienteBarra;
    const fechaClienteBarra = req.body.fechaClienteBarra;
    const horaEntradaClienteBarra = req.body.horaEntradaClienteBarra;
    const horaSalidaClienteBarra = req.body.horaSalidaClienteBarra;
    const duracionClienteBarra = req.body.duracionClienteBarra;
    const estadoClienteBarra = true;
    const pedidoClienteBarra = req.body.pedidoClienteBarra;
    const numeroSillaClienteBarra = req.body.numeroSillaClienteBarra;
    const precioClienteBarra = req.body.precioClienteBarra;
    const ocupadoClienteMesa = false;
    const estadoCuentaClienteBarra = req.body.estadoCuentaClienteBarra;


    try {
        console.log("AGREGAR")
        const cliente = new Cliente({
            codigo: codigoClienteBarra,
            nombreCompleto: nombreCompletoClienteBarra,
            nombreMesa: nombreMesaClienteBarra,
            montoPagado: montoPagadoClienteBarra,
            restaurante: restauranteClienteBarra,
            detalle: detalleClienteBarra,
            reservacion: reservacionClienteBarra,
            barra: barraClienteBarra,
            fechaLlegada: fechaClienteBarra,
            horaEntrada: horaEntradaClienteBarra,
            horaSalida: horaSalidaClienteBarra,
            duracion: duracionClienteBarra,
            estado: estadoClienteBarra,
            pedidoBarra: pedidoClienteBarra,
            precioBarra: precioClienteBarra,
            numeroSillaBarra: numeroSillaClienteBarra,
            tipoCliente: 'Barra',
            ocupado: ocupadoClienteMesa,
            estadocuenta: estadoCuentaClienteBarra
        });
        await cliente.save();
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
        await Cliente.findOneAndUpdate({ codigo: codigoActualiza,  }, { [columnaSeleccionada]: clienteBarraNuevo }, (err, clienteBarra) => {
            res.json(clienteBarra);

        });
    }
    catch (err) {
        res.send('error' + err);
    }
})

router.put("/updateSillaDisponible", async (req, res) => {
    const numeroSillaClienteBarra = req.body.numeroSillaClienteBarra;
    const estadoSillaCliente = req.body.estadoSillaCliente;
    const restauranteClienteBarra = req.body.restauranteClienteBarra;
    
    try {
        await Cliente.findOneAndUpdate({ numeroSillaBarra: numeroSillaClienteBarra, restaurante: restauranteClienteBarra }, { ocupado: estadoSillaCliente }).then((numeroSilla) => {
            res.json('update realizado '+numeroSilla);

        }) ;
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
    const restauranteClienteBarra = req.body.restauranteClienteBarra;

    Cliente.find({ estado: { $ne: 'false' }, tipoCliente: "Barra", restaurante: restauranteClienteBarra }).select('ocupado').select('numeroSillaBarra')
        .then((oc) => res.json(oc))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;