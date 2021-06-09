import "./App.css";
import Navbar from "./Componentes/Navbar";
import Home from "./Componentes/Home";
import AgregarClientesMesas from "./Componentes/AgregarClientesMesas";
import ClientesMesas from "./Componentes/ClientesMesas";
import Seguridad from "./Componentes/Seguridad";
import AgregarUsuarios from "./Componentes/AgregarUsuarios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Tecnologia from "./Componentes/Tecnologia";
import AgregarTecnologia from "./Componentes/AgregarTecnologia";
import Usuarios from "./Componentes/Usuarios";
import Proveedores from "./Componentes/Proveedores";
import Consecutivos from "./Componentes/Consecutivos";
import AgregarConsecutivos from "./Componentes/AgregarConsecutivos";
import Paises from "./Componentes/Paises";
import AgregarPaises from "./Componentes/AgregarPaises";
import Cajas from "./Componentes/Cajas";
import Roles from "./Componentes/Roles";
import AgregarRoles from "./Componentes/AgregarRoles";
import UnidadMedida from "./Componentes/UnidadMedida";
import AgregarUnidadMedida from "./Componentes/AgregarUnidadMedida";
import AperturaCajas from "./Componentes/AperturaCajas";
import Login from "./Componentes/Login"; 
import AyudaSistema from "./Componentes/AyudaSistema"; 
import AyudaSeguridad from "./Componentes/AyudaSeguridad"; 
import AyudaRestaurante from "./Componentes/AyudaRestaurante"; 
import AyudaLicores from "./Componentes/AyudaLicores"; 
import AyudaVinos from "./Componentes/AyudaVinos"; 


function App() {
  return (
    <Router>
       <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/agregarClientesMesas" component={AgregarClientesMesas} />
        <Route path="/clientesMesas" component={ClientesMesas} />
        <Route path="/seguridad" component={Seguridad} />
        <Route path="/agregarUsuarios" component={AgregarUsuarios} />
        <Route path="/usuarios" component={Usuarios} />
        <Route path="/consecutivos" component={Consecutivos} />
        <Route path="/agregarConsecutivos" component={AgregarConsecutivos} />
        <Route path="/paises" component={Paises} />
        <Route path="/agregarPaises" component={AgregarPaises} />
        <Route path="/cajas" component={Cajas} />
        <Route path="/roles" component={Roles} />
        <Route path="/agregarRoles" component={AgregarRoles} />
        <Route path="/unidadMedida" component={UnidadMedida} />
        <Route path="/agregarUnidadMedida" component={AgregarUnidadMedida} />
        <Route path="/aperturaCajas" component={AperturaCajas} />


        <Route path="/tecnologia" component={Tecnologia} />
        <Route path="/agregarTecnologia" component={AgregarTecnologia} />

        <Route path="/proveedores" component={Proveedores} />
        <Route path="/login" component={Login} />
        <Route path="/ayuda-sistema" component={AyudaSistema} />
        <Route path="/ayuda-seguridad" component={AyudaSeguridad} />
        <Route path="/ayuda-restaurante" component={AyudaRestaurante} />
        <Route path="/ayuda-licores" component={AyudaLicores} />
        <Route path="/ayuda-vinos" component={AyudaVinos} />
        
      </Switch>
    </Router>
  );
}

export default App;
