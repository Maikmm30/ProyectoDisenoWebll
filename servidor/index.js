const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json())

const paisRutas = require('./rutas/paisRuta')
const bebidaCalienteRutas = require('./rutas/bebidaCalienteRuta')
const login = require('./rutas/loginRuta')
const bebidaGaseosaRutas = require('./rutas/bebidaGaseosaRuta');
const bebidaHeladaRutas = require('./rutas/bebidaHeladaRuta');
const bebidaLicorRutas = require('./rutas/bebidaLicorRuta');
const bebidaVinoRutas = require('./rutas/bebidaVinoRuta');
const comestibleRutas = require('./rutas/comestiblesRuta');
const consecutivosRutas = require('./rutas/consecutivosRuta');
const empaquesRutas = require('./rutas/empaqueRuta');
const especialidadesRuta = require('./rutas/especialidadRuta');
const limpiezaRuta = require('./rutas/limpiezaRuta');
const proveedoresRuta = require('./rutas/proveedoresRuta');
const puestosRutas = require('./rutas/puestoRuta');
const restauranteRutas = require('./rutas/restauranteRuta');
const rolesRutas = require('./rutas/rolesRuta');
const utensilioRutas = require('./rutas/utensiliosRuta');
const unidadMedidaRutas = require('./rutas/unidadMedidaRuta');
const mesasRutas = require('./rutas/unidadMedidaRuta');
const ayudaSistemaRutas = require('./rutas/ayudaSistemaRuta');
const buffetRutas = require('./rutas/buffetRuta');

app.use('/paises', paisRutas);
app.use('/administracion/especiales/bebidas/calientes/', bebidaCalienteRutas);
app.use('/login', login);
app.use('/administracion/especiales/bebidas/gaseosas/', bebidaGaseosaRutas);
app.use('/administracion/especiales/bebidas/helada/', bebidaHeladaRutas);
app.use('/administracion/especiales/bebidas/licores/', bebidaLicorRutas);
app.use('/administracion/especiales/bebidas/vinos/', bebidaVinoRutas);
app.use('/comestibles/', comestibleRutas);
app.use('/consecutivos/', consecutivosRutas);
app.use('/empaques/', empaquesRutas);
app.use('/administracion/especiales/especialidades/', especialidadesRuta);
app.use('/limpieza', limpiezaRuta);
app.use('/proveedores', proveedoresRuta);
app.use('/puestos', puestosRutas);
app.use('/restaurantes', restauranteRutas);
app.use('/roles', rolesRutas);
app.use('/utensilio', utensilioRutas);
app.use('/unidadMedida', unidadMedidaRutas);
app.use('/mesas', mesasRutas);
app.use('/ayuda-sistema', ayudaSistemaRutas);
app.use('/buffets', buffetRutas);





mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://dbAdmin:Admin$db1@cluster0.oznix.mongodb.net/ProyectoDiseno?retryWrites=true&w=majority', {
  useNewUrlParser: true
})
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("****Conectado a la base de datos****");
})

app.listen(3001, () => {

  console.log('Server running on port 3001...')
})
