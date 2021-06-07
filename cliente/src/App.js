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
import Consecutivos from "./Componentes/Consecutivos";
import AgregarConsecutivos from "./Componentes/AgregarConsecutivos";
import Paises from "./Componentes/Paises";
import AgregarPaises from "./Componentes/AgregarPaises";

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
        <Route path="/consecutivos" component={Consecutivos} />
        <Route path="/agregarConsecutivos" component={AgregarConsecutivos} />
        <Route path="/paises" component={Paises} />
        <Route path="/agregarPaises" component={AgregarPaises} />

        <Route path="/tecnologia" component={Tecnologia} />
        <Route path="/agregarTecnologia" component={AgregarTecnologia} />

        <Route path="/proveedores" component={Proveedores} />

      </Switch>
    </Router>
  );
}

export default App;
