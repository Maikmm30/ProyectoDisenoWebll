import "./App.css";
import Navbar from "./Componentes/Navbar";
import Home from "./Componentes/Home";
import ClientesMesas from "./Componentes/ClientesMesas";
import Seguridad from "./Componentes/Seguridad";
import Usuarios from "./Componentes/Usuarios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Tecnologia from "./Componentes/Tecnologia";
import AgregarTecnologia from "./Componentes/AgregarTecnologia";
import VentanaProveedores from "./Componentes/VentanaProveedores";
import ListaMarcas from "./Componentes/ListaMarcas";
import Marcas from "./Componentes/Marcas";
import CatalogoProductos from "./Componentes/CatalogoProductos";
import Comestibles from "./Componentes/Comestibles";
import AgregarComestibles from "./Componentes/AgregarComestibles";
import Empaques from "./Componentes/Empaques";
import AgregarEmpaques from "./Componentes/AgregarEmpaque";
import Limpieza from "./Componentes/Limpieza";
import AgregarLimpieza from "./Componentes/AgregarLimpieza";
import Utensilio from "./Componentes/Utensilio";
import AgregarUtensilios from "./Componentes/AgregarUtensilios";
import Proveedores from "./Componentes/Proveedores";
import VentanaReportes from "./Componentes/VentanaReportes";
import Bitacora from "./Componentes/Bitacora";

function App() {
  return (
    <Router>
       <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/clientesM" component={ClientesMesas} />

        <Route path="/seguridad" component={Seguridad} />
        <Route path="/usuarios" component={Usuarios} />

        <Route path="/tecnologia" component={Tecnologia} />
        <Route path="/agregarTecnologia" component={AgregarTecnologia} />
        <Route path="/ventanaProveedores" component={VentanaProveedores} />
        <Route path="/listaMarcas" component={ListaMarcas} />
        <Route path="/marcas" component={Marcas}/>
        <Route path="/catalogoProductos" component={CatalogoProductos}/>
        <Route path="/comestibles" component={Comestibles}/>
        <Route path="/agregarComestibles" component={AgregarComestibles}/>
        <Route path="/empaques" component={Empaques}/>
        <Route path="/agregarEmpaques" component={AgregarEmpaques}/>
        <Route path="/limpieza" component={Limpieza}/>
        <Route path="/agregarLimpieza" component={AgregarLimpieza}/>
        <Route path="/utensilio" component={Utensilio}/>
        <Route path="/agregarUtensilio" component={AgregarUtensilios}/>
        <Route path="/proveedores" component={Proveedores}/>
        <Route path="/ventanaReportes" component={VentanaReportes}/>
        <Route path="/bitacora" component={Bitacora}/>



      </Switch>
    </Router>
  );
}

export default App;
