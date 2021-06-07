import "./App.css";
import Navbar from "./Componentes/Navbar";
import Home from "./Componentes/Home";
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
        <Route path="/clientesM" component={ClientesMesas} />

        <Route path="/seguridad" component={Seguridad} />
        <Route path="/agregarUsuarios" component={AgregarUsuarios} />
        <Route path="/usuarios" component={Usuarios} />


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
