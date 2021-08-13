import "./App.css";
import Navbar from "./Componentes/Navbar";
import Home from "./Componentes/Home";
import AgregarClientesMesas from "./Componentes/AgregarClientesMesas";
import ClientesMesas from "./Componentes/ClientesMesas";
import Seguridad from "./Componentes/Seguridad";
import AgregarUsuarios from "./Componentes/AgregarUsuarios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Restaurantes from "./Componentes/Restaurantes";
import AgregarRestaurante from "./Componentes/AgregarRestaurante";
import Usuarios from "./Componentes/Usuarios";
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
import ClientesBarra from "./Componentes/ClientesBarra";
import AgregarClientesBarra from "./Componentes/AgregarClientesBarra";
import CierreCajas from "./Componentes/CierraCaja";
import RestauranteTurin from "./Componentes/RestauranteTurin";
import RestaurantePicolla from "./Componentes/RestaurantePicolla";
import RestauranteNotte from "./Componentes/RestauranteNotte";
import AgregarProveedores from "./Componentes/AgregarProveedores";

import Login from "./Componentes/Login";
import AyudaSistema from "./Componentes/AyudaSistema";
import AyudaSeguridad from "./Componentes/AyudaSeguridad";
import AyudaRestaurante from "./Componentes/AyudaRestaurante";
import AyudaLicores from "./Componentes/AyudaLicores";
import AyudaVinos from "./Componentes/AyudaVinos";
import Administracion from "./Componentes/Administracion";
import Especiales from "./Componentes/Especiales";
import Buffet from "./Componentes/Buffet";
import AgregarBuffet from "./Componentes/AgregarBuffet";
import Bebidas from "./Componentes/Bebidas";
import BebidasCalientes from "./Componentes/BebidasCalientes";
import AgregarBebidaCaliente from "./Componentes/AgregarBebidaCaliente";
import BebidasHeladas from "./Componentes/BebidasHeladas";
import AgregarBebidaHelada from "./Componentes/AgregarBebidaHelada";
import BebidasGaseosas from "./Componentes/BebidasGaseosas";
import AgregarBebidaGaseosa from "./Componentes/AgregarBebidaGaseosa";
import BebidasLicores from "./Componentes/BebidasLicores";
import AgregarBebidaLicor from "./Componentes/AgregarBebidaLicor";
import BebidasVinos from "./Componentes/BebidasVinos";
import AgregarBebidaVino from "./Componentes/AgregarBebidaVino";
import Especialidades from "./Componentes/Especialidades";
import AgregarEspecialidad from "./Componentes/AgregarEspecialidad";
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
import Clientes from "./Componentes/Clientes";
import ReporteFacturacion from "./Componentes/ReporteFacturacion";
import ReporteClientes from "./Componentes/ReporteClientes";
import Mesas from "./Componentes/Mesas";
import Empleados from "./Componentes/Empleados";
import Puestos from "./Componentes/Puestos";
import AgregarEmpleados from "./Componentes/AgregarEmpleados";
import AgregarPuesto from "./Componentes/AgregarPuesto";
import AgregarMesas from "./Componentes/AgregarMesas";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Fragment>
          <Navbar />
          <Route path="/home" component={Home} />
          <Route path="/agregarClientesMesas" component={AgregarClientesMesas} exact />
        
          <Route path="/agregarClientesMesas/:obj" component={AgregarClientesMesas} exact />
          <Route path="/agregarClientesMesas/:obj/:restaurante" component={AgregarClientesMesas}  />

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
          <Route path="/clientesBarra" component={ClientesBarra} />
          <Route path="/agregarClientesBarra" component={AgregarClientesBarra} exact/>

           
          <Route path="/agregarClientesBarra/:obj" component={AgregarClientesBarra} exact />
          <Route path="/agregarClientesBarra/:obj/:restaurante" component={AgregarClientesBarra}  />

          <Route path="/cierreCajas" component={CierreCajas} />
          <Route path="/restauranteTurin" component={RestauranteTurin} />
          <Route path="/restaurantePicolla" component={RestaurantePicolla} />
          <Route path="/restauranteNotte" component={RestauranteNotte} />
          <Route path="/agregarProveedores" component={AgregarProveedores} />

          <Route path="/restaurantes" exact component={Restaurantes} />
          <Route path="/restaurantes/agregar-restaurantes" exact component={AgregarRestaurante} />

          <Route path="/ayuda-sistema" component={AyudaSistema} />
          <Route path="/ayuda-seguridad" component={AyudaSeguridad} />
          <Route path="/ayuda-restaurante" component={AyudaRestaurante} />
          <Route path="/ayuda-licores" component={AyudaLicores} />
          <Route path="/ayuda-vinos" component={AyudaVinos} />

          <Route path="/administracion" exact component={Administracion} />
          <Route path="/administracion/especiales" exact component={Especiales} />
          <Route path="/administracion/especiales/buffet" exact component={Buffet} />
          <Route path="/administracion/especiales/buffet/agregar-buffet" exact component={AgregarBuffet} />
          <Route path="/administracion/especiales/bebidas" exact component={Bebidas} />

          <Route path="/administracion/especiales/bebidas/calientes" exact component={BebidasCalientes} />
          <Route path="/administracion/especiales/bebidas/calientes/agregar-bebida-caliente" exact component={AgregarBebidaCaliente} />

          <Route path="/administracion/especiales/bebidas/heladas" exact component={BebidasHeladas} />
          <Route path="/administracion/especiales/bebidas/helada/agregar-bebida-helada" exact component={AgregarBebidaHelada} />

          <Route path="/administracion/especiales/bebidas/gaseosas" exact component={BebidasGaseosas} />
          <Route path="/administracion/especiales/bebidas/gaseosas/agregar-bebida-gaseosa" exact component={AgregarBebidaGaseosa} />

          <Route path="/administracion/especiales/bebidas/licores" exact component={BebidasLicores} />
          <Route path="/administracion/especiales/bebidas/licores/agregar-bebida-licor" exact component={AgregarBebidaLicor} />

          <Route path="/administracion/especiales/bebidas/vinos" exact component={BebidasVinos} />
          <Route path="/administracion/especiales/bebidas/vinos/agregar-bebida-vino" exact component={AgregarBebidaVino} />

          <Route path="/administracion/especiales/especialidades" exact component={Especialidades} />
          <Route path="/administracion/especiales/especialidades/agregar-especialidad" exact component={AgregarEspecialidad} />
          <Route path="/tecnologia" component={Tecnologia} />
          <Route path="/agregarTecnologia" component={AgregarTecnologia} />
          <Route path="/ventanaProveedores" component={VentanaProveedores} />
          <Route path="/listaMarcas" component={ListaMarcas} />
          <Route path="/marcas" component={Marcas} />
          <Route path="/catalogoProductos" component={CatalogoProductos} />
          <Route path="/comestibles" component={Comestibles} />
          <Route path="/agregarComestibles" component={AgregarComestibles} />
          <Route path="/empaques" component={Empaques} />
          <Route path="/agregarEmpaques" component={AgregarEmpaques} />
          <Route path="/limpieza" component={Limpieza} />
          <Route path="/agregarLimpieza" component={AgregarLimpieza} />
          <Route path="/utensilio" component={Utensilio} />
          <Route path="/agregarUtensilio" component={AgregarUtensilios} />
          <Route path="/proveedores" component={Proveedores} />
          <Route path="/ventanaReportes" component={VentanaReportes} />
          <Route path="/bitacora" component={Bitacora} />
          <Route path="/clientes" component={Clientes} />
          <Route path="/reporteFacturacion" component={ReporteFacturacion} />
          <Route path="/reporteClientes" component={ReporteClientes} />
          <Route path="/mesas" component={Mesas} />
          <Route path="/empleados" component={Empleados} />
          <Route path="/puestos" component={Puestos} />
          <Route path="/agregarEmpleados" component={AgregarEmpleados} />
          <Route path="/agregarPuestos" component={AgregarPuesto} />
          <Route path="/agregarMesas" component={AgregarMesas} />
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
